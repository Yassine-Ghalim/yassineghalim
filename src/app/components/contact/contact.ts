import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Add this import
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
   imports: [
    CommonModule,
    FormsModule // Add this to your imports array
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
   @ViewChild('contactForm') contactForm!: NgForm;
  isLoading = false;

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isLoading = true;
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isLoading = false;
        this.contactForm.resetForm();
        alert('Message envoyé avec succès!');
      }, 1500);
    }
  }
  
}
