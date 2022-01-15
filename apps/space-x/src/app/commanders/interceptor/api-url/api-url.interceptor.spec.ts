import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ApiUrlInterceptor } from './api-url.interceptor';
import { environment } from '../../../../environments/environment';

describe('ApiUrlInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiUrlInterceptor,
          multi: true,
        },
      ],
    });
  });

  afterEach(inject([HttpTestingController], (mock: HttpTestingController) => {
    mock.verify();
  }));

  it('should add apiURL to request URL', inject([HttpClient, HttpTestingController], (http: HttpClient, mock: HttpTestingController) => {
    const apiURL = 'test';
    http.get(apiURL).subscribe((response) => expect(response).toBeTruthy());

    const request = mock.expectOne(`${environment.apiUrl}/${apiURL}`);

    request.flush({});
    mock.verify();
  }));

  it('should not add apiURL to request URL for assets', inject(
    [HttpClient, HttpTestingController],
    (http: HttpClient, mock: HttpTestingController) => {
      const apiURL = 'https://test';
      http.get(apiURL).subscribe((response) => expect(response).toBeTruthy());

      const request = mock.expectOne(`${apiURL}`);

      request.flush({});
      mock.verify();
    }
  ));
});
