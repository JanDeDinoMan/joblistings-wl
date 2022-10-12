import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { JobListing } from '../JobListing';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiURL = "http://localhost:8000/"

  constructor(private http:HttpClient) { }

  getJobs(filters?: string[]): Observable<JobListing[]>{

    let params = "";
    if (typeof filters !== 'undefined'){
      params = "?" + "filters=" + filters.toString();
    }

    return this.http.get<JobListing[]>(this.apiURL + "listings" + params);
  }

  getImagePath(path: string): string{
    if (path.startsWith("./")){
      path = path.substring(2, path.length);
    }
    return this.apiURL + path;
  }
}
