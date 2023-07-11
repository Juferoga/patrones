---
title: Fase de planeación
author: Juferoga
date: 2023-02-02
category: Jekyll
layout: post
---

Una de las etapas fundamentales y más importante para el desarrollo de software. Es la etapa en la que se definen los objetivos, alcances, recursos y tiempos del proyecto. En esta fase se identifican los requisitos del sistema, se establecen los objetivos de calidad y se determinan los recursos necesarios para cumplirlos. La planificación también incluye la definición de un calendario de desarrollo, un presupuesto y un plan de gestión de riesgos. El objetivo de la fase de planificación es establecer una base sólida para el desarrollo del software, lo que permite al equipo de desarrollo trabajar de manera eficiente y asegurar que el proyecto se complete a tiempo y dentro del presupuesto.

## Presupuesto

### Riesgos generales (del proceso)

---

- Reducción o extensión del tiempo empleado para el desarrollo de proyecto debido a factores externos no contemplados.

### Riesgos del producto

---

- Mal funcionamiento de las herramientas de desarrollo.

<div class="table-wrapper" markdown="block">
  <table>
    <thead>
      <tr>
        <th colspan="3">Plan de Mitigación y Contingencia</th>
        <th>Versión: 1.0.0<br>Fecha: 07/07/2023</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Tipo</strong></td>
        <td><strong>Riesgo</strong></td>
        <td><strong>Medida preventiva (Mitigación)</strong></td>
        <td><strong>Acción correctiva (Contingencia)</strong></td>
      </tr>
      <tr>
        <td>Riesgo del producto</td>
        <td>Desconocimiento de las tecnologías utilizadas en el proyecto</td>
        <td>Capacitar a los integrantes del grupo</td>
        <td>Asignar módulos más complejos a los integrantes con más experiencia</td>
      </tr>
      <tr>
        <td>Riesgo del producto</td>
        <td>Desconocimiento de las tecnologías utilizadas en el proyecto</td>
        <td>Capacitar a los integrantes del grupo</td>
        <td>Asignar módulos más complejos a los integrantes con más experiencia</td>
      </tr>
      <tr>
        <td>Riesgo del producto</td>
        <td>Desconocimiento de las tecnologías utilizadas en el proyecto</td>
        <td>Capacitar a los integrantes del grupo</td>
        <td>Asignar módulos más complejos a los integrantes con más experiencia</td>
      </tr>
    </tbody>
  </table>
</div>

## Cronograma de desarrollo

---

### Estimación de proyecto

<div class="table-wrapper" markdown="block">
  <table>
    <thead>
      <tr>
        <th>Clase</th>
        <th>Atributos</th>
        <th>Relaciones simples</th>
        <th>Relaciones multiples</th>
        <th>Métodos simples</th>
        <th>Métodos complejos</th>
        <th>Índice de tamaño</th>
        <th>Tipo de clase</th>
        <th>LOC</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>User</td>
        <td>5</td>
        <td>0</td>
        <td>1</td>
        <td>10</td>
        <td>2</td>
        <td>75</td>
        <td>Grande</td>
        <td>300</td>
      </tr>
      <tr>
        <td>Client</td>
        <td>3</td>
        <td>2</td>
        <td>0</td>
        <td>6</td>
        <td>3</td>
        <td>66</td>
        <td>Grande</td>
        <td>264</td>
      </tr>
      <tr>
        <td>Employee</td>
        <td>7</td>
        <td>2</td>
        <td>0</td>
        <td>14</td>
        <td>0</td>
        <td>76</td>
        <td>Grande</td>
        <td>304</td>
      </tr>
      <tr>
        <td>Invoice</td>
        <td>4</td>
        <td>2</td>
        <td>0</td>
        <td>8</td>
        <td>1</td>
        <td>56</td>
        <td>Grande</td>
        <td>224</td>
      </tr>
      <tr>
        <td>Local</td>
        <td>4</td>
        <td>3</td>
        <td>0</td>
        <td>8</td>
        <td>2</td>
        <td>69</td>
        <td>Grande</td>
        <td>276</td>
      </tr>
      <tr>
        <td>Ticket</td>
        <td>5</td>
        <td>1</td>
        <td>0</td>
        <td>10</td>
        <td>0</td>
        <td>53</td>
        <td>Grande</td>
        <td>212</td>
      </tr>
      <tr>
        <td>Cinema</td>
        <td>2</td>
        <td>0</td>
        <td>2</td>
        <td>4</td>
        <td>0</td>
        <td>30</td>
        <td>Mediana</td>
        <td>120</td>
      </tr>
      <tr>
        <td>Snacks</td>
        <td>4</td>
        <td>1</td>
        <td>0</td>
        <td>8</td>
        <td>0</td>
        <td>43</td>
        <td>Mediana</td>
        <td>172</td>
      </tr>
      <tr>
        <td>Hall</td>
        <td>2</td>
        <td>2</td>
        <td>0</td>
        <td>4</td>
        <td>0</td>
        <td>26</td>
        <td>Pequeña</td>
        <td>104</td>
      </tr>
      <tr>
        <td>Show</td>
        <td>5</td>
        <td>2</td>
        <td>0</td>
        <td>10</td>
        <td>0</td>
        <td>56</td>
        <td>Grande</td>
        <td>224</td>
      </tr>
      <tr>
        <td>Movie</td>
        <td>7</td>
        <td>1</td>
        <td>0</td>
        <td>14</td>
        <td>0</td>
        <td>73</td>
        <td>Grande</td>
        <td>292</td>
      </tr>
      <tr>
        <td colspan="7"></td>
        <td>TOTAL LINEAS</td>
        <td>2192</td>
      </tr>
    </tbody>
  </table>
</div>

Para visualizar el diagrama de la mejor manera ingresa el siguiente [enlace.][1]
![Diagrama de Gantt](/patrones/assets/images/pages/planeacion/DiagramaDeGantt.png "Diagrama de Gantt")

## Diagramas del proyecto

---

En la siguiente sección podrás ver los diagramas necesarios para el desarrollo del proyecto.

### Diagrama de contexto

---

![Diagrama de contexto](/patrones/assets/images/pages/planeacion/DiagramaContexto.svg "Diagrama de Contexto")

### Diagrama de objetos

---

![Diagrama de objetos](/patrones/assets/images/pages/planeacion/DiagramaObjetos.svg "Diagrama de objetos")

### Diagrama de Gantt

---

  ![Diagrama de Gantt](/patrones/assets/images/pages/planeacion/DiagramaDeGantt.png "Diagrama de Gantt")
  Para visualizar el diagrama de la mejor manera ingresa el siguiente [enlace.][1]

### Diagrama de Casos de uso

---

![Diagrama de casos de uso](/patrones/assets/images/pages/planeacion/DiagramaCU.svg "Diagrama de casos de uso")

### Diagrama de secuencias

---

#### Iniciar sesión

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_02_iniciar_sesion.svg "Diagrama de secuencias")

#### Cerrar sesión

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_01_cerrar_sesion.svg "Diagrama de secuencias")

#### Registro usuario

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_03_registro_usuario.svg "Diagrama de secuencias")

#### Disponibilidad y disposición de sillas

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_04_dispo_sillas.svg "Diagrama de secuencias")

#### Comprar boleta

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_05_comprar_boleto.svg "Diagrama de secuencias")

#### Comprar snack

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_06_comprar_snack.svg "Diagrama de secuencias")

#### Evaluar servicio

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_07_evaluar.svg "Diagrama de secuencias")

#### Generar reportes

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_08_reportes.svg "Diagrama de secuencias")

#### Gestionar Base de datos

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_09_gest_bd.svg "Diagrama de secuencias")

#### Gestionar cargos

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_10_cargos.svg "Diagrama de secuencias")

#### Redimir puntos

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_11_red_puntos.svg "Diagrama de secuencias")

#### Realizar pago

![Diagrama de secuencias](/patrones/assets/images/pages/planeacion/sec_12_pago.svg "Diagrama de secuencias")

### Diagrama de arquitectura

---

![Diagrama de arquitectura](/patrones/assets/images/pages/planeacion/DiagramaArquitectura.svg "Diagrama de arquitectura")

### Diagrama entidad relación

---

![Diagrama entidad relación](/patrones/assets/images/pages/planeacion/DiagramaER.svg "Diagrama entidad relación")

### Diagrama relacional

---

  ![Diagrama relacional](/patrones/assets/images/pages/planeacion/DiagramaRelacional.svg "Diagrama relacional")

### Diagrama de clases

---

  ![Diagrama de clases](/patrones/assets/images/pages/planeacion/DiagramaClases.svg "Diagrama de clases")

### Diagrama de componentes

---

  ![Diagrama de componentes](/patrones/assets/images/pages/planeacion/DiagramaComponentes.svg "Diagrama de componentes")

### Diagrama de despliegue

---

  ![Diagrama de despliegue](/patrones/assets/images/pages/planeacion/DiagramaDespliegue.svg "Diagrama de despliegue")

### Diagrama paquetes

---

### Diagrama de paquetes Front

  ![Diagrama de paquetes Front](/patrones/assets/images/pages/planeacion/DiagramaPaquetesFront.svg "Diagrama de paquetes Front")

### Diagrama de paquetes Back

  ![Diagrama de paquetes Back](/patrones/assets/images/pages/planeacion/DiagramaPaquetesBack.svg "Diagrama de paquetes Back")

[1]: https://github.com/users/Juferoga/projects/5/views/3
