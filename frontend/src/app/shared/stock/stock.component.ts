import { Component } from "@angular/core";
import { Snack, Ticket, proto_prod_snack, proto_prod_ticket } from "@models/products/products.model";
import { SnackService } from "@services/products/snack.service";
import { TicketService } from "@services/products/ticket.service";
import { ConfirmationService, MessageService } from "primeng/api";

@Component({
  selector: "app-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.scss"],
})
export class StockComponent {
  snackDialog: boolean = false;

  snacks!: Snack[];
  snack!: Snack;
  selectedSnacks!: Snack[] | null;
  submittedSnack: boolean = false;
  statusesSnack!: any[];

  ticketDialog: boolean = false;
  tickets!: Ticket[];
  ticket!: Ticket;
  selectedTickets!: Ticket[] | null;
  submittedTicket: boolean = false;
  statusesTicket!: any[];

  constructor(
    private snackService: SnackService,
    private ticketService: TicketService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.snackService.getSnacks().subscribe((data) => (this.snacks = data));
    this.ticketService.getTickets().subscribe((data) => (this.tickets = data));
  }

  openNewSnack() {
    this.snack = proto_prod_snack;
    this.submittedSnack = false;
    this.snackDialog = true;
  }

  deleteSelectedSnacks() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected snacks?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.snacks = this.snacks.filter(
          (val) => !this.selectedSnacks?.includes(val)
        );
        this.selectedSnacks = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Snacks Deleted",
          life: 3000,
        });
      },
    });
  }

  editSnack(snack: Snack) {
    this.snack = { ...snack };
    this.snackDialog = true;
  }

  deleteSnack(snack: Snack) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + snack.t_name + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.snacks = this.snacks.filter((val) => val.pk_id !== snack.pk_id);
        this.snack = proto_prod_snack;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Snack Deleted",
          life: 3000,
        });
      },
    });
  }

  hideDialogSnack() {
    this.snackDialog = false;
    this.submittedSnack = false;
  }

  saveSnack() {
    this.submittedSnack = true;

    if (this.snack.t_name?.trim()) {
      if (this.snack.pk_id) {
        this.snacks[this.findIndexByIdSnack(this.snack.pk_id)] = this.snack;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Snack Updated",
          life: 3000,
        });
      } else {
        this.snacks.push(this.snack);
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Snack Created",
          life: 3000,
        });
      }

      this.snacks = [...this.snacks];
      this.snackDialog = false;
      this.snack = proto_prod_snack;
    }
  }

  findIndexByIdSnack(id: number): number {
    let index = -1;
    for (let i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].pk_id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  getSeverity(status: number) {
    if (status > 50) {
      return "success";
    } else {
      if (status >= 10 && status <= 50) {
        return "warning";
      } else {
        return "danger";
      }
    }
  }

  openNewTicket() {
    this.ticket = proto_prod_ticket;
    this.submittedTicket = false;
    this.ticketDialog = true;
  }

  deleteSelectedTickets() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected tickets?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.tickets = this.tickets.filter(
          (val) => !this.selectedTickets?.includes(val)
        );
        this.selectedTickets = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Tickets Deleted",
          life: 3000,
        });
      },
    });
  }

  editTicket(ticket: Ticket) {
    this.ticket = { ...ticket };
    this.ticketDialog = true;
  }

  deleteTicket(ticket: Ticket) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + ticket.t_name + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.tickets = this.tickets.filter((val) => val.pk_id !== ticket.pk_id);
        this.ticket = proto_prod_ticket;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Ticket Deleted",
          life: 3000,
        });
      },
    });
  }

  hideDialogTicket() {
    this.ticketDialog = false;
    this.submittedTicket = false;
  }

  saveTicket() {
    this.submittedTicket = true;

    if (this.ticket.t_name?.trim()) {
      if (this.ticket.pk_id) {
        this.tickets[this.findIndexByIdTicket(this.ticket.pk_id)] = this.ticket;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Ticket Updated",
          life: 3000,
        });
      } else {
        this.tickets.push(this.ticket);
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "Ticket Created",
          life: 3000,
        });
      }

      this.tickets = [...this.tickets];
      this.ticketDialog = false;
      this.ticket = proto_prod_ticket;
    }
  }

  findIndexByIdTicket(id: number): number {
    let index = -1;
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].pk_id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
