import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
    ) { }

  ngOnInit(): void {

    // this.formulario = new FormGroup({
    //   nome: new FormControl('null'),
    //   email: new FormControl('null')
    // });

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null]
    });

  }

  onSubmit(){
    console.log(this.formulario);

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe((dados: any) => {
        console.log(dados)
        //resta o form
        //this.formulario.reset();
        this.resetar();
      },
      (erro: any) => alert('erro'));
  }

  resetar(){
    this.formulario.reset();
  }

}
