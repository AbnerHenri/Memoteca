import { Component } from '@angular/core';

import { ThoughtsInterface } from 'src/app/interfaces/thoughts';
import { ThoughtService } from '../thoughts/thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent {

  pensamento : ThoughtsInterface = {
    id : 0,
    conteudo : '',
    autoria : '',
    modelo : ''
  }

  constructor(
    private service : ThoughtService,
    private router : Router,
    private route : ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.findId(parseInt(id!)).subscribe((thought) => {
      this.pensamento = thought
    })
  }


  deleteThought() {
    if(this.pensamento.id){
      this.service.deleteThoughts(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listThoughts'])
      })
    }
  }

}
