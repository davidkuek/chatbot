import { TestBed } from '@angular/core/testing';

import { BotDialogHandlerService } from './bot-dialog-handler.service';

describe('BotDialogHandlerService', () => {
  let service: BotDialogHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotDialogHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
