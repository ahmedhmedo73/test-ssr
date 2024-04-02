import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private meta: Meta, private title: Title) {}
  ngOnInit(): void {
    this.title.setTitle('init page');
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
      content: 'https://logowik.com/content/uploads/images/google-black1762.jpg',
    });
  }
}
