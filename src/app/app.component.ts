import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'aptos-project';
 
  optionList = [
    {name:'Option 1',id:'option1'},
    {name:'Option 2',id:'option2'},
    {name:'Option 3',id:'option3'},
    {name:'Option 4',id:'option4'},
    {name:'Option 5',id:'option5'},
    {name:'Option 6',id:'option6'},
    {name:'Option 7',id:'option7'},
    {name:'Option 8',id:'option8'},
    {name:'Option 9',id:'option9'}
  ]

}
