import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
 projects: Project[] = [
    {
      title: 'Suivi en temps réel des activations SIM',
      description: 'Le projet a pour but de remplacer les outils Bi traditionnel par une alternatif open source',
      image: 'assets/images/image.png',
      link: '#',
      tags: ['Docker', 'Grafana', 'SonarqQube', 'CI/CD']
    },
    {
      title: 'Pipeline CI/CD sécurisé',
      description: 'Mise en place d\'un pipeline GitOps sécurisé avec ArgoCD et OPA',
      image: 'assets/images/project2.jpg',
      link: '#',
      tags: ['GitOps', 'ArgoCD', 'OPA', 'GitHub Actions']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Déploiement d\'une infrastructure multi-cloud avec Terraform',
      image: 'assets/images/project3.jpg',
      link: '#',
      tags: ['Terraform', 'AWS', 'Azure', 'GCP']
    },
    {
      title: 'Monitoring Cloud Native',
      description: 'Solution de monitoring avec Prometheus, Grafana et Loki',
      image: 'assets/images/project4.jpg',
      link: '#',
      tags: ['Prometheus', 'Grafana', 'Loki', 'Alertmanager']
    },
    {
      title: 'Automatisation DevOps',
      description: 'Scripts d\'automatisation pour le déploiement et la gestion',
      image: 'assets/images/project5.jpg',
      link: '#',
      tags: ['Python', 'Bash', 'Ansible', 'Puppet']
    },
    {
      title: 'Sécurité Cloud',
      description: 'Mise en place de politiques de sécurité et compliance',
      image: 'assets/images/project6.jpg',
      link: '#',
      tags: ['AWS IAM', 'CIS Benchmark', 'Security Hub', 'GuardDuty']
    }
  ];
}
