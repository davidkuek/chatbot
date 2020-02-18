import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class BotDialogHandlerService {

  currentUserEntity = { topIntent: null, entities: null };

  constructor() { }

  dialogHandler(response) {

    return new Promise((resolve)=>{

      this.getTopIntent(_.get(response, 'intent'));
      console.log(this.currentUserEntity)
      switch(_.get(this.currentUserEntity, 'topIntent')){
        case null : resolve(this.noAnswerDialog()); break;
        case 'greetings': resolve(this.greetingsHandler()); break;
      }



    })


  }

  getTopIntent(intent) {
    let topIntent = _.find(intent, (intent)=> intent.confidence > 0.8);
    _.assign(this.currentUserEntity, { topIntent: _.get(topIntent, 'value') || null });
  }

  // greeting dialog handling...
  greetingsHandler() {
    return 'Hi good to hear from you';
  }

  noAnswerDialog() {
    return 'I dont understand your question';
  }
}
