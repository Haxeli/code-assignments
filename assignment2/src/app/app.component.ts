import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { DialogTitleComponent } from './dialog-title/dialog-title.component';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DialogComponent, DialogTitleComponent, DialogButtonComponent, FormsModule],
  styleUrl: './app.component.css',
  template: `
    <h1>Reusable Dialog Component</h1>
    <button (click)="openDialog()">Open dialog</button>
    <app-dialog *ngIf="isDialogOpen" (closeDialog)="closeDialog()">
      <app-dialog-title dialog-title [title]="'Subscribe'"></app-dialog-title>
      <form dialog-content #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)">
        <label>
          Subscribe to our newsletter! <br />
        </label>
        <label>
          Email:
          <input type="email" name="email" ngModel>
        </label>
        <!-- For forms, the dialog button needs to be declared inside the form component -->
        <app-dialog-button dialog-button type="submit" >Submit</app-dialog-button>
      </form>
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
    console.log("closeDialog")
    this.isDialogOpen = false
  }

  onSubmit(form: any): void {
    console.log("onSubmit")
    if (form.value.email == "" || !form.value.email.includes('@')) {
      alert("Invalid form")
      return
    }
    alert("Email: " + form.value.email + "\nThank you for subscribing!")
    this.closeDialog()
  }
}
