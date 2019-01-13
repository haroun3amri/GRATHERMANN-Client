import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;

  constructor(private fileLoader: FormBuilder) { }

  ngOnInit() {
    this.form = this.fileLoader.group({
      controle1: '',
      controle2: '',
    });

  }

  public get controle1(): FormControl {
    return this.form.controls.controle1 as FormControl;
  }

  public get controle2(): FormControl {
    return this.form.controls.controle2 as FormControl;
  }

}
