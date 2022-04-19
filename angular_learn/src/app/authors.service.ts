import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }
  getauthors(){
    return ['author1','author2','author3'];
  }
}
