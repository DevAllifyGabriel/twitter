import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private url: string = 'https://617b5105d842cf001711be2e.mockapi.io/mostRead';

  constructor(private http: HttpClient) {}

  get apiTwitter(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => res)
    );
  }
}
