import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { About } from "./components/about/about";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Projects, Skills, Contact, Footer, About, Navbar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio';
}
