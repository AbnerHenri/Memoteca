import { Component } from '@angular/core';

import { ThoughtService } from './../thought.service';
import { ThoughtsInterface } from 'src/app/interfaces/thoughts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css']
})
export class CreateThoughtsComponent {

  pensamento : ThoughtsInterface = {
    id : Math.floor((Math.random() * 100)),
    conteudo : '',
    autoria : '',
    modelo : 'modelo1'
  }

  constructor(
    private service: ThoughtService,
    private router: Router
  ) {}

  createThought(): any {
    if(this.pensamento.conteudo && this.pensamento.autoria){
      return this.service.createThoughts(this.pensamento).subscribe(() => {
        this.router.navigate(['/listThoughts'])
      })
    }else{
      alert('Nenhum campo pode estar vazio')
    }
  }


}
