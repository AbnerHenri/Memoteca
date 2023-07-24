import { Component } from '@angular/core';
import { ThoughtsInterface } from 'src/app/interfaces/thoughts';
import { ThoughtService } from '../thought.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-thoughts',
  templateUrl: './edit-thoughts.component.html',
  styleUrls: ['./edit-thoughts.component.css']
})
export class EditThoughtsComponent {

  pensamento : ThoughtsInterface = {
    id : 0,
    conteudo : '',
    autoria : '',
    modelo : 'modelo1'
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

  editThought() {
    this.service.editThoughts(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listThoughts'])
    })
  }

}
