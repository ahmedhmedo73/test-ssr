import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  constructor(
    private meta: Meta,
    private title: Title,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title.setTitle(data.title);
      this.meta.updateTag({
        property: 'og:title',
        content: data.title,
      });
      this.meta.updateTag({
        property: 'og:description',
        content: data.description,
      });
      this.meta.updateTag({
        property: 'og:image',
        content: data.image,
      });
    });
  }
}
