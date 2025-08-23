import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const { name, email, subject, message } = this.contactForm.value;

      // Use mailto: (opens email client)
      window.location.href =
        `mailto:barbusinessfuture@gmail.com?subject=${encodeURIComponent(subject)}` +
        `&body=Name: ${encodeURIComponent(name)}%0D%0A` +
        `Email: ${encodeURIComponent(email)}%0D%0A` +
        `Message: ${encodeURIComponent(message)}`;
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
