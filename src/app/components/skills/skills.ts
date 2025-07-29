import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Skill {
  name: string;
  icon: string;
}

interface Certification {
  name: string;
  issuer: string;
  year: string;
  image: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills{
  cloudSkills: Skill[] = [
    { name: 'AWS', icon: 'assets/images/skills/aws.png' },
    { name: 'Azure', icon: 'assets/images/skills/azure.png' },
    { name: 'GCP', icon: 'assets/images/skills/gcp.png' },
    { name: 'Kubernetes', icon: 'assets/images/skills/kubernetes.png' },
    { name: 'Docker', icon: 'assets/images/skills/docker.png' },
    { name: 'Terraform', icon: 'assets/images/skills/terraform.png' }
  ];

  techSkills: Skill[] = [
    { name: 'Git', icon: 'assets/images/skills/git.png' },
    { name: 'Jenkins', icon: 'assets/images/skills/jenkins.png' },
    { name: 'Ansible', icon: 'assets/images/skills/ansible.png' },
    { name: 'Prometheus', icon: 'assets/images/skills/prometheus.png' },
    { name: 'Grafana', icon: 'assets/images/skills/grafana.png' },
    { name: 'Linux', icon: 'assets/images/skills/linux.png' }
  ];

  certifications: Certification[] = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2023',
      image: 'assets/images/certifications/aws-certified.png'
    },
    {
      name: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      year: '2022',
      image: 'assets/images/certifications/cka.png'
    },
    {
      name: 'Terraform Associate',
      issuer: 'HashiCorp',
      year: '2021',
      image: 'assets/images/certifications/terraform-certified.png'
    }
  ];
}