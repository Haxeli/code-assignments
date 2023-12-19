import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DialogComponent],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <h1>Hello world!</h1>
    <button (click)="openDialog()">Open dialog</button>
    <app-dialog *ngIf="isDialogOpen" [title]="dialogTitle" (closeDialog)="closeDialog()">
      <p></p>
    </app-dialog>
  `,
})
export class AppComponent {
  title = 'assignment2';
  dialogTitle: string = 'Re-usable dialog'
  dialogContent: string = 'Content'
  isDialogOpen: boolean = false

  openDialog(): void {
    this.isDialogOpen = true
  }

  closeDialog(): void {
    this.isDialogOpen = false
  }
}
