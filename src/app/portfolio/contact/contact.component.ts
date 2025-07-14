import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
import { LanguageService } from '../language.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '../../../enviroments/enviroment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private readonly languageService = inject(LanguageService);

  isSentEmail = signal<boolean>(false);

  emailForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[\p{L}\s\-']+$/u),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500),
    ]),
  });

  get name() {
    return this.emailForm.get('name');
  }

  get email() {
    return this.emailForm.get('email');
  }

  get message() {
    return this.emailForm.get('message');
  }

  get time() {
    return this.emailForm.get('time');
  }

  title = computed(() => this.languageService.language().contact.title);
  phone = computed(() => this.languageService.language().contact.phone);
  formData = computed(() => this.languageService.language().contact.form);
  errorMessages = computed(
    () => this.languageService.language().contact.errorMessages
  );

  sendEmail(e: Event) {
    if (this.emailForm.valid) {
      e.preventDefault();

      emailjs
        .sendForm(
          environment.emailJSServiceId,
          environment.emailJSTemplateId,
          e.target as HTMLFormElement,
          {
            publicKey: environment.emailJSPublicKey,
          }
        )
        .then(
          (result: EmailJSResponseStatus) => {
            console.log('SUCCESS!', result.status, result.text);
            this.isSentEmail.set(true);
            setTimeout(() => {
              this.isSentEmail.set(false);
            }, 2000);
          },
          (error) => {
            console.log('FAILED...', error);
          }
        );

      this.emailForm.reset();
    }
  }
}
