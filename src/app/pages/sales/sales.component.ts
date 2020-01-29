import { EventService } from './../../shared/services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private eventService: EventService) { }

  idEventToBuy: number;
  ngOnInit() {
    if (this.eventService.salesEventId) {
      console.log(this.eventService.salesEventId);
      this.idEventToBuy = this.eventService.salesEventId;
      console.log(this.idEventToBuy);

    }


  }

}
