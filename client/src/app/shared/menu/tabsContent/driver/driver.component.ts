import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../../Models/product";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  @Output() public deleiveryChoiceChecked: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public selectDriveDelivery() {
    this.deleiveryChoiceChecked.emit(4);
  }

  public selectHomeDelivery() {
    this.deleiveryChoiceChecked.emit(12);
  }

}
