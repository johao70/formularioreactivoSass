import { Component } from '@angular/core';

//IMPORTS - BEGIN
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
//IMPORTS - FINISH

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private fb: FormBuilder){}

  //DECLARACIONES - BEGIN
  registerForm: FormGroup
  names: String
  lastnames: String
  mail: string
  phone: string

  message: String
  messageUser: String
  messagePassword: String
  //DECLARACIONES - FINISH

  ngOnInit() {
    this.createregisterForm()

    //PRUEBAS, PRACTICAS - INICIO
    
    //PRUEBAS, PRACTICAS - FIN
  }

    //FUNCIONES - INICIO
    createregisterForm() {
      this.registerForm = this.fb.group({
        names: ['', [Validators.required]],
        lastnames: ['', [Validators.required]],
        mail: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]]
      })
    }
  
  //   mySubmit() {
  //     if(this.registerForm.invalid){
  //       if( this.registerForm.controls['names'].errors.required || this.registerForm.controls['lastnames'].errors.required || 
  //           this.registerForm.controls['mail'].errors.required || this.registerForm.controls['phone'].errors.required){
  //             alert(this.message = `Campos Obligatorios`)
  //       //   if(this.registerForm.controls['user'].errors.minlength){
  //       //     alert(this.message = `El usuario requiere un minimo de 6 carácteres`)
  //       //   }
  //       //   if(this.registerForm.controls['password'].errors.minlength){
  //       //     alert(this.message = `La contraseña requiere un mínimo de 6 y un máximo de 16 carácteres`)
  //       //   }
  //       // }
  //     }
  //     else{
  //       console.log(this.registerForm.value);
  //     }
  //   }
  // } 
  
    //FUNCIONES - FIN
}
