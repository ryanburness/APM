import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router) { }


    onBack(): void {
        this._router.navigate(['/products']);
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;

        this._productService.getProduct(id)
                    .subscribe((product) => this.product = product,
                        error => this.errorMessage = <any>error);
    }
}