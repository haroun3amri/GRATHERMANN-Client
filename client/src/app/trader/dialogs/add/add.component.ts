import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  form: FormGroup;
  formErrors: any;
  collection: any;

  constructor(public dialogRef: MatDialogRef<AddComponent>, private formBuilder: FormBuilder,) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      phoneNumber: [''],
      email1: [''],
      email2: [''],
      turnover: [''],
      numberOfWorkedDaysPerWeeks: [''],
      numberOfFreeDayPerYear: ['']
    });

    this.dialogRef.afterClosed().subscribe(dialogResult => {
      if ( !dialogResult  || dialogResult[0] !== 'create-collection' ){
        return;
      }
      const newCollection = dialogResult[1];
    });
  }

  onSubmit() {
    if(this.invalid()) {
      this.showInvalid();
    } else {
      this.dialogRef.close(['create-tca', this.getFormData()]);
    }
  }

  getFormData(): any {
    const formData = this.form.getRawValue();
    if (this.collection != null) {
      formData['id'] = this.collection.id;
    }
    return formData;
  }

  onClose() {
    this.dialogRef.close(['cancel-tca']);
  }

  invalid(): Boolean {
    return this.form.invalid;
  }

  showInvalid() {
    for (let inner in this.form.controls) {
      this.form.get(inner).markAsTouched();
    }
  }

  get firstname(): FormControl {
    return this.form.controls.firstname as FormControl;
  }

  get lastname(): FormControl {
    return this.form.controls.lastname as FormControl;
  }

  get phoneNumber(): FormControl {
    return this.form.controls.phoneNumber as FormControl;
  }

  get email1(): FormControl {
    return this.form.controls.email1 as FormControl;
  }

  get email2(): FormControl {
    return this.form.controls.email2 as FormControl;
  }

  get turnover(): FormControl {
    return this.form.controls.turnover as FormControl;
  }

  get numberOfWorkedDaysPerWeeks(): FormControl {
    return this.form.controls.numberOfWorkedDaysPerWeeks as FormControl;
  }

  get numberOfFreeDayPerYear(): FormControl {
    return this.form.controls.numberOfFreeDayPerYear as FormControl;
  }

}
