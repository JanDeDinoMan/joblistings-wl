import { Injectable } from '@angular/core';
import { JobListing } from '../JobListing';
import data from "../data.json";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  listings:JobListing[] = data;
  constructor() { }

  getJobs(): JobListing[]{
    return this.listings;
  }
}
