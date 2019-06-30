import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent> , @Inject(MAT_DIALOG_DATA) public data , private router: Router) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigateByUrl('')
  }

}
