import { EventService } from './../../shared/services/event.service';
import { Component, OnInit } from '@angular/core';
import { Event } from '../../shared/models/event';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private eventService: EventService) { }

  idEventToBuy: number;

  eventToSale: Event;

  allEvents: Event[];



  ngOnInit() {
    if (this.eventService.salesEventId) {
      this.idEventToBuy = this.eventService.salesEventId;
      this.eventService.getOne(this.eventService.salesEventId).subscribe((event: Event) => {
        this.eventToSale = event;
        console.log(this.eventToSale);
      });
    } else {
      this.eventService.get().subscribe((eventsArray: Event[]) => {
        this.allEvents = eventsArray;
        console.log(this.allEvents);

      });
    }


  }

}
