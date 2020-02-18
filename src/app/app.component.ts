import { Component } from '@angular/core';
import * as moment from 'moment';
import {BotHttpService} from './bot-http.service';
import { BotDialogHandlerService } from './bot-dialog-handler.service';
import * as _ from 'lodash';



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
      content: "Hi, I am David's bot. How can I help you?",
      time: moment().format('LT')
    },
  ]

  constructor(private botHttp: BotHttpService, private dialogHandler: BotDialogHandlerService) {}

  sendMsg() {
    if ( !this.userTypeMsg ) return;
    this.addDialog(this.userTypeMsg, 'user');
    this.userTypeMsg = '';
  }

  addDialog(msg, type) {
    this.dialogList.push({ content: msg, type: type, time: moment().format('LT') });
    if ( type == 'user' ) { 
      this.botHttp.botHttp(msg)
      .subscribe((res)=>{
        let entities = _.get(res, 'entities');
        this.dialogHandler.dialogHandler(entities)
          .then((res)=> this.addDialog(res,'bot'))
      },
      err=>console.log(err));
    }
  }

  textAreaEnter() {
    if ( !this.userTypeMsg ) return;
    this.addDialog(this.userTypeMsg, 'user');
    this.userTypeMsg = '';
  }
}
