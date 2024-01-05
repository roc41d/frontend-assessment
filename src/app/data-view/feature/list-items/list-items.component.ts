import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { BookService } from '../../data-access/book.service';
import { Book } from '../../data-access/interfaces/book';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-list-items',
  standalone: true,
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.scss',
  providers: [BookService],
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ListItemsComponent implements OnInit {

  private bookService = inject(BookService);

  books: Book[] = [];
  dataSource!: MatTableDataSource<Book>;
  displayedColumns: string[] = ['id', 'content', 'type', 'image'];

  filterInput = new FormControl('');

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((res) => {
      this.books = res.data;
      this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

      // this is to handle nested properties
      this.dataSource.sortingDataAccessor = (item: Book, property: string) => {
        switch (property) {
          case 'content':
            return item.attributes.content.toLowerCase();
          case 'type':
            return item.attributes.display_properties.type.toLowerCase();
          default:
            return (item as any)[property];
        }
      };
    });

    this.filterInput
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        if(!value || value === '') {
          this.dataSource.data = this.books;
        } else {
          this.applyFilter(value);
        }
    });
  }

  applyFilter(searchInput: string): void {
    const contentFilter = searchInput.toLowerCase();

    this.dataSource.filterPredicate = (data, filter) => {
      return data.attributes.content.toLowerCase().includes(contentFilter);
    };

    this.dataSource.filter = contentFilter;

    if (!contentFilter) {
      this.dataSource.data = this.books;
    }
  }

}
