import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {

   public form: FormGroup;

  constructor(private fileLoader: FormBuilder) { }

  ngOnInit() {
    this.form = this.fileLoader.group({
      controle1: '',
      controle2: '',
      controle3: '',
      controle4: ''

    });

  }

  public get controle1(): FormControl {
    return this.form.controls.controle1 as FormControl;
  }

  public get controle2(): FormControl {
    return this.form.controls.controle2 as FormControl;
  }

  public get controle3(): FormControl {
    return this.form.controls.controle3 as FormControl;
  }

  public get controle4(): FormControl {
    return this.form.controls.controle4 as FormControl;
  }

}
