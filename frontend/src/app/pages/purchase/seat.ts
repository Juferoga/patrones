import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Seat } from "@models/seats/seat.model";
import { TicketService } from "@services/ticket/ticket.service";
import { MessageService } from "primeng/api";
import { SeatService } from '../../core/services/seat/seat.service';

@Component({
  template: `
    <div class="stepsdemo-content">
      <p-card>
        <ng-template pTemplate="title">Asientos</ng-template>
        <ng-template pTemplate="subtitle">Elige los asientos</ng-template>
        <ng-template pTemplate="content">
          <div class="theatre">
            <!-- <div class="theatre-screen">
              <iframe src="https://www.youtube.com/embed/WPA71Wn0L0o?controls=0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div> -->
            <div class="cinema-seats left">
              <ng-container *ngFor="let row of seatRows; let i = index">
                <div *ngIf="i < seatRows.length / 2" class="cinema-row row-{{i+1}}">
                  <div *ngFor="let seat of row" class="seat" (click)="toggleSeat(seat)" [class.active]="ticketService.ticketInformation.seats.includes(seat)"></div>
                </div>
              </ng-container>
            </div>
            <div class="cinema-seats right">
              <ng-container *ngFor="let row of seatRows; let i = index">
                <div *ngIf="i >= seatRows.length / 2" class="cinema-row row-{{i+1}}">
                  <div *ngFor="let seat of row" class="seat" (click)="toggleSeat(seat)" [class.active]="ticketService.ticketInformation.seats.includes(seat)"></div>
                </div>
              </ng-container>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Silla</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let item of ticketService.ticketInformation.seats">
                <td>{{item.pk_id}}</td>
                <td>{{item.t_type}}</td>
              </tr>
            </tbody>
          </table>
        </ng-template>
        <ng-template pTemplate="footer">
          <div class="grid grid-nogutter justify-content-between">
            <p-button
              label="Volver"
              (onClick)="prevPage()"
              icon="pi pi-angle-left"
            ></p-button>
            <p-button
              label="Siguiente"
              (onClick)="nextPage()"
              icon="pi pi-angle-right"
              iconPos="right"
            ></p-button>
          </div>
        </ng-template>
      </p-card>
    </div>
  `,
  styleUrls: ["./seat.scss"],
})
export class SeatDemo implements OnInit {
  seats: Seat[] = [];
  rowSize = 7; // Se determina el número de asientos por fila
  seatRows: any[] = [];

  constructor(
    public ticketService: TicketService,
    private router: Router,
    private seatService: SeatService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.seatService.getSeats().subscribe((seats: Seat[]) => {
      this.seats = seats;
      this.createSeatRows();
    });
  }

  createSeatRows() {
    for(let i=0; i<this.seats.length; i+=this.rowSize) {
      this.seatRows.push(this.seats.slice(i, i+this.rowSize));
    }
  }

  toggleSeat(seat: Seat) {
    const index = this.ticketService.ticketInformation.seats.indexOf(seat);
    if(index > -1) {
      this.ticketService.ticketInformation.seats.splice(index, 1);
    } else {
      this.ticketService.ticketInformation.seats.push(seat);
    }
  }

  nextPage() {
    this.router.navigate(["admin/mis-compras/snacks"]);
  }

  prevPage() {
    this.ticketService.ticketInformation.seats = [];
    this.router.navigate(["admin/mis-compras/shows"]);
  }

}
