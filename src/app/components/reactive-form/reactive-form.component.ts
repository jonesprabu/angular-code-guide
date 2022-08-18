import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyFormData } from '../../models/interfaces';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  public formData: CompanyFormData[] = [
    // { companyName: 'test', mode: 't1', email: 'e@e.com', price: 0 },
  ];

  dataForm = new FormGroup({
    companyName: new FormControl('', [Validators.required]),
    mode: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    price: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });

  constructor() {}

  ngOnInit() {}

  submitForm() {
    this.formData.push({
      companyName: this.dataForm.value.companyName,
      mode: this.dataForm.value.mode,
      email: this.dataForm.value.email,
      price: +this.dataForm.value.price,
    });
    this.dataForm.reset();
  }
}
