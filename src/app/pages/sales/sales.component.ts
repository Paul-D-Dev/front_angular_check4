import { Order } from './../../shared/models/order';
import { Ticket } from './../../shared/models/ticket';
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
  ticket: Ticket;

  allEvents: Event[] = [];

  cart: Ticket[] = [];

totalSUm = 0;


  ngOnInit() {
    if (this.eventService.salesEventId) {
      this.idEventToBuy = this.eventService.salesEventId;
      this.eventService.getOne(this.eventService.salesEventId).subscribe((event: Event) => {
        this.allEvents.push(event);
      });

    } else {
      this.eventService.get().subscribe((eventsArray: Event[]) => {
        this.allEvents = eventsArray;
      });
    }
  }

  minusProduct(price, idTicket: number, idEvent) {
    if (this.allEvents[idEvent].tickets[idTicket].quantity !== 0) {
      this.allEvents[idEvent].tickets[idTicket].quantity--;
      this.allEvents[idEvent].tickets[idTicket].sumOrder = this.allEvents[idEvent].tickets[idTicket].quantity * price;
    }
  }

  addProduct(price, idTicket: number, idEvent) {
    this.allEvents[idEvent].tickets[idTicket].quantity++;
    this.allEvents[idEvent].tickets[idTicket].sumOrder = this.allEvents[idEvent].tickets[idTicket].quantity * price;
  }


 // Total par event
 // Si ticket déjà présent dans le cart, on modifit ticket.quantity
 // Si ticket non présent, on ajoute ticket
  addToCart(idEvent) {
    for (const ticket of this.allEvents[idEvent].tickets) {
      if (this.cart.indexOf(ticket) !== -1) {

      } else if (ticket.quantity > 0) {
      this.cart.push(ticket);
      }
    }
    return this.cart;

  }


    totalOrder() {
    let sum = 0;
    for (const ticket of this.cart) {
      sum += ticket.sumOrder;
    }
    return `€ ${sum}`;
    }

}



