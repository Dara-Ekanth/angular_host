import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  author_names;
  colspan_value;
  is_active = false;
  constructor(authors: AuthorsService) {
    this.author_names = authors.getauthors();
    this.colspan_value = 2;
   }

  ngOnInit(): void {
  }

}
