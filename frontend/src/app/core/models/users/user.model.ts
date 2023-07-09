const roles = ['Administrador', 'Empleado', 'Cliente']

export class User{
  n_id ?: number;
  t_id: string;
  n_phone:number;
  email: string;
  name: string;
  is_active:boolean;
  is_superuser:boolean;
  is_staff:boolean;
  last_login:boolean; 
  password:string;  
}

export class Employee extends User {
  n_salary:number;
  d_start_contract:Date;
  d_end_contract:Date;
  t_rol:number;
  fk_cinema : number;
}

export class Customer extends User{
  n_points:number; 
}