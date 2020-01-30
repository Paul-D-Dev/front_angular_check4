import { User } from './../../shared/models/user';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from './email-validator';

export interface DialogData {
  cart: Event[];
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  cart: Event[] = [];
  user = new User();

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


    cartForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, ],
      // email: ['', Validators.required, emailValidator],
    });


  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.data.cart);

    this.cart = this.data.cart;

    console.log(this.cart);

  }

  postTicket() {
    this.cartForm.patchValue({
      name: this.cartForm.value.name,
      email: this.cartForm.value.email
    });
    console.log(this.cartForm.value);

  }

}
