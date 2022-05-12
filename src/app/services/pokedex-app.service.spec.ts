import { TestBed } from '@angular/core/testing';

import { PokedexAppService } from './pokedex-app.service';

describe('PokedexAppService', () => {
  let service: PokedexAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokedexAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
