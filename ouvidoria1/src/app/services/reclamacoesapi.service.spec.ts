import { TestBed } from '@angular/core/testing';

import { ReclamacoesapiService } from './reclamacoesapi.service';

describe('ReclamacoesapiService', () => {
  let service: ReclamacoesapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamacoesapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
