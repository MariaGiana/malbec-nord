import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomersMessagesService  } from '../customers-messages.service'; 
import { Contact } from '../Contact';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-form-contact',
  standalone: false,
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})
export class FormContactComponent {

  informationMessage: string | null = null;
  isSuccess: boolean | null = null;

  constructor(
    private route: ActivatedRoute,
    private CustomersService: CustomersMessagesService
  ) {}

  formContact= new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl(''),
    message: new FormControl('', Validators.required)
  }, [this.isMisMatch]);

  isMisMatch(control: AbstractControl): ValidationErrors | null{
    if(control.get('email')?.value !== control.get('confirmEmail')?.value){
      return{emailMisMatch:true};
    }
    return null;
  }

  onSubmit(){
    //enviar los datos del form
    const formValue = this.formContact.value;

    const contactToSend: Contact = {
      name: formValue.name ?? '',
      email: formValue.email ?? '',
      message: formValue.message ?? '',
      subject: formValue.subject ?? ""
    };

    if (this.formContact.valid) {
      this.CustomersService.postMessages(contactToSend).subscribe({
        next: (response) => {
          //console.log('Contact sended:', response);
          this.informationMessage = '¡Your message was correctly send!';
          this.isSuccess=true;
          this.formContact.reset();
          this.clearMessageAfterDelay();
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error: could not send it', err);
          this.informationMessage = '¡Your message could not send!';
          this.isSuccess=false;
          this.clearMessageAfterDelay();
        }
      });
    }
  }
  clearMessageAfterDelay() {
    setTimeout(() => {
      this.informationMessage = null;
    }, 4000); 
  }
  }


