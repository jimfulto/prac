import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prac';
  customerForm: FormGroup;

  ngOnInit() {
    this.customerForm = new FormGroup({
      'customerName': new FormControl('', Validators.required),
      'customerAge': new FormControl('', Validators.required),
      'customerContact': new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      'customerEmail': new FormControl('', [Validators.required, Validators.email]),
    });
  }
  onSubmit() {
    console.log(this.customerForm.value);
  }
}
