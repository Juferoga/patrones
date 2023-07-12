import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Messages } from 'primeng/messages';
import { Booking, TicketService } from '@services/ticket/ticket.service';
import { BookingAdapter, Purchase } from '@models/purchase/purchase.model';
import { PurchaseService } from '@services/purchase/purchase.service';

@Component({
    template: `
        <div class="stepsdemo-content">
            <p-card>
                <ng-template pTemplate="title"> Confirmación </ng-template>
                <ng-template pTemplate="subtitle"> Confirma tu compra </ng-template>
                <ng-template pTemplate="content">
                    <div class="field col-12">
                        <label for="class">Película : </label>
                        <b>{{ ticketInformation.movie.t_title }}</b>
                    </div>
                    <div class="field col-12">
                        <label for="class">Función : </label>
                        <b>{{ ticketInformation.show.d_date | date }}</b>
                    </div>
                    <div class="field col-12">
                        <label for="class">Asientos : </label>
                        <ul>
                            <li *ngFor="let seat of ticketInformation.seats">{{seat.pk_id}} | {{seat.t_type}}</li>
                        </ul>
                    </div>
                        <div class="field col-12">
                        <label for="class">Snacks</label>
                        <p-table [value]="ticketInformation.snacks" [tableStyle]="{'min-width': '50rem'}">
                        <ng-template pTemplate="header">
                        <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Tipo</th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-snack>
                        <tr>
                        <td>{{snack.pk_id}}</td>
                        <td>{{snack.t_name}}</td>
                        <td>{{snack.t_description}}</td>
                        <td>{{snack.n_price}}</td>
                        <td>{{snack.t_type}}</td>
                        </tr>
                    </ng-template>
                </p-table>
                    </div>
                    <div class="field col-12">
                        
                    </div>
                    <div class="field col-12">
                        <label for="Age">Cardholder Name : </label>
                        <b>{{ ticketInformation.paymentInformation.cardholderName ? ticketInformation.paymentInformation.cardholderName : '-' }}</b>
                    </div>
                    <div class="field col-12">
                        <label for="Age">Card Number : </label>
                        <b>{{ ticketInformation.paymentInformation.cardholderNumber ? ticketInformation.paymentInformation.cardholderNumber : '-' }}</b>
                    </div>
                    <div class="field col-12">
                        <label for="Age">Date : </label>
                        <b>{{ ticketInformation.paymentInformation.date ? ticketInformation.paymentInformation.date : '-' }}</b>
                    </div>
                    <div class="field col-12">
                        <label for="Age">CVV : </label>
                        <b>{{ ticketInformation.paymentInformation.cvv && ticketInformation.paymentInformation.cvv.length === 3 ? '**' + ticketInformation.paymentInformation.cvv[2] : '-' }}</b>
                    </div>
                </ng-template>
                <ng-template pTemplate="footer">
                    <div class="grid grid-nogutter justify-content-between">
                        <p-button label="Volver" (onClick)="prevPage()" icon="pi pi-angle-left"></p-button>
                        <p-button label="Completar" (onClick)="complete()" icon="pi pi-angle-right" iconPos="right" styleClass="p-button-success"></p-button>
                    </div>
                </ng-template>
            </p-card>
        </div>
        
        <p-dialog header="Califica tu experiencia" [(visible)]="visible" [modal]="true" [style]="{ width: '50vw' }" [draggable]="false" [resizable]="false">
            <p style="margin-bottom: 30px;">
                Tú experiencia es muy importante para nosotros, selecciona que tan contento estas con la atención!!!
            </p>

            <p-rating [(ngModel)]="cal.calificacion" [stars]="5" [cancel]="false">
                <ng-template pTemplate="onicon">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon-active.png" width="25px" height="25px" />
                </ng-template>
                <ng-template pTemplate="officon">
                    <img src="https://primefaces.org/cdn/primeng/images/demo/rating/custom-icon.png" width="25px" height="25px" />
                </ng-template>
            </p-rating>

            <textarea style="min-width: 100%; margin-top: 30px;" [(ngModel)]="cal.observacion" rows="5" cols="30" pInputTextarea ></textarea>

            <p-button style="display: flex; align-items;justify-content: flex-end;" (click)="sendRating()" icon="pi pi-external-link" label="Enviar"></p-button>
        </p-dialog>
    `
})
export class ConfirmationDemo implements OnInit {
    ticketInformation: Booking;
    cal : any = {'calificacion':0,'observacion':''};
    visible = false;

    constructor(
        public ticketService: TicketService, 
        private router: Router,
        private messageService:MessageService,
        private purchaseService:PurchaseService) {}

    ngOnInit() {
        this.ticketInformation = this.ticketService.ticketInformation;
    }

    complete() {
        this.visible = this.ticketService.complete();
        this.ticketInformation = this.ticketService.ticketInformation;
        var adaptedBooking : Purchase = BookingAdapter.adapt(this.ticketInformation)
        this.purchaseService.makePurchase(adaptedBooking).subscribe(data => {
            this.purchaseService.getPurchasePDF(data['purchase_id'])
        })
    }
    
    prevPage() {
        this.router.navigate(['admin/mis-compras/payment']);
    }
    
    showDialog() {
        this.visible = true;
    }
    
    sendRating() {
        this.visible = false;
    }

}