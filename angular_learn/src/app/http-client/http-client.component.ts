import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { NotFounderror } from '../common/not-found-error';
import { HttpclientService } from '../Services/httpclient.service';

@Component({
  selector: 'http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit {

  posts: any[] | undefined;
  followers: any[] | undefined;

  url = 'https://api.github.com/users/Dara-Ekanth/followers';

  constructor(private service: HttpclientService) {

  }

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        response => {
          this.posts = response;
        },
        error => {
          alert('An Unexpected error occured.');
          console.log(error)
        })
  }

  addpost(input: HTMLInputElement) {
    let post: any = { title: input.value }
    this.service.postPosts(post)
      .subscribe(
        response => {
          post.id = (response as any).id;
          this.posts?.push(post);
          // console.log(response);
          input.value = '';
        },
        (error: Response) => {
          if (error.status == 400){
            // this.form.setErrors(error.json())
            alert("It was a Bad Request.")
          }
          else{
            alert('An Unexpected error occured.');
            console.log(error)
          }
        });
  }
  updatepost(post: HTMLDataElement) {
    this.service.updatePostService(post)
      .subscribe(
        response => {
          console.log(response)
        });
  }

  deletePost(post: HTMLDataElement){
    this.service.deletePostService(post.id)
    .subscribe( response => {
    let index: number;
    index = this.posts?.indexOf(post)!;
    this.posts?.splice(index,1),
    (error: AppError) => {
      if (error instanceof NotFounderror){
        alert("This post is already deleted.")
      }
      else{
        alert("An Unexpected Error occured.")
      }
    };}
    )
  }

  githubfollowers(){
    this.service.githubfollowersService(this.url)
    .subscribe((response: any) => {
      console.log(response);
      this.followers = response;
    }, (error: HttpErrorResponse) => {
      if (error.status == 12163){
        console.log("Connect to Internet.");
      }
    });
  }

}
