---
title: Fase de análisis
author: Juferoga
date: 2023-02-01
category: Jekyll
layout: post
---

Una de las etapas fundamentales y más importante para el desarrollo de software. Es la etapa en la cual se analiza el proyecto, es en la cual podemos obtener los fundamentos en los que se basara el proyecto que se cree.

## Situación problema

---

La situación problema consiste en el diseño e implementación de un sistema de compra en línea para la empresa Cine Distrito, que permita a los usuarios comprar boletas y snacks desde puntos ágiles cercanos a los multiplex o dentro de ellos en Latinoamérica. Este sistema debe ser capaz de mostrar la disponibilidad de sillas y salas en los multiplex, así como permitir el pago en línea para reservar las sillas para los clientes que hayan pagado. También debe tener un sistema de puntos para que los clientes acumulen puntos con cada compra, que luego pueden canjear por boletas gratuitas. La empresa también necesita una base de datos centralizada para registrar la información personal y laboral de sus empleados y debe tener la capacidad de generar reportes estadísticos sobre las operaciones mensuales. Por último, el sistema debe garantizar la seguridad de la información y tener un control de acceso y autenticación adecuado.

## Definición de objetivos

---

\*Diseñar e implementar una interfaz de usuario amigable e intuitiva que permita a los clientes seleccionar el multiplex, la película y la silla que desean reservar.

- Desarrollar un sistema de pago en línea seguro que permita a los clientes realizar sus transacciones de forma rápida y sencilla.

- Crear un sistema de puntos para que los clientes acumulen puntos con cada compra y puedan canjearlos por boletas gratuitas.

- Implementar una base de datos centralizada para registrar la información personal y laboral de los empleados de Cine Distrito.

- Garantizar la seguridad de la información almacenada y tener un control de acceso y autenticación adecuado para proteger la privacidad de los clientes y empleados.

- Generar reportes estadísticos mensuales que permitan a la empresa analizar sus operaciones y tomar decisiones informadas para mejorar su rendimiento.

- Realizar pruebas rigurosas para garantizar la calidad y el rendimiento del sistema antes de su implementación en los diferentes multiplex de Latinoamérica.

## Requerimientos funcionales y no funcionales

### Requerimientos funcionales

---
<div class="table-wrapper" markdown="block">

    | Historia de usuario                                                                                                                                                                                 |                                                                                                                                                                        | 
    | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
    | ID: 1                                                                                                                                                                                               | Nombre: Como usuario quiero visualizar las películas disponibles en el cine para elegir el horario que más me convenga y la película que quiero ver.                   | 
    | Prioridad:                                                                                                                                                                                          | Iteración asignada:                                                                                                                                                    | 
    | Rol: Usuario                                                                                                                                                                                        |                                                                                                                                                                        | 
    | Descripción: Visualizar las funciones disponibles, teniendo en cuenta en qué cine se llevará a cabo, qué película se proyectará, hora en que se llevará a cabalidad sin necesidad de crear usuario. |                                                                                                                                                                        | 
    | Criterio de aceptación                                                                                                                                                                              | Dado un usuario sin loguearse en la página de inicio Cuando le dé clic al segmento de películas Entonces , se muestra el catálogo de películas disponibles en el cine. | 

</div>

<div class="table-wrapper" markdown="block">

    | Historia de usuario                                                                                   |                                                                                                                                                                                    |
    | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | ID: 2                                                                                                 | Nombre: Como usuario quiero visualizar las películas disponibles en el cine para elegir el horario que más me convenga y la película que quiero ver.                               |
    | Prioridad:                                                                                            | Iteración asignada:                                                                                                                                                                |
    | Rol: Usuario                                                                                          |                                                                                                                                                                                    |
    | Descripción: Visualizar el menú de snacks, teniendo en cuenta las diferentes promociones disponibles. |                                                                                                                                                                                    |
    | Funcionalidad                                                                                         | Visualizar el menú de snacks, teniendo en cuenta las diferentes promociones disponibles.                                                                                           |
    | Criterio de aceptación                                                                                | Dado un usuario sin loguearse en la página de inicio, cuando desee observar los diferentes combos y snacks que ofrece el cinema, entonces podrá ver y elegir los snacks que desee. |

</div>
<div class="table-wrapper" markdown="block">

    | Historia de usuario                                                                                     |                                                                                                                                                                            |
    |---------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | ID: 3                                                                                                   | Nombre: Como usuario que ya eligió una función, quiero visualizar los asientos disponibles para elegir él(los) que más me convenga(n).                                     |
    | Prioridad:                                                                                              | Iteración asignada:                                                                                                                                                        |
    | Rol: Usuario                                                                                            |                                                                                                                                                                            |
    | Descripción: Visualizar la disponibilidad de sillas en cada función sin la necesidad de estar logueado. |                                                                                                                                                                            |
    | Criterio de aceptación                                                                                  | Dado un usuario que desea ver asientos disponibles en una función Cuando le dé clic o seleccione la función Entonces visualiza los asientos disponibles para la función.   |

</div>
<div class="table-wrapper" markdown="block">

    | Historia de usuario                                                                        |                                                                                                                                                                                                                                                                                                                                                                      |
    |--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | ID: 4                                                                                      | Nombre: Como usuario logueado quiero reservar los asientos elegidos previamente para pagarlos posteriormente, ya sea de manera presencial o virtual.                                                                                                                                                                                                                 |
    | Prioridad:                                                                                 | Iteración asignada:                                                                                                                                                                                                                                                                                                                                                  |
    | Rol: Usuario logueado                                                                      |                                                                                                                                                                                                                                                                                                                                                                      |
    | Descripción: Reservar él(los) asiento(s) y snacks en las funciones que hay disponibilidad. |                                                                                                                                                                                                                                                                                                                                                                      |
    | Criterio de aceptación                                                                     | Dado un usuario logueado previamente, cuando desee reservar los asientos elegidos con anterioridad, entonces el sistema realizará la verificación de que los asientos siguen libres para reservar, luego los guarda y envía una ventana emergente avisando que “Se han reservado los asientos seleccionados”; posterior a esto, lo redirige a la página de snacks.   |

</div>
<div class="table-wrapper" markdown="block">

    | Historia de usuario                                                                              |                                                                                                                                                                                                   |
    |--------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | ID: 5                                                                                            | Nombre: Como usuario con cuenta y logueado quiero pagar las reservas realizadas anteriormente para posteriormente ver la proyección de la película (los snacks se reciben al ingresar al cinema). |
    | Prioridad:                                                                                       | Iteración asignada:                                                                                                                                                                               |
    | Rol: Usuario                                                                                     |                                                                                                                                                                                                   |
    | Descripción: Tener diferentes métodos de pago para realizar la compra a través de la plataforma. |                                                                                                                                                                                                   |
    | Criterio de aceptación                                                                           | Dado un usuario que haya ingresado al sistema Cuando haga clic en realizar pago Entonces se mostrará un carrusel de pago, una notificación de pago exitoso o no.                                  |

</div>
<div class="table-wrapper" markdown="block">

    | Historia de usuario                                             |                                                                                                                                                                |
    |-----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | ID: 6                                                           | Nombre: Como usuario sin cuenta quiero registrarme para acceder a la plataforma.                                                                               |
    | Prioridad:                                                      | Iteración asignada:                                                                                                                                            |
    | Rol: Usuario                                                    |                                                                                                                                                                |
    | Descripción: El usuario se podrá registrar sobre el aplicativo. |                                                                                                                                                                |
    | Criterio de aceptación                                          | Dado un usuario que haya ingresado al sistema Cuando haga clic en registrarse Entonces se mostrará un carrusel de pago, una notificación de pago exitoso o no. |

</div>

### Requerimientos NO funcionales - criterios de aceptación

---
<div class="table-wrapper" markdown="block">

    | ID    | Requerimiento  | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Fuente                    |
    | ----- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
    | RN001 | Rendimiento    | El sistema debe responder a las solicitudes de los usuarios con un tiempo máximo de 1.5 segundos en condiciones normales de uso. Se deben almacenar consultas previas para mejorar la rapidez de consulta del sistema. El frontEnd debe cargar en menos de 3 segundos. El servidor debe contar con las características mínimas para cumplir lo anterior.                                                                                                                                                                                                                                                       | Usuario                   |
    | RN002 | Usabilidad     | La interfaz de usuario debe ser intuitiva y fácil de usar para usuarios sin experiencia previa. La interfaz debe ser de fácil aprendizaje que no tome mucho tiempo adaptarse a ella El estado de la interfaz debe ser visible para todos los roles La interfaz debe notificar siempre al usuario de todo lo que está realizando en el sistema La interfaz debe utilizar un lenguaje entendible para el usuario para que no haya confusiones La interfaz debe tener una contenido transparente para el usuario                                                                                                  | Usuario                   |
    | RN003 | Fiabilidad     | El sistema debe estar disponible para su uso las 24 horas del día, los 7 días de la semana, con un tiempo de inactividad máximo de 1 hora al mes planificado para actualizaciones programadas. El sistema debe garantizar la privacidad de los datos suministrados El sistema debe tener un buen funcionamiento al momento de la reserva y pago de los diferentes productos de la plataforma                                                                                                                                                                                                                   | Gerente de proyecto       |
    | RN004 | Seguridad      | El sistema debe incluir un proceso de autenticación antes de manipular los datos. El sistema debe cifrar los datos sensibles del aplicativo entre peticiones. El sistema debe cumplir con los criterios de hardering dentro del servidor donde va a ser instalado. El sistema debe rechazar las peticiones que se hagan sin un token de acceso. El sistema debe almacenar todos los archivos privados como contraseñas en un lugar seguro. No se deben generar contraseñas por medio de la contraseña de un tercero. Se deben implementar certificados para aumentar la confiabilidad dentro de la plataforma. | Departamento de seguridad |
    | RN005 | Escalabilidad  | El sistema debe ser capaz de manejar un aumento del 50% en el número de usuarios concurrentes sin degradación del rendimiento. El sistema debe tener la posibilidad de tener bases de datos distribuidas para el manejo de grandes cantidades de información. La interfaz de usuario debe poder ser replicable, para que en caso de caída del aplicativo sea de fácil despliegue. El sistema debe crear volúmenes que permitan la rápida recuperación de la base de datos                                                                                                                                      | Gerente de proyecto       |
    | RN006 | Mantenibilidad | El código fuente del sistema debe estar documentado y ser fácil de entender y mantener para desarrolladores nuevos y existentes. El sistema deberá tener buenas prácticas de programación En un futuro se implementarán nuevas funcionalidades Cada cierto tiempo se le hará mantenimiento a la interfaz actualizando y siendo esta más amigable con el usuario.                                                                                                                                                                                                                                               | Equipo de desarrollo      |
    | RN007 | Portabilidad   | El sistema debe ser capaz de funcionar en múltiples plataformas, incluyendo sistemas operativos y navegadores web populares. La página web debe contar con un diseño amigable con un diseño que se pueda ver en varios dispositivos. La página web debe ser ligera para que al visualizarse en un dispositivo móvil se cargue con rapidez.                                                                                                                                                                                                                                                                     | Usuario                   |

</div>

## Definición de actores y privilegios por actor

---

    * **Administrador del sistema:** Este rol tendría acceso completo al sistema, incluyendo la capacidad de agregar y eliminar usuarios, crear y modificar roles y privilegios, y tener acceso a todas las funciones del sistema. Solo un pequeño número de personas tendría este rol para garantizar la seguridad del sistema.

    * **Empleados de Cine Distrito:** Este rol tendría acceso a la información personal y laboral de cada empleado y solo podrían modificar la información que esté relacionada con su propio perfil. También tendrían acceso a información sobre la disponibilidad de sillas y salas en los diferentes multiplex para poder ayudar a los clientes a tomar decisiones informadas.

    * **Clientes:** Este rol tendría acceso limitado al sistema, solo a la información relevante para su compra en línea. Podrían ver la disponibilidad de sillas y salas, comprar boletas y snacks, y ver el historial de sus compras y puntos acumulados.

    * **Administrador de estadísticas:** Este rol tendría acceso a información estadística, como la movilidad de los empleados y las ventas mensuales. Sería responsable de crear reportes y presentar la información de una manera fácil de entender para los gerentes de Cine Distrito.

    * **Puntos ágiles:** Este rol tendría acceso limitado al sistema solo para realizar transacciones de venta de boletas y snacks en línea, pero no tendrían acceso a la información personal de los empleados o la información de los clientes.
