import { Component, OnInit } from '@angular/core';
import { JobListing } from 'src/app/JobListing';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings: JobListing[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.listings = this.jobService.getJobs();
  }

  onNewFilters($event: string[]) {
    console.log($event);
  }
    

}
