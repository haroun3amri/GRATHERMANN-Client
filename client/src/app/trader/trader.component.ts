import {Component, OnInit, VERSION} from '@angular/core';
import {traderMock} from "../fake-api/trader-faker";
import {MatDialog, MatSnackBar} from "@angular/material";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AddComponent} from "./dialogs/add/add.component";
import {EditComponent} from "./dialogs/edit/edit.component";
import {DetailsComponent} from "./dialogs/details/details.component";

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.scss']
})
export class TraderComponent implements OnInit {
  form: FormGroup;
  public traders = traderMock;
  rows: number[] ;
  ElementNumber: number;
  innerWidth: number;
  ngVersion: string = VERSION.full;
  matVersion: string = '5.1.0';
  breakpoint: number;

  constructor(private fileLoader: FormBuilder ,public dialog: MatDialog, private snackBar: MatSnackBar) { }

  public ngOnInit(): void {

    this.form = this.fileLoader.group({
      controle1: '',
    });
    this.ElementNumber = 5;
    console.log(this.traders);
    this.rows = Array.from(
      Array(Math.ceil(this.traders.length / 2)).keys()
    );
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 5;
    this.innerWidth = window.innerWidth;
  }

  public get controle1(): FormControl {
    return this.form.controls.controle1 as FormControl;
  }

  public openAddCollectedInformationDialog(collection) {
    let dialogRef = this.dialog.open(AddComponent, {
      width: '890px',
      data: {collection: collection}
    });
  }

  public editTraderInformations(trader) {
    let dialogRef = this.dialog.open(EditComponent, {
      width: '890px',
      data: {trader: trader}
    });
  }

  public showInfomationsDetails(trader) {
    let dialogRef = this.dialog.open(DetailsComponent, {
      width: '890px',
      data: {trader: trader}
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
