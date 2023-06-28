---
title: Fase de evaluación
author: Juferoga
date: 2023-02-04
category: Jekyll
layout: post
---

## Pruebas al sistema
--- 

En el presente apartado se desarrollará la construcción de un plan de pruebas propuesto para el sistema desarrollado, en el cual se valide tanto los requerimientos funcionales como no funcionales.

Con el fin de obtener una visión integral de los componentes funcionales del aplicativo desarrollado, se realizarán una serie de pruebas para evaluar los aspectos presentados a continuación.

### Propósito

El objetivo de este documento es desarrollar el plan de pruebas propuesto por el equipo CINEDISTRITO, con el fin de confirmar y comprobar la adecuación de los requisitos tanto funcionales como no funcionales.

#### Objetivo General

Crear y llevar a cabo un plan de pruebas para el prototipo del sistema CINEDISTRITO, con el objetivo de detectar y corregir posibles problemas en varios escenarios de prueba aplicados al sistema. Esto permitirá mejorar la funcionalidad y calidad del software desarrollado, abordando los casos de prueba problemáticos y optimizando el estado del sistema.

#### Objetivos Específicos

Dentro del plan de pruebas se buscan cumplir los siguientes objetivos:

* Identificar los escenarios y los componentes a probar dentro de la aplicación.
* Establecer las técnicas de prueba necesarias para ejecutar adecuadamente el plan de pruebas.
* Definir un cronograma de tiempos y responsables de cada uno de los casos de prueba existentes en el plan.
* Implementar pruebas unitarias y de integración.
* Registrar los resultados obtenidos de cada caso de prueba.
* Evaluar los resultados y establecer estrategias de corrección y prevención de fallos en la aplicación.

#### Alcance

Dentro del marco del plan de pruebas, se incluyen los siguientes aspectos del sistema:
- **Interfaz Gráfica de Usuario:** Se evaluará la facilidad de uso de la aplicación para los usuarios (administradores/clientes), la navegabilidad, accesibilidad y apariencia de la interfaz.
- **Requerimientos Funcionales:** Se verificará que el sistema cumple con todos los requerimientos establecidos en la aplicación, incluyendo pruebas de registro, consulta y compras.
- **Persistencia de la información:** Se comprobará que el sistema tiene la capacidad de mantener la persistencia de los datos utilizados, cumpliendo con las operaciones básicas de creación, actualización, eliminación y lectura, y respetando las condiciones de consistencia e integridad de la información.
- **Requerimientos no funcionales:** Al igual que con los requerimientos funcionales, se verificará que el sistema cumple con los requerimientos no funcionales establecidos, como seguridad, disponibilidad, fiabilidad, entre otros.

Estos aspectos se evaluarán a través de la ejecución de varios tipos de pruebas, siguiendo un orden establecido:
- Pruebas Unitarias.
- Pruebas de Integración.
- Pruebas Funcionales.
- Pruebas de Rendimiento.
- Técnicas

De acuerdo con los escenarios y aspectos mencionados previamente, se proponen las siguientes cuatro técnicas de pruebas aplicadas en su contexto:

**Pruebas Unitarias:** Estas pruebas se aplican en los componentes más pequeños del sistema para asegurar su correcto funcionamiento. Cada componente se prueba de manera individual para analizar su funcionamiento y asegurar su cohesión y correctitud.

**Pruebas de Integración:** Estas pruebas son una extensión lógica de las pruebas unitarias y se aplican para verificar la funcionalidad y seguridad entre los componentes integrados del sistema. Permiten identificar problemas que puedan surgir al combinar las unidades en un sistema integrado.

**Pruebas Funcionales:** Estas pruebas son fundamentales para asegurar la calidad del producto de software y confirmar que cumple con sus funciones tal y como se espera del usuario. Se utilizan para verificar que la aplicación o página web ejecute sus funcionalidades de manera adecuada, incluyendo la respuesta a los controles de usuario, una interfaz de usuario consistente, integración con otros sistemas y procesos de negocios, y manejo adecuado de la información y búsquedas.

**Pruebas de Rendimiento:** Estas pruebas se enfocan en evaluar el rendimiento del sistema en términos de respuesta y estabilidad bajo una carga de trabajo específica. También pueden ser utilizadas para investigar, medir, validar o verificar otros atributos de calidad del sistema, como la escalabilidad, seguridad y uso de recursos.

#### Pruebas específicas
##### Pruebas Unitarias:
- Cuando un comprador obtiene 100 puntos, Cine Pacho le regala una boleta en general para ver la película que el usuario elija.
- La boleta de regalo se vence al paso de 6 meses desde su entrega.
##### Pruebas de Integración:
- Por cada compra de boletas se obtienen 10 puntos.
- Por cada compra de snacks se obtienen 5 puntos.
##### Pruebas funcionales:
- Se realizan registros para asegurar que los usuarios puedan registrarse e iniciar sesión de manera correcta.
- Pruebas en la búsqueda de películas con y sin loguear para comprobar el buen funcionamiento independiente del rol.
- Pruebas en la compra y reserva de tickets .
- Pruebas de integración con sistemas de pago para asegurarse de que la plataforma integre correctamente las transacciones realizadas.
##### Pruebas de rendimiento:
- El sistema debe responder a las solicitudes de los usuarios con un tiempo máximo de 1.5 segundos en condiciones normales de uso.
- El frontEnd debe cargar en menos de 3 segundos.



## Pruebas a la base de datos
---

Para este apartado realizaremos el uso de las pruebas ACID, para probar nuestra base de datos teniendo en cuenta:

[Escenario de pruebas](https://raw.githubusercontent.com/Juferoga/patrones/main/docs/assets/Ecenario_de_pruebas.pdf)

## Ensamblado del sistema
---

### FRONTEND

El repositorio ya contiene todos los archivos necesarios para realizar el despliegue del contenedor, ahora procedemos a explicar como se realiza.

Primeramente se tienen los archivos:

- Dockerfile:        Con el cual se construirá la imagen de nuestro aplicativo.
- docker-compose.yml El cual es el encargado de ayudar al despliegue de todos los servicios de forma ágil.
- .nginx/nginx.conf  El cual nos permitirá dentro de la imagen servir nuestro aplicativo en el puerto 80.150px

Comandos si esta en el server y dese desplegarlo con las últimas actualizaciones primero baje e contenedor que ya esta subido

$ ```docker-compose down```

Luego elimine las imágenes creadas por docker compose

$ ```docker image ls``` # se busca la imagen creada por compose y se elimina

$ ```docker image rm <hash-de-la-imagen>``` # recordar que basta con los 4 primeros caracteres si no se repiten en otros

Luego de esto bajar o hacer pull a los últimos cambios

$ ```git pull```

Luego construir la nueva imagen de nuestro servicio

$ ```docker-compose build``` 

Luego levantar el servicio 

$ ```docker-compose up -d # el menos d es para ejecutarlo como demonio```

### BACKEND

### PATRONES Backend

En este repositorio se encuentra el desarrollo de la sección que maneja el backend del aplicativo para la empresa PATRONES, el cual se desarrollo haciendo uso de la tecnología de docker, django y xhtml2pdf.
<hr>

### Instrucciones para utilizar el backend

1) Verificar si posee docker y docker-compose instalado.

2) Ejecutar los siguientes comandos de docker.

```
docker-compose build;
docker-compose up;
```

3) Una vez ya creado el contenedor docker, ingresamos a el y ejecutamos los siguientes comandos
```
docker-compose exec web bash;
# ya dentro del contenedor
```

```
python manage.py makemigrations users sections workbook;
```

```
python manage.py migrate
```
4) Después de ya creada todo dentro del contenedor creamos un usuario de tipo administrador o root.
```
python manage.py createsuperuser
```
5) Desde un navegador web se accede a localhost:8000/admin para el panel administrativo de django.

<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.javatpoint.com%2Fdjango%2Fimages%2Fdjango-admin-interface3.png&f=1&nofb=1" width="auto" height="auto" align="center"/>

6) Se tiene que crear primero usuarios, después agregarlos a su respectivo rol.

7) El entorno de desarrollo se a creado a cabalidad.

[![Juan Felipe Rodriguez Galindo](https://img.shields.io/badge/Juferoga-github-br?style=flat-square)](https://github.com/Juferoga)
