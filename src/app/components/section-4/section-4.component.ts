import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';


@Component({
  selector: 'app-section-4',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './section-4.component.html',
  styleUrl: './section-4.component.css'
})
export class Section4Component{

    showEmailError: boolean = false;
    emailError : string = '';
    myForm: FormGroup;

    isSubmitting: boolean = false;
    showMessage: boolean = false;
    exitoEnviado : boolean = false;

    constructor(private fb: FormBuilder){
      this.myForm = this.fb.group({
        email : ['',[Validators.required, Validators.email]]
      });
    }
    submitForm() {
        this.showEmailError = false;
        this.emailError = "";
        if (this.myForm.invalid) {
          if (this.myForm.get('email')?.invalid) {
            if (this.myForm.get('email')?.value === '') {
              this.emailError = "El email es requerido.";
            } else {
              this.emailError = "El email no es válido.";
            }
            this.showEmailError = true;
            this.hideEmailError();
          }
          return;
        } else {
          this.isSubmitting = true;
          this.isSubmitting = false;
          this.showMessage = true;
          setTimeout(() => {
              this.showMessage = false;
          }, 2000); 
          this.exitoEnviado = true;
          console.log("hola");
          return;
        }        
    }
 
  hideEmailError() {
    setTimeout(() => {
      this.showEmailError = false;
    }, 2000);
  }
}