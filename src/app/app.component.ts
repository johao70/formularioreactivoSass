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
  phone: string[]
  message: String
  //DECLARACIONES - FINISH

  ngOnInit() {
    this.createregisterForm()
  }

    // FUNCIONES - INICIO
    createregisterForm() {
      this.registerForm = this.fb.group({
        names: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-zñ]{2,} [A-Z]+[a-zñ]{2,}$')]],
        lastnames: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-zñ]{2,} [A-Z]+[a-zñ]{2,}$')]],
        mail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z]+[a-zA-Z0-9._-ñ]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]{2,3}$')]],
        phone: this.fb.array([this.fb.group({phones: ['', [Validators.required, Validators.pattern('(09)+[0-9]{1,8}')]]})])
      })
    }

    get getPhones(){
      return this.registerForm.get('phone') as FormArray
    }

    addPhones(){
      const celular = <FormArray>this.registerForm.controls['phone']
      celular.push(this.fb.group({phones:[]}))
    }

    deletePhones(value){
      const celular = <FormArray>this.registerForm.controls['phone']
      celular.removeAt(value)
    }

  submit() {
    if(this.registerForm.invalid){
      alert(`Complete todos los campos correctamente`)
    }else{
      alert(`Se ha registrado exitosamente`)
    }
  }
  
    //FUNCIONES - FIN
}
