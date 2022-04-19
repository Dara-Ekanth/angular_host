import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_learn';
  post = {
    is_favourite: true
  }
  isFavouritechanged(){
    console.log("Favourite is changed.");
  }
}
