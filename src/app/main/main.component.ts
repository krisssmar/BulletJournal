import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Quotes =  ['Hello, Beautiful', 'You\'ve got this',
    'Time to be fabulous', 'Make it happen',
    'Attitude is everything', 'Dreams don\'t work unless you do',
    'Enjoy the little things', 'Wake up and be awesome',
    'Planning is my happy place', 'Nevertheless she persisted',
    'Good things take time', 'A goal without a plan is just a wish',
    'Don\'t stop until you\'re proud', 'She designed a life she loved',
    'Find your fire', 'Don\'t be the same, be better', 'Make it happen'];

  massage = `${_.sample(this.Quotes)}`;
  constructor() { }

  ngOnInit(): void {
  }

}
