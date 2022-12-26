import { Component, OnInit } from '@angular/core';
import { GetCallService } from 'src/app/get-call.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productsList: any;
  sliceProduct: any;
  constructor(private products: GetCallService) { }

  ngOnInit(): void {
    this.getProductsList();
  }

  // getProductsList() {
  //   console.log(this.products.fetchAllProducts());
  // }

  getProductsList() {
    this.products.fetchAllProducts().subscribe((data: any) => {
      console.log(data);
      this.productsList = data;
      this.sliceProduct = this.productsList.slice(0,20)
    });

  }
}
