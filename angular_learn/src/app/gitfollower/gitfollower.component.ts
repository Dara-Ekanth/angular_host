import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-gitfollower',
  templateUrl: './gitfollower.component.html',
  styleUrls: ['./gitfollower.component.css']
})
export class GitfollowerComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.paramMap.subscribe( params => {
    //   console.log(params);
    // })

    // this.route.queryParamMap.subscribe(queryparms => {
    //   console.log(queryparms);
    // })

    // Alternative for subscribing to both at once.
  combineLatest([
    this.route.paramMap,
    this.route.queryParamMap
    ]).subscribe(combined => {
      console.log(combined[0]);
      console.log(combined[1]);
      
    })
  }


}
