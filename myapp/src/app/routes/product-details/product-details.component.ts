import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCallService } from 'src/app/get-call.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  constructor(private route: ActivatedRoute, private getCall: GetCallService) { }

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    console.log(id);
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.getCall.fetchProduct(id).subscribe((data: any) => {
      console.log(data);
      this.productDetails = data;
    });
  }
}