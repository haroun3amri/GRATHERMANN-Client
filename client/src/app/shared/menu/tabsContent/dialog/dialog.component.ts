import {Component, EventEmitter, Inject, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Product} from "../../../../Models/product";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class DialogComponent implements OnInit {

  @Output() public productCartChanged: EventEmitter<any> = new EventEmitter();


  constructor(public dialogRef: MatDialogRef<DialogComponent> , @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  removeFromCart(product: Product) {
    this.data.cart.splice(this.data.cart.indexOf(product),1);
    product.isInCart = false;
    this.productCartChanged.emit();
  }

}
