import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';

  upperText:string = 'Display uppercase text';
  lowerText:string = 'Display lowercase text';
  percentValue:number = 0.5;
  date:Date = new Date();
  money: number = 598;
  isAdmin2 : boolean = false;
  profile: number = 2;
  
  user: User = {
    name: 'Bob',
    age: 25
  }
}
