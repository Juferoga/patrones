import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ConfirmationService, MessageService } from "primeng/api";
import { Customer, Employee, User } from "src/app/core/models/users/user.model";
import { UserService } from "src/app/core/services/users/user.service";
@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent {
  empleado : Employee;
  new_empleado: Employee = {
    "n_id": 0,
    "t_id": "",
    "n_phone": 0,
    "email": "",
    "name": "",
    "is_active": false,
    "is_superuser": false,
    "is_staff": false,
    "last_login": false,
    "password": "",
    "n_salary": 0,
    "d_start_contract": new Date("2023-07-08T00:00:00.000Z"),
    "d_end_contract": new Date("2023-07-08T00:00:00.000Z"),
    "t_rol": 0,
    "fk_cinema": 0
  };
  empleados: Employee[];
  selectedEmpleados: Employee[];
  empleadoDialog: boolean;

  cliente: Customer;
  new_cliente: Customer = {
    "n_id": 0,
    "t_id": "",
    "n_phone": 0,
    "email": "",
    "name": "",
    "is_active": false,
    "is_superuser": false,
    "is_staff": false,
    "last_login": false,
    "password": "",
    "n_points": 0
  };
  clientes: Customer[];
  selectedClientes: Customer[];
  clienteDialog: boolean;

  submittedEmpleado: boolean = false;
  submittedCliente: boolean = false;
  statuses!: any[];

  isModeEdited: boolean = false;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getCustomers()
    this.getEmployees()
  }

  openNewEmpleado() {
    this.empleado = this.new_empleado;
    this.submittedEmpleado = false;
    this.empleadoDialog = true;
  }

  deleteSelectedEmpleados() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected empleados?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.empleados = this.empleados.filter(
          (val) => !this.selectedEmpleados?.includes(val)
        );
        this.selectedEmpleados = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "empleados Deleted",
          life: 3000,
        });
      },
    });
  }

  editEmpleado(empleado: Employee) {
    this.empleado = { ...empleado };
    this.empleadoDialog = true;
  }

  deleteEmpleado(empleado: Employee) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + empleado.name + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.empleados = this.empleados.filter(
          (val) => val.n_id !== empleado.n_id
        );
        this.empleado = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "empleado Deleted",
          life: 3000,
        });
      },
    });
  }

  hideDialogEmpleado() {
    this.empleadoDialog = false;
    this.submittedEmpleado = false;
  }

  saveEmpleado() {
    this.submittedEmpleado =true;

    if (this.empleado.name?.trim()) {
      if (this.empleado.t_id) {
        console.log("si existe")
        this.empleados[this.findIndexByIdEmpleado(this.empleado.t_id)] =
          this.empleado;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "empleado Updated",
          life: 3000,
        });
      } else {
        console.log("no existe")
        console.log(this.userService.createUserEmp(this.empleado).subscribe((data)=>{console.log(data)}))
        this.userService.createUserEmp(this.empleado).subscribe(
          (empleado:Employee) =>{
            this.empleados.push(empleado);
            this.messageService.add({
              severity: "success",
              summary: "Successful",
              detail: "empleado Created",
              life: 3000,
            })
          },
          (error) =>{
            this.messageService.add({
              severity: "error",
              summary: "Error",
              detail: "Employee not Created",
              life: 3000,
            });
          }
        )
      }

      this.empleados = [...this.empleados];
      this.empleadoDialog = false;
      this.empleado = null;
    }
  }

  findIndexByIdEmpleado(id: string): number {
    let index = -1;
    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].t_id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  openNewCliente() {
    this.cliente = null;
    this.submittedCliente = false;
    this.clienteDialog = true;
  }

  deleteSelectedClientes() {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete the selected empleados?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.clientes = this.clientes.filter(
          (val) => !this.selectedClientes?.includes(val)
        );
        this.selectedEmpleados = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "empleados Deleted",
          life: 3000,
        });
      },
    });
  }

  editCliente(cliente: Customer) {
    this.cliente = { ...cliente };
    this.clienteDialog = true;
  }

  deleteCliente(cliente: Customer) {
    this.confirmationService.confirm({
      message: "Are you sure you want to delete " + cliente.name + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.clientes = this.clientes.filter(
          (val) => val.n_id !== cliente.n_id
        );
        this.cliente = null;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "empleado Deleted",
          life: 3000,
        });
      },
    });
  }

  hideDialogCliente() {
    this.clienteDialog = false;
    this.submittedCliente = false;
  }

  saveCliente() {
    this.submittedCliente = true;

    if (this.cliente.name?.trim()) {
      if (this.cliente.t_id) {
        this.clientes[this.findIndexByIdEmpleado(this.cliente.t_id)] =
          this.cliente;
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "empleado Updated",
          life: 3000,
        });
      } else {
        this.clientes.push(this.cliente);
        this.messageService.add({
          severity: "success",
          summary: "Successful",
          detail: "empleado Created",
          life: 3000,
        });
      }

      this.clientes = [...this.clientes];
      this.clienteDialog = false;
      this.cliente = null;
    }
  }

  findIndexByIdCliente(id: string): number {
    let index = -1;
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].t_id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  getCustomers(){
    this.userService.getUsersCustomer().subscribe(
      (data) => {
        this.clientes = data;
      },
      (err)=>{
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Error en la petición",
          life: 3000,
        });
      }
    )
  }

  getEmployees(){
    this.userService.getUsersEmployee().subscribe(
      (data) => {
        this.empleados = data;
      },
      (err)=>{
        this.messageService.add({
          severity: "error",
          summary: "Error",
          detail: "Error en la petición",
          life: 3000,
        });
      }
    )
  }
}
