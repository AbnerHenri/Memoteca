import { Component, Input } from '@angular/core';
import { ThoughtsInterface } from 'src/app/interfaces/thoughts';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent {
  @Input() pensamento : ThoughtsInterface = {
    id : 1,
    conteudo : '',
    autoria : '',
    modelo : ''
  }

  larguraPensamento() : String {
    if(this.pensamento.conteudo.length > 56) {
      return 'pensamento-g'
    }

    return 'pensamento-p'
  }
}
