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
    this.title.setTitle('My Awesome Angular 17 SSR App');
    this.meta.updateTag({
      property: 'og:title',
      content: 'My Awesome Angular 17 SSR App',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'A detailed description of my Angular 17 SSR app content.',
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png',
    });
  }
}
