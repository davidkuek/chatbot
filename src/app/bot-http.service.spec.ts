import { TestBed } from '@angular/core/testing';

import { BotHttpService } from './bot-http.service';

describe('BotHttpService', () => {
  let service: BotHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
