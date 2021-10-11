import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public product: Array<Product> = [];
  public productResult: Array<Product> = [];

  search: boolean = false;
  searchError: boolean = false;
  fsearch:any;
  public miToken: number = +localStorage.getItem('personalToken')!;
  constructor(private ProductService: ProductsService) { 
    if (localStorage.getItem('personalToken')) {
      this.miToken = +localStorage.getItem('personalToken')!;
    }
  }

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    this.ProductService.getProduct().subscribe((p: Array<Product>) => {
      this.product = p;
    })
  }

  sendSearch() {

    this.productResult = this.product.filter((product: Product) => product.name  === this.fsearch )
   
    console.log(this.productResult.length)

    if(this.productResult.length >= 1){
      this.search = true;
      this.searchError = false;
    }
    else{
      this.search = false;
      this.searchError = true;
    }

  }

}
