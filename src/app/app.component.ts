import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot';
  userTypeMsg = '';

  dialogList = [
    {
      type: 'bot',
      content: 'blah blah',
      time: '11:01 AM | June 9'
    },
    {
      type: 'user',
      content: 'blah blah',
      time: '11:01 AM | June 9'
    },
    {
      type: 'bot',
      content: 'blah blah',
      time: '11:01 AM | June 9'
    },
    {
      type: 'user',
      content: 'blah blah',
      time: '11:01 AM | June 9'
    }
  ]

  sendMsg() {
    
  }
}
