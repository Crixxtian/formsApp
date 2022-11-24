import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formCadastro: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      sobrenome:['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf:['', Validators.compose([Validators.required])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirmarSenha: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
   }

  ngOnInit() {
  }


  salvarCadastro(){
    console.log('Formulario: ', this.formCadastro.valid);
  }
}
