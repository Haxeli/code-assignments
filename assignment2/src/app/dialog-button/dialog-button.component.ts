import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog-button',
  standalone: true,
  imports: [],
  template: `<button (click)="onClose()"><ng-content></ng-content></button>`,
  styleUrl: './dialog-button.component.css'
})
export class DialogButtonComponent {
  @Output() closeDialog = new EventEmitter<void>()

  onClose():void {
    this.closeDialog.emit()
  }
}
