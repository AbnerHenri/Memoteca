import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';
import { ThoughtsInterface } from 'src/app/interfaces/thoughts';

@Injectable({
  providedIn: 'root'
})

export class ThoughtService {

  constructor(private http : HttpClient) { }

  private readonly API = 'http://localhost:3000/thoughts'

  listThoughts(): Observable<ThoughtsInterface[]> {
    return this.http.get<ThoughtsInterface[]>(this.API)
  }

  createThoughts(thought : ThoughtsInterface): Observable<ThoughtsInterface> {
    return this.http.post<ThoughtsInterface>(this.API, thought)
  }

  editThoughts(thought : ThoughtsInterface): Observable<ThoughtsInterface> {
    const URL = `${this.API}/${thought.id}`
    return this.http.put<ThoughtsInterface>(URL, thought)
  }

  deleteThoughts(id : Number): Observable<ThoughtsInterface> {
    const URL = `${this.API}/${id}`
    return this.http.delete<ThoughtsInterface>(URL)
  }
    
  findId(id: Number): Observable<ThoughtsInterface> {
    const URL = `${this.API}/${id}`
    return this.http.get<ThoughtsInterface>(URL)
  }
  
}
