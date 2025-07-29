import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', ['$event'])
  scroll = (): void => {
    this.isScrolled = window.scrollY > 50;
  };
}
