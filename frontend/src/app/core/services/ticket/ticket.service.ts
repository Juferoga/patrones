import { Injectable } from '@angular/core';
import { Movie } from '@models/movies/movies.model';
import { Snack } from '@models/products/products.model';
import { Seat } from '@models/seats/seat.model';
import { Show } from '@models/shows/show.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

class Booking {
  seats: Seat[];
  show: Show;
  snacks: Snack[];
  movie: Movie;
  paymentInformation: {
    cardholderName: string;
    cardholderNumber: string;
    date: string;
    cvv: string;
    remember: boolean;
  };

  constructor() {}
}

export class TicketService {

  ticketInformation : Booking = {
    seats: [],
    show : null,
    snacks: [],
    movie: null,
    paymentInformation: {
      cardholderName: "",
      cardholderNumber: "",
      date: "",
      cvv: "",
      remember: false,
    },
  };

  private paymentComplete = new Subject<any>();

  paymentComplete$ = this.paymentComplete.asObservable();

  getTicketInformation() {
    return this.ticketInformation;
  }

  setTicketInformation(ticketInformation) {
    this.ticketInformation = ticketInformation;
  }

  complete():boolean {
    this.paymentComplete.next(this.ticketInformation);
    console.log(this.ticketInformation);
    return true;
  }
}
