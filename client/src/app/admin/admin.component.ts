import { Component, OnInit } from '@angular/core';
import {collectedInfoMock} from "../fake-api/collected-info-fake";
import {CollectedInfo} from "../Models/collected-info";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public collectedInformation = collectedInfoMock;
  public selectedInfo: CollectedInfo;


  constructor() { }

  ngOnInit() {
  }

  chargeDetails(info) {
    this.selectedInfo = info;
  }

}
