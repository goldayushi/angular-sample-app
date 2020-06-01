import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      options: this.fb.array([])
    });
  }

  get optionForm(): FormGroup {
    return this.fb.group({
      name: [''],
      value: ['']
    });
  }

  get options(): FormArray {
    return this.form.get('options') as FormArray;
  }

  addOptionForm() {
    this.options.push(this.optionForm);
  }

  removeOptionForm(idx: number) {
    this.options.removeAt(idx);
  }

}
