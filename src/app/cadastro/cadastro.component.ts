import { CadastroService } from './cadastro.service';
import { Usuario } from './usuario.model';

import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  showError: boolean = false;

  lista: Usuario[] = [];

  usuario: Usuario = {
    cpf: '',
    email: '',
    nome: '',
    data: '',
    senha: '',
    senha2:''
  };

  constructor(private service: CadastroService) {

  }

  ngOnInit(): void {

  }

  onSubmit() {
      let request = this.service.create(this.usuario)
    request.subscribe(

      (response) => {
        alert('Foi cadastrado com sucesso => ' + response.id)
      },

      (error) => {
          this.showError = true;
          setTimeout(() => {
            this.showError = false;
          }, 5000)
      }
    )
  }
}

//* NgIf="usuario == id"//
