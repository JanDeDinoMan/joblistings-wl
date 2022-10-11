import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-filterbar',
  templateUrl: './filterbar.component.html',
  styleUrls: ['./filterbar.component.css']
})
export class FilterbarComponent implements OnInit {

  filters: string[] = [];
  @Output() newFilters: EventEmitter<string[]> = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  onRemove($event: string) {
    this.removeFilter($event);
  }


  addFilter(label: string) {
    if (!this.filters.includes(label)) {
      this.filters.push(label);
      this.newFilters.emit(this.filters);
    }
  }

  removeFilter(label: string) {
    if (this.filters.includes(label)) {
      this.filters = this.filters.filter((f) => f !== label);
      this.newFilters.emit(this.filters);
    }
  }

  onClear() {
    this.filters = []
    this.newFilters.emit(this.filters);
  }


}
