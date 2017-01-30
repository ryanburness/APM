import { AppRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './product.service';
import { ProductDetailGuard } from './product-guard.service';
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent,
    ],

    providers: [
        ProductDetailGuard,
        ProductService
    ],
})
export class ProductModule { }
