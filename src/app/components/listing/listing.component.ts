import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JobListing } from 'src/app/JobListing';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() listingData!: JobListing;
  @Output() filterClicked = new EventEmitter();

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

  getPath(): string{
    return this.jobService.getImagePath(this.listingData.logo);
  }

}
