import { Injectable } from '@angular/core';
import { SearchForm } from './search-form';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class SearchFormService implements SearchForm {
  constructor() {
    this.prepareForm();
  }

  private _form!: FormGroup;

  get form(): FormGroup {
    return this._form;
  }

  get flightNumber(): FormControl {
    return this._form.get('flightNumber') as FormControl;
  }

  get name(): FormControl {
    return this._form.get('name') as FormControl;
  }

  get success(): FormControl {
    return this._form.get('success') as FormControl;
  }

  reset() {
    this._form.reset();
  }

  private prepareForm() {
    this._form = new FormGroup({
      flightNumber: new FormControl(null, Validators.min(1)),
      name: new FormControl(null),
      success: new FormControl(null),
    });
  }
}
