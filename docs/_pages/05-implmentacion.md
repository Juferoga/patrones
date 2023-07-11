---
title: Fase de implementación
author: Juferoga
date: 2023-02-05
category: Jekyll
layout: post
---

## Arquitectura

---

![Infraestructura del proyecto con aws](/patrones/assets/images/pages/implementacion/infra_fis.svg "Infraestructura del proyecto con aws")

### Costos de la arquitectura

<div class="table-wrapper" markdown="block">

  | category   | type | region    | count | unitPrice | cost  | instanceType | instanceSize | platform | role       | engine            | dataGb |
  |------------|------|-----------|-------|-----------|-------|--------------|--------------|----------|------------|-------------------|--------|
  | compute    | ec2  | us-east-1 | 1     | 15.18     | 15.18 | t3           | small        | Linux    |            |                   |        |
  | networking | elb  | us-east-1 | 1     | 22.27     | 22.27 |              |              |          |            |                   | 10     |
  | storage    | s3   | us-east-1 | 1     | 3.95      | 3.95  |              |              |          |            |                   | 0.25   |
  | database   | rds  | us-east-1 | 1     | 43.8      | 43.8  | serverless   | serverless   |          | serverless | aurora-postgresql |        |

</div>

![Precios infraestructura del proyecto con aws](/patrones/assets/images/pages/implementacion/infra_fis_prices.png "Precios infraestructura del proyecto con aws")

[Tool for diagram for cloud implementation.][1]

## Instalación

---

[Instalación del sistema.][2]

## Sistema en producción

---

El sistema se encuentra desplegado en:

* [Despliegue front.][3]
* [Despliegue back.][4]
* [Despliegue traefik.][5]

### extra

Se realiza el uso de Portainer, para el manejo de la arquitectura móvil de forma interactiva y fácil para el usuario.

* [Portainer.][6]

## Soporte técnico post-instalación

---

Errores post-instalación? obvio si 😆. Para esto se planea con el cliente realizar el despliegue de una versión temprana del software, para el acceso verificación y detección de errores, los cuales serán corregidos en etapas posteriores.

### extras

El plan de detección de errores y post-instalación del software tiene como objetivo garantizar un despliegue exitoso y libre de problemas de nuestro producto. A continuación, se detallan los pasos a seguir, en la post-instalación inicial del producto (en su fase beta):

1. **Pruebas de funcionalidad:** Realice una serie de pruebas para verificar que todas las funciones del software estén operativas y que se comporten según lo esperado. Se probarán diferentes escenarios y casos de uso para asegurarse de que no haya errores o comportamientos inesperados.

2. **Verificación de integración:** Ya que el software se integra con otros sistemas o módulos, se deben realizar pruebas de integración para asegurarse de que la comunicación entre ellos sea correcta y que los datos se transmitan de manera adecuada.

3. **Detección y registro de errores:** Durante las pruebas, si encuentra algún error o comportamiento anómalo, se registrará detalladamente en un sistema de seguimiento de problemas o en un informe de errores. Incluya toda la información relevante, como pasos para reproducir el error, mensajes de error y cualquier otra observación útil.

4. **Resolución de problemas:** Una vez identificados los errores, el equipo de soporte o desarrollo deberá analizarlos y trabajar en su resolución. Siga nuestras indicaciones para obtener orientación sobre cómo solucionar los problemas encontrados.

5. **Actualizaciones y parches:** Se debe de mantener el software actualizado instalando las actualizaciones y parches proporcionados por el equipo de desarrollo. Estas actualizaciones pueden incluir mejoras de rendimiento, correcciones de errores y nuevas funciones. Siga los procedimientos recomendados para aplicar estas actualizaciones de manera adecuada.

6. **Documentación:** Se proporcionará una documentación clara y actualizada disponible para referencia futura. Esto ayudará a los usuarios uso del software y resolución de los problemas.

[1]:https://www.cloudcraft.co/
[2]:https://juferoga.github.io/patrones/pages/04-evaluacion/#ensamblado-del-sistema
[3]:https://patrones.juferoga.live
[4]:https://back.juferoga.live
[5]:https://tk.juferoga.live
[6]:https://pt.juferoga.live
