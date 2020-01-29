import { EventService } from './../../shared/services/event.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Event } from '../../shared/models/event';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {


  events: Event[];
  @Output() idEvent = new EventEmitter();

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.get().subscribe((eventsArray: Event[]) => {
      this.events = eventsArray;
    });
  }

  buyTickets(id) {
    console.log(id);

    this.idEvent.emit(id);
  }

}
