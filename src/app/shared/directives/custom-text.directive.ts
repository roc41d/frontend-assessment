import { Directive, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appCustomText]',
  standalone: true
})
export class CustomTextDirective implements OnInit {

  @Input() textToReplace: string = 'Default Text';

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', this.textToReplace);
  }

}
