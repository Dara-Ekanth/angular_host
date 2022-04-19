import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, catchError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFounderror } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {

  }

  getPosts() {
    return this.http.get<[]>(this.url);
  }

  postPosts(post: any) {
    return this.http.post(this.url, JSON.stringify(post))
  }

  updatePostService(post: any) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ title: 'lets test' }))
  }

  deletePostService(id: any) {
    return this.http.delete(this.url + "/" + id).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 404){
          return throwError(new NotFounderror())
        }
        return throwError(new AppError(error));
      })
    );
  }
  githubfollowersService(giturl: any){
    return this.http.get(giturl)}
}
