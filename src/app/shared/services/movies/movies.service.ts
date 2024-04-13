import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { environment as env } from 'src/environments/environment';

import { IAPIResult } from "src/app/shared/models/api.model";

@Injectable({providedIn: 'root'})
export class MoviesService {
  public apiURL: string = env.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public get(queryParams: string): Observable<IAPIResult> {
    const fullURL = `${this.apiURL}?${queryParams}`;

    return <Observable<IAPIResult>>this.http.get(fullURL);
  }
}
