import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Home } from '../models/home';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly baseUrl = environment.baseUrl + "/api/home";

  constructor(private readonly http: HttpClient) { }

  getHome(): Observable<Array<Home>> {
    let strUrl = `${this.baseUrl}/get-home`;
    return this.http.get<Array<Home>>(strUrl);
  }
}
