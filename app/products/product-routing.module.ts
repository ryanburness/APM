import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-guard.service';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'products', component: ProductListComponent
        },
        {
            path: 'product/:id',
            component: ProductDetailComponent,
            canActivate: [ProductDetailGuard]
        },
    ])],
    exports: [RouterModule]
})

export class AppRoutingModule { }