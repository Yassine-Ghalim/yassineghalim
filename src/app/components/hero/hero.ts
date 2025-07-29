import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

   socialLinks = [
    { icon: 'bi-github', url: 'https://github.com' },
    { icon: 'bi-linkedin', url: 'https://linkedin.com' },
    { icon: 'bi-twitter', url: 'https://twitter.com' },
    { icon: 'bi-instagram', url: 'https://instagram.com' }
  ];
}
