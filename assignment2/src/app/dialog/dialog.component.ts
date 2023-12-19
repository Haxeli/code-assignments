import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  @Input() title!: string
  @Input() content!: string
  @Output() closeDialog = new EventEmitter<void>()

  onClose():void {
    this.closeDialog.emit()
  }
}
