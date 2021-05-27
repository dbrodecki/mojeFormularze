import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('Ania'),
      email: new FormControl('ania@p.lodz.pl'),
      message: new FormControl('dzisiaj jestem na PŁ')
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
}
