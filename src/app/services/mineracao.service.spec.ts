import { TestBed } from '@angular/core/testing';

import { MineracaoService } from './mineracao.service';

describe('MineracaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MineracaoService = TestBed.get(MineracaoService);
    expect(service).toBeTruthy();
  });
});
