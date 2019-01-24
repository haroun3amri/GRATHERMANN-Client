import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from "../../../../Models/product";
import {ProductComponent} from "../product/product.component";
import {ComparatorComponent} from "../product/comparator/comparator.component";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @ViewChild('comparateur') comparateur: ComparatorComponent;


  favoriteSeason: string;
  seasons: string[] = ['Spar', 'Casino', 'Lidle', 'Util' , 'Carrefour' , 'Monoprix'];
  @Input()Cart: Array<Product> = [];

  constructor() { }

  ngOnInit() {
    console.log(this.Cart);
  }

}
