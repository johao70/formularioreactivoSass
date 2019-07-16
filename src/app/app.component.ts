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
  patternForm: FormGroup
  firstName: String
  secondName: String[]
  lastnames: String
  mail: string
  phone: string
  operadora: String[]
  message: String
  //DECLARACIONES - FINISH

  ngOnInit() {
    this.createregisterForm(),
    this.examplepatternForm()
  }

    // FUNCIONES - INICIO
    createregisterForm() {
      this.registerForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-z]*$')]],
        secondName: this.fb.array([this.fb.group({name2: ['']})]),
        lastnames: ['', [Validators.required, Validators.pattern('^[A-Z]+[a-zñ]{2,} [A-Z]+[a-zñ]{2,}$')]],
        mail: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z]+[a-zA-Z0-9._-ñ]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]{2,3}$')]],
        phone: ['', [Validators.required, Validators.pattern('(09)+[0-9]{8}')]],
        operadora: this.fb.array([this.fb.group({phone2: ['', [Validators.required]]})])
      })
    }

    examplepatternForm(){
      this.patternForm = this.fb.group({
        example1: ['', [Validators.pattern('^[a-z-_A-Z0-9ñ]+[a-zA-Z0-9._-ñ]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.](?:[a-z]{2,3})$')]],
        example2: ['', [Validators.pattern('^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\s{4,16}$')]]
      })
    }

    get getPhones(){
      return this.registerForm.get('operadora') as FormArray
    }

    get getSecondName(){
      return this.registerForm.get('secondName') as FormArray
    }

    addPhones(){
      const celular = <FormArray>this.registerForm.controls['operadora']
      celular.push(this.fb.group({phone2:[]}))
    }

    addSecondName(){
      const addName = <FormArray>this.registerForm.controls['secondName']
      addName.push(this.fb.group({name2:[]}))
    }

    deletePhones(value){
      const celular = <FormArray>this.registerForm.controls['operadora']
      celular.removeAt(value)
    }

    deleteSecondName(value){
      const removeName = <FormArray>this.registerForm.controls['secondName']
      removeName.removeAt(value)
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