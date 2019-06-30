import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Trader} from "../../../Models/trader";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditComponent implements OnInit {

  form: FormGroup;
  formErrors: any;
  trader: Trader;

  constructor(public dialogRef: MatDialogRef<EditComponent>,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.trader = data.trader;
  }

  ngOnInit() {

    this.form = this.formBuilder.group({
      firstname: this.trader.firstName,
      lastname: this.trader.lastName,
      dailyGain: this.trader.dailyGain
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

  get dailyGain(): FormControl {
    return this.form.controls.dailyGain as FormControl;
  }
}
