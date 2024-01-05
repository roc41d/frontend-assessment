import { Component } from '@angular/core';
import { CustomTextDirective } from '../shared/directives/custom-text.directive';


@Component({
    selector: 'app-custom-directive',
    standalone: true,
    template:`
            <div appCustomText [textToReplace]=customText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </div>
        `,
    styles: [
        `
            div[appCustomText] {
                font-size: 18px;
                color: #333;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
            }
        `
    ],
    imports: [CustomTextDirective]
})

export class CustomDirectiveComponent {
    customText: string = `
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    `;
  }