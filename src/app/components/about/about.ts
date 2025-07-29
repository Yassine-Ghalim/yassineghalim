import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  skills = [
    { name: 'AWS Cloud', percentage: 95 },
    { name: 'Kubernetes', percentage: 90 },
    { name: 'Terraform', percentage: 85 },
    { name: 'Docker', percentage: 88 },
    { name: 'CI/CD Pipelines', percentage: 92 }
  ];
}
