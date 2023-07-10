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
          <div class="cinema-seats left">
            <div class="cinema-row" *ngFor="let row of seatsMatrix; let rowIndex = index">
              <div class="seat" *ngFor="let seat of row; let seatIndex = index" [class.active]="seat === 1" (click)="toggleSeat(rowIndex, seatIndex)"></div>
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
  seatsMatrix: number[][] = [];

  constructor(
    public ticketService: TicketService,
    private router: Router,
    private seatService: SeatService,
    private messageService: MessageService
  ) {
    // Generar la matriz de asientos, en este ejemplo se generan 30 sillas con 5 filas
    const numRows = 5;
    const numSeatsPerRow = 7;
    for (let i = 0; i < numRows; i++) {
      this.seatsMatrix[i] = Array(numSeatsPerRow).fill(0);
    }
  }

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

  toggleSeat(rowIndex: number, seatIndex: number) {
    this.seatsMatrix[rowIndex][seatIndex] = this.seatsMatrix[rowIndex][seatIndex] === 1 ? 0 : 1;
  }
}
