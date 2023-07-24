import { Component } from '@angular/core';

import { ThoughtService } from '../thought.service';
import { ThoughtsInterface } from 'src/app/interfaces/thoughts';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css']
})


export class ListThoughtsComponent {

  listaPensamento : ThoughtsInterface[] = [
    {
      id : 0,
      conteudo : '',
      autoria : '',
      modelo : ''
    }
  ]

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.listThoughts().subscribe((ThoughtsList)=> {
      this.listaPensamento = ThoughtsList
    })
  }
}
