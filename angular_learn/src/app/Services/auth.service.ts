import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(credentials: any) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .pipe(map(response =>{
        console.log(response)
      })
      );
  }

  logout() { 
  }

  isLoggedIn() { 
    return false;
  }
}

