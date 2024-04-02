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
    this.route.data.subscribe(({ meta }: any) => {
      console.log(meta);

      this.title.setTitle(meta.title);
      this.meta.updateTag({
        property: 'og:title',
        content: meta.title,
      });
      this.meta.updateTag({
        property: 'og:description',
        content: meta.description,
      });
      this.meta.updateTag({
        property: 'og:image',
        content: meta.image,
      });
    });
  }
}
