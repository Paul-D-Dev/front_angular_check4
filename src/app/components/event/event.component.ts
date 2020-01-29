import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../../shared/models/event';
import { EventService } from './../../shared/services/event.service';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {


  events: Event[];

  constructor(private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
    this.eventService.get().subscribe((eventsArray: Event[]) => {
      this.events = eventsArray;
    });
  }

  buyTickets(id) {
    this.eventService.salesEventId = id;
    this.router.navigateByUrl('/billeterie');
  }

}
