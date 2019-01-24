import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {productsMock} from "../../../../fake-api/products-fake";
import {MatTabGroup} from "@angular/material";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  products = productsMock;
  FruitProducts: number;
  vegetableNumber: number;
  meatNumber: number;
  milkNumber: number;
  fishnumber: number;
  breadNumber: number;
  spicesNumber: number;
  liquidesNumber: number;
  @Output() public categoryChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.FruitProducts = this.products.filter(e => e.category === 'fruits').length;
    this.vegetableNumber = this.products.filter(e => e.category === 'légumes').length;
    this.meatNumber = this.products.filter(e => e.category === 'viandes').length;
    this.milkNumber = this.products.filter(e => e.category === 'lait et frommage').length;
    this.fishnumber = this.products.filter(e => e.category === 'poissons').length;
    this.breadNumber = this.products.filter(e => e.category === 'pains et pates').length;
    this.spicesNumber = this.products.filter(e => e.category === 'épices').length;
    this.liquidesNumber = this.products.filter(e => e.category === 'Boissons').length;
  }

  filterFruit() {
    this.categoryChanged.emit('fruits');
  }
  filterVegetable() {
    this.categoryChanged.emit('légumes');
  }
  filterMeat() {
    this.categoryChanged.emit('viandes');
  }
  filterMilk() {
    this.categoryChanged.emit('lait et frommage');
  }
  filterFish() {
    this.categoryChanged.emit('poissons');
  }
  filterBread() {
    this.categoryChanged.emit('pains et pates');
  }
  filterSpices() {
    this.categoryChanged.emit('épices');
  }
  filterLiquides() {
    this.categoryChanged.emit('Boissons');
  }



}
