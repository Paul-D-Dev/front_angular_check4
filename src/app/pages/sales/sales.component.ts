import { Component, OnInit } from '@angular/core';
import { Event } from '../../shared/models/event';
import { Ticket } from './../../shared/models/ticket';
import { EventService } from './../../shared/services/event.service';
import { TicketService } from './../../shared/services/ticket.service';
import { User } from '../../shared/models/user';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';

export interface DialogData {
  cart: Event[];
}

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private eventService: EventService,
              private ticketService: TicketService,
              public dialog: MatDialog) { }

  idEventToBuy: number;

  allEvents: Event[] = [];

  cart: Event[] = [];




  totalCart = 0;


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

  minusProduct(event: Event) {


    if (event.quantity !== 0) {
      event.quantity--;
    }
  }

  addProduct(event: Event) {
    event.quantity++;
  }

  addToCart(event: Event) {
    if (!this.cart.includes(event)) {
      event.quantity++;
      this.cart.push(event);
    }
    return this.cart;
  }


totalOrder() {
    let sum = 0;
    for (const event of this.cart) {
      sum += event.quantity * event.priceAdult;
    }
    return `€ ${sum}`;
    }


validCard() {
    for (const event of this.cart) {
      const ticket = new Ticket();
      const user = new User();
      user.name = 'Julien';
      user.email = 'julien@gmail.com';
      ticket.name = event.name;
      ticket.event = event.id;
      ticket.price = event.priceAdult;
      ticket.quantity = event.quantity;
      ticket.user = user;

      console.log(ticket);
      this.ticketService.create(ticket).subscribe();
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {cart : this.cart}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
