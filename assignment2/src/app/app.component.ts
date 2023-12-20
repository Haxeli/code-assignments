import { Component, OnInit } from '@angular/core';
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
    <!-- <button (click)="openDialog()">Open dialog</button> -->
    <app-dialog *ngIf="dialogs['form']" [isOpen]="dialogs['form']" (close)="closeDialog('form')">
      <app-dialog-title dialog-title [title]="'Subscribe'"></app-dialog-title>
      <form dialog-content #exampleForm="ngForm" (ngSubmit)="onSubmit(exampleForm)">
        <label>
          Subscribe to our newsletter! <br />
        </label>
        <label>
          Email:
          <input type="email" name="email" ngModel>
        </label>
        <app-dialog-button dialog-button type="submit" >Submit</app-dialog-button>
      </form>
      <app-dialog-button dialog-button (click)="closeDialog('form')">X</app-dialog-button>
    </app-dialog>
    <app-dialog *ngIf="dialogs['delete']" [isOpen]="dialogs['delete']" (close)="closeDialog('delete')">
      <app-dialog-title dialog-title [title]="'Confirm Action'"></app-dialog-title>
      <p dialog-content>Are you sure you want to delete your account?</p>
      <img dialog-content src="https://media.giphy.com/media/3o7aDcz6Y0fzWYvwrq/giphy.gif" alt="A gif that informs of the media's unavailability" width="200px" height="100px"/>
      <app-dialog-button dialog-button (click)="confirmDelete()">Confirm</app-dialog-button>
      <app-dialog-button dialog-button (click)="closeDialog('delete')">Cancel</app-dialog-button>
    </app-dialog>
    <app-dialog *ngIf="dialogs['cookie']" [isOpen]="dialogs['cookie']" (close)="closeDialog('cookie')">
      <app-dialog-title dialog-title [title]="'Cookies'"></app-dialog-title>
      <p dialog-content>This website uses cookies to improve your experience.</p>
      <app-dialog-button dialog-button (click)="onAccept()">Accept</app-dialog-button>
      <app-dialog-button dialog-button (click)="closeDialog('cookie')">Decline</app-dialog-button>
    </app-dialog>
  `,
  //Above are 3 examples of the dialog component's usage. Note that a form requires another dialog-button to be declared inside the form tag to handle the submission.
})
export class AppComponent {
  title = 'assignment2'
  dialogs: {[key:string]: boolean} = {
    form: true,
    delete: true,
    cookie: true
  }

  closeDialog(dialogName: string): void {
    console.log(`closeDialog: ${dialogName}`)
    this.dialogs[dialogName] = false
  }

  onSubmit(form: any): void {
    if (form.value.email == "" || !form.value.email.includes('@')) {
      alert("Invalid form (requires the @ sign)")
      return
    }
    alert("Email: " + form.value.email + "\nThank you for subscribing!")
    this.closeDialog('form')
  }

  confirmDelete(): void {
    alert("Account deleted!")
    this.closeDialog('delete')
  }

  onAccept(): void {
    alert("Cookies accepted!")
    this.closeDialog('cookie')
  }
}
