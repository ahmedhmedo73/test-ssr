import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { myResolverResolver } from './my-resolver.resolver';

export const routes: Routes = [
    {
        path : 'products',
        component : ProductsComponent,
        resolve: { meta: myResolverResolver }
    }
];
