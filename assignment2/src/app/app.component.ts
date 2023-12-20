import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DialogComponent, FormsModule],
  //templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <h1>Reusable Dialog Component</h1>
    <button (click)="openDialog()">Open dialog</button>
    <app-dialog dialog-title *ngIf="isDialogOpen" (closeDialog)="closeDialog()">
      <form dialog-content #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)">
        <label>
          Subscribe to our newsletter! <br />
        </label>
        <label>
          Email:
          <input type="email" name="email" ngModel>
        </label>
        <button type="submit">Submit</button>
      </form>
      <button dialog-button (click)="closeDialog()">X</button>
    </app-dialog>
  `,
})
export class AppComponent {
  title = 'assignment2'
  isDialogOpen: boolean = false

  openDialog(): void {
    this.isDialogOpen = true
  }

  closeDialog(): void {
    this.isDialogOpen = false
  }

  onSubmit(form: any): void {
    if (form.value.email == "" || !form.value.email.includes('@')) {
      alert("Invalid form")
      return
    }
    alert("Email: " + form.value.email + "\nThank you for subscribing!")
    this.closeDialog()
  }
}
