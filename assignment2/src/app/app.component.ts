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
    <h1>Hello world!</h1>
    <button (click)="openDialog()">Open dialog</button>
    <app-dialog *ngIf="isDialogOpen" [title]="dialogTitle" (closeDialog)="closeDialog()">
      <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
        <label>
          Name:
          <input type="text" name="name" ngModel>
        </label>
        <label>
          Email:
          <input type="email" name="email" ngModel>
        </label>
        <button type="submit">Submit</button>
      </form>
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

  onSubmit(form: any): void {
    console.log("Name: " + form.value.name + ", Email: " + form.value.email)
  }
}
