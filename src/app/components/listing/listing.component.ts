import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { JobListing } from 'src/app/JobListing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  @Input() listingData!: JobListing;
  @Output() filterClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(label: string) {
    console.log("CLCIK: " + label);
  }

}
