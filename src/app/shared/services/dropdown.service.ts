import { EstadoBr } from './../models/estado-br';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private httpClient: HttpClient) { }

  getEstadosBr() {
    return this.httpClient.get<EstadoBr[]>('assets/dados/estadosbr.json')
  }

  getCargos(){
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr'},
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl'},
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr'}
    ];
  }

  getTecnologias() {

    return [
      { nome: 'java', desc: 'Java' },
      { nome: 'javascript', desc: 'JavaScript' },
      { nome: 'php', desc: 'PHP' },
      { nome: 'ruby', desc: 'Ruby' }
    ]
  }

  getNewsletter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Nao' }
    ];
  }
}
