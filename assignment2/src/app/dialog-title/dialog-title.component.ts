import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-title',
  standalone: true,
  imports: [],
  template: `{{title}}`,
  styleUrl: './dialog-title.component.css'
})
export class DialogTitleComponent {
  @Input() title!: string
}
