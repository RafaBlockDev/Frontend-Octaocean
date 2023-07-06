import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ButtonCardTableGroup } from '../models/button-card-table-group';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OctaoceanService {

  private readonly baseUrl = environment.baseUrl + "/api/home";

  constructor(private readonly http: HttpClient) { }

  getOctaoceanPoolFarming(): Observable<ButtonCardTableGroup> {
    let strUrl = `${this.baseUrl}/get-octaocean-pool-farming`;
    return this.http.get<ButtonCardTableGroup>(strUrl);
  }
}
