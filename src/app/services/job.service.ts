import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { JobListing } from '../JobListing';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiURL = "http://localhost:8000/"

  constructor(private http:HttpClient) { }

  getJobs(): Observable<JobListing[]>{
    return this.http.get<JobListing[]>(this.apiURL + "listings");
  }

  getImagePath(path: string): string{
    if (path.startsWith("./")){
      path = path.substring(2, path.length);
    }
    return this.apiURL + path;
  }
}
