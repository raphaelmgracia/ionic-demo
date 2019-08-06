import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }

  get(param: string) {
    return this._http.get(param).pipe(
      tap(res => console.log('http response-> ', res))
    )
  }
}
