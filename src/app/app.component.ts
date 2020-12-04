import { Component } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Quotes =  ['Hello, Beautiful', 'You\'ve got this', 'Time to be fabulous', 'Make it happen',
    'Attitude is everything', 'Dreams don\'t work unless you do',
    'Enjoy the little things', 'Wake up and be awesome',
    'A smooth sea never made a skillful sailor' ,
    'Planning is my happy place', 'Nevertheless she persisted',
    'Good things take time', 'A goal without a plan is just a wish',
    'Don\'t stop until you\'re proud', 'It\'s a slow process but quitting won\'t speed it up',
    'She designed a life she loved', 'A little progress each day adds up to big results',
    'I\'m working on myself for myself by myself', 'Find your fire',
    'Don\'t be the same, be better', 'Make it happen'];

  massage = `${_.sample(this.Quotes)}`;
  title = 'New';
}

