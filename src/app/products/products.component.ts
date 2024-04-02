import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(private meta: Meta, private title: Title) {}
  ngOnInit(): void {
    setTimeout(() => {
      
    }, 2000);
  }
}
