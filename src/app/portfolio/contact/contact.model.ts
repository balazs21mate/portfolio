export interface Contact {
  title: string;
  phone: string;
  form: {
    title: string;
    name: string;
    message: string;
    buttonText: string;
  };
  errorMessages: {
    nameRequired: string;
    nameValid: string;
    emailRequired: string;
    emailValid: string;
    messageRequired: string;
    messageMinLength: string;
    messageMaxLength: string;
    sentEmail: string;
  };
}
