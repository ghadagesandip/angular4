import { Component } from '@angular/core';
import { Product } from './product';

@Component({
    selector : 'product-form',
    templateUrl : './product-form.html'
})

export class ProductFormComponent {

    model = new Product(1, 'product A');

}