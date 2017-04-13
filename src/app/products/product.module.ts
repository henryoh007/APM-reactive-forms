import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData }  from './product-data';

import { ProductRoutingModule, routedComponents } from './product-routing.module';

import {ProductListComponent} from './product-list.component';

import { ProductDetailComponent } from './product-detail.component';
import { ProductDetailGuard } from './product-detail.guard';

import { ProductEditComponent } from './product-edit.component';
import { ProductEditGuard } from './product-edit.guard';

import { ProductFilterPipe } from './product-filter.pipe';
import {ProductService} from './product.service';

import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'product/:id',
        canActivate: [ ProductDetailGuard],
        component: ProductDetailComponent
      },
      { path: 'productEdit/:id',
        canDeactivate: [ ProductEditGuard ],
        component: ProductEditComponent },
    ])
  ],
  declarations: [
    routedComponents,
    ProductListComponent,
    ProductFilterPipe,
    ProductEditComponent,
    ProductDetailComponent
  ],
  providers: [
    ProductService,
    ProductDetailGuard,
    ProductEditGuard
  ]
})
export class ProductModule { }
