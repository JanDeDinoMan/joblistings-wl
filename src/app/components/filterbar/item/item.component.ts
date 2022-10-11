import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  @Input() label!: string;
  @Output() removeClicked: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

}
