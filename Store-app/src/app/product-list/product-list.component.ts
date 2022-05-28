import { Component, OnInit } from '@angular/core';
import { products } from '../products';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = products;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }



  share() {
    this._snackBar.open("The product has been shared!", undefined, {
      duration: 1000
    }) ;
  }

  onNotify() {
    this._snackBar.open("You will be notified when the product goes on sale", undefined, {
      duration: 1000
    }) ;
  }
}
