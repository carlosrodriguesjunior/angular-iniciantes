import { TestBed, inject } from '@angular/core/testing';

import { HttpUsuarioService } from './http-usuario.service';

describe('HttpUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpUsuarioService]
    });
  });

  it('should be created', inject([HttpUsuarioService], (service: HttpUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
