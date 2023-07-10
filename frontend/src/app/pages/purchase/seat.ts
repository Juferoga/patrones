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
          <div class="cinema">
            <div class="cinema-screen"></div>
            <div class="cinema-seats-field">
              <div class="cinema-seat-row">
                <div class="cinema-seat"></div>
              </div>
            </div>
          </div>
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
  seatsSelected: Seat[];
  seats: Seat[];

  constructor(
    public ticketService: TicketService,
    private router: Router,
    private seatService: SeatService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.seatService.getSeats().subscribe(
      (seats : Seat[]) =>{
        this.seats = seats;
      }
    )
  }

  nextPage() {
    this.ticketService.ticketInformation.seats = this.seatsSelected;
    this.router.navigate(["admin/mis-compras/snacks"]);
  }

  prevPage() {
    this.ticketService.ticketInformation.seats = [];
    this.router.navigate(["admin/mis-compras/shows"]);
  }
}
