import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import swal from 'sweetalert2';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  titulo: string;
  resPrueba: string;
  listaPrueba = [];
  listaPractica = [];
  selectedIndex = 0;
  preguntas = [];
  respuestas = [];
  lista = [];
  tipoPrueba = sessionStorage.getItem('tipo');
  listaH = [
    {
      tipo: 'h3',
      descripcion: 'PARTE 2: ¿Qué me interesa?'
    },
    {
      tipo: 'p',
      descripcion: 'En cada sección de este inventario encontrarás varias frases sobre cómo eres o qué te gusta hacer. Lea con atención cada frase y luego selecciono A, B, C, D o E según lo que se acerque más a lo que haces o tu forma de sentir.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa A, si tu respuesta es SI o SIEMPRE.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa B, si tu respuesta es MUCHAS VECES.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa C, si tu respuesta es MAS O MENOS o A VECES.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa D, si tu respuesta es POCAS VECES.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa E, si tu respuesta es NO o NUNCA.'
    },
    {
      tipo: 'p',
      descripcion: 'No existe respuesas buenas o malas. Contesta de forma sincera y déjate guiar por tus primeras impresiones o ideas.'
    }
  ];
  preguntasH = [
    {
      item: '1',
      tipo: 'p',
      descripcion: '36.	Arreglar aparatos, instalaciones eléctricas, cañerías.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '2',
      tipo: 'p',
      descripcion: '37.	Armar o desarmar aparatos: televisores, celulares, refrigeradoras, computadoras.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '3',
      tipo: 'p',
      descripcion: '38.	Armar muebles: camas, mesas o sillas.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
  ];
  preguntasHP = [
    {
      item: '1',
      tipo: 'p',
      descripcion: '37.	Armar o desarmar aparatos: televisores, celulares, refrigeradoras, computadoras.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '2',
      tipo: 'p',
      descripcion: '38.	Armar muebles: camas, mesas o sillas.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '3',
      tipo: 'p',
      descripcion: '39.	Construir caminos, represas o puentes.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '4',
      tipo: 'p',
      descripcion: '40.	Hacer planos de máquinas, casas o edificios.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '5',
      tipo: 'p',
      descripcion: '41.	Armar o reparar un auto.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '6',
      tipo: 'p',
      descripcion: '42.	Sembrar, cosechar y regar las plantas.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '7',
      tipo: 'p',
      descripcion: '43.	Criar o pastorear ganado.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '7',
      tipo: 'p',
      descripcion: '44.	Observar, investigar, pensar y escribir sobre algo que ha ocurrido.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '9',
      tipo: 'p',
      descripcion: '45.	Explicar las cosas que pasan.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      item: '10',
      tipo: 'p',
      descripcion: '46.	Observar y estudiar información.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
  ];
  preguntasHI = [
    {
      item: '1',
      tipo: 'p',
      descripcion: '36.	Arreglar aparatos, instalaciones eléctricas, cañerías',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
  ];
  listaE = [
    {
      tipo: 'p',
      descripcion: 'A continuación, encontraras varias afirmaciones a las que responderás según tu forma de sentir o actuar.'
    },
    {
      tipo: 'p',
      descripcion: 'Observa el siguiente ejemplo, ¿cuál de los otros dibujos es exactamente igual?.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa A, si tu respuesta es SI o SIEMPRE.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa B, si tu respuesta es MUCHAS VECES.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa C, si tu respuesta es MAS O MENOS o A VECES.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa D, si tu respuesta es POCAS VECES.'
    },
    {
      tipo: 'p',
      descripcion: 'Marca la alternativa E, si tu respuesta es NO o NUNCA.'
    },
    {
      tipo: 'p',
      descripcion: 'Observa estos ejercicios:'
    },
  ];
  preguntasE = [
    {
      tipo: 'p',
      descripcion: '1.	Antes de hacer algo, averiguo todo lo que puedo.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '2.	Cuando comienzo algo nuevo, busco toda la información posible antes de empezar.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '3.	Busco mucha información y ayuda para llevar a cabo mi labor',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
  ];
  preguntasEP = [
    {
      tipo: 'p',
      descripcion: '1.	Antes de hacer algo, averiguo todo lo que puedo.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '2.	Cuando comienzo algo nuevo, busco toda la información posible antes de empezar.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '3.	Busco mucha información y ayuda para llevar a cabo mi labor',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '4.	Busco el consejo de personas que son especialistas en lo que quiero hacer.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '5.	Antes de tomar una decisión, me gusta informarme y saber qué podrá pasar.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '6.	Cuando hago mi labor, me gusta estar bien informado.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '7.	Busco estar informado sobre mi trabajo o negocio.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '8.	Leo la prensa o acudo a conferencias o charlas sobre mi trabajo o negocio.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '9.	Estoy al día en las novedades que se producen en los negocios.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '10.	He hecho trampa en mi trabajo.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '11.	Definitivamente, el momento más importante de un trabajo es cuando se cobra.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '12.	El día más importante es cuando se cobra.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '13.	El trabajo es, sobre todo, para obtener dinero.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '14.	Sinceramente, en el fondo de mí, pienso que lo más importante de una actividad, es el dinero que se obtiene.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
    {
      tipo: 'p',
      descripcion: '15.	Una buena cantidad de dinero vale más que un trabajo bien hecho.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    },
  ];
  preguntasEI = [
    {
      tipo: 'p',
      descripcion: '1.	Antes de hacer algo, averiguo todo lo que puedo.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: 'Si o Siempre',
          res: 'A'
        },
        {
          tipo: 'R',
          descripcion: 'Muchas veces',
          res: 'B'
        },
        {
          tipo: 'R',
          descripcion: 'Mas o menos o a veces',
          res: 'C'
        },
        {
          tipo: 'R',
          descripcion: 'Pocas Veces',
          res: 'D'
        },
        {
          tipo: 'R',
          descripcion: 'No o Nunca',
          res: 'E'
        },
      ]
    }
  ];
  listaT = [
    {
      tipo: 'h3',
      descripcion: 'SUB-PRUEBA B:'
    },
    {
      tipo: 'p',
      descripcion: 'En esta página hay algunos ejercicios para comparar nombres. Su tarea consiste en ver si ambos nombres están escritos de forma idéntica o no.'
    },
    {
      tipo: 'p',
      descripcion: 'Fíjese en el ejercicio No. 1:'
    },
  ];
  preguntasTI = [
    {
      item: '1',
      tipo: 'p',
      descripcion: '1. S.G. Barton ------ S.G. Barton',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    }
  ];
  preguntasT = [
    {
      item: '1',
      tipo: 'p',
      descripcion: '3 .Long & Co.  ----  Long. Inc.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '4. Johnson &Smith  ----  Johnson & Smith',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '6. National Agency  ----  Natl Agency',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '7. Fox Inc.  ----  FoxIcn.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '8. George Gorman  ----  George Gorman',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '5. Armstrong F.C.  ----  Armstrong F.G.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    }
  ];
  preguntasTP = [
    {
      item: '1',
      tipo: 'p',
      descripcion: '1. Hamilton Nat" l Bank  -----  Hamilton Nat"l Bank',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '2. Bonelli" sDrugs  -----Bonelli"s Drugs',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '3. Gatti&Calimano  -----Gatti&Calimano',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '4. Baltazar Cruz Co.  -----  Baltazar Cruz Co.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '5. Del Mare Radio Co.  -----  Del Mare Radio Co.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '6. Antilles Co.  -----  Antilles Co.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '7. Alonso"s  -----  Alonso"s',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    },
    {
      item: '1',
      tipo: 'p',
      descripcion: '8. E.E. Fox Co.  -----  E.E. Fox Co.',
      respuestas: [
        {
          tipo: 'R',
          descripcion: '',
          res: 'I',
        },
        {
          tipo: 'R',
          descripcion: '',
          res: 'D',
        }
      ]
    }
  ];
  isOptional = false;
  preguntaI = [];
  preguntasP = [];
  backgroundColor = 'primary';
  comienzaPrueba = false;
  constructor() { }

  ngOnInit(): void {
    const tipo = sessionStorage.getItem('tipo');
    if (tipo === '1') {
      this.titulo = 'PRUEBA DE HABILIDADES BÁSICAS (PHB)';
      this.lista = this.listaT;
      this.preguntas = this.preguntasT;
      this.preguntaI = this.preguntasTI;
      this.preguntasP = this.preguntasTP;
      this.listaPractica = [
        {
          tipo: 'p',
          descripcion: 'Aquí hay varios ejercicios de práctica. Si los nombres son exactamente iguales, seleccione el círculo que contiene la letra I. Si son diferentes, pinte el círculo que contiene la letra D.'
        }
      ];
      this.listaPrueba = [
        {
          tipo: 'h3',
          descripcion: 'SUB-PRUEBA "B":  ATENCION DE OBJETOS'
        },
        {
          tipo: 'p',
          descripcion: '¿Cuál de los siguientes dibujos es exactamente igual?'
        }
      ];
    }
    if (tipo === '3') {
      this.titulo = 'TEST DE EVALUACION DEL POTENCIAL EMPRESARIAL - TEPE';
      this.lista = this.listaE;
      this.preguntas = this.preguntasE;
      this.preguntaI = this.preguntasEI;
      this.preguntasP = this.preguntasEP;
      this.listaPractica = [
        {
          tipo: 'p',
          descripcion: 'Ahora resuelve los siguientes ejercicios de practica'
        }
      ];
      this.listaPrueba = [
        {
          tipo: 'p',
          descripcion: 'Contesta lo más rapido que puedas. En lo posible, evite contestar con letra C procure contestar A, B o D, E.'
        }
      ];
    }
    if (tipo === '2') {
      this.titulo = 'PRUEBA DE INVENTARIO DE ESTILOS PERSONALES Y PREFERENCIAS OCUPACIONALES (IEPPO)';
      this.lista = this.listaH;
      this.preguntas = this.preguntasH;
      this.preguntaI = this.preguntasHI;
      this.preguntasP = this.preguntasHP;
      this.listaPractica = [
        {
          tipo: 'h3',
          descripcion: 'PARTE 2: ¿Qué me interesa?'
        },
        {
          tipo: 'p',
          descripcion: 'Ahora resuelve los siguientes ejercicios de practica'
        }
      ];
      this.listaPrueba = [
        {
          tipo: 'h3',
          descripcion: 'PARTE 2: ¿Qué me interesa?'
        },
        {
          tipo: 'p',
          descripcion: 'Leo con atención cada frase y luego selecciona A, B, C, D o E según lo que se acerque más a lo que haces o tu forma de sentir.'
        }
      ];
    }
  }

  nextTab(index: number): void {
    if (index === 2){
      swal.fire({
        title: 'Mensaje Informativo',
        text: 'A continuación, hay más ejercicios como estos. Resuelvelos de la misma forma. Trabaja con la mayor rapidez y acierto que puedas. Tendras x minutos para hacer los ejercicios.',
        icon: 'question',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      }).then((result1) => {
        if (result1.isConfirmed) {
          this.selectedIndex = index;
        }
      });
    } else {
      this.selectedIndex = index;
    }
  }

  nextStepper(): void {
    swal.fire({
      title: 'Mensaje Informativo',
      text: 'La respuesta correcta para la pregunta N° 1 es la D',
      icon: 'question',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
    }).then((result1) => {
      if (result1.isConfirmed) {
        this.comienzaPrueba = true;
        this.stepper.next();
      }
    });
  }

  radio(event): void{
    console.log(event);
    this.resPrueba = event;
  }

  siguientePrueba(): void {
      swal.fire({
        title: 'Mensaje Informativo',
        text: '¿Estás seguro de que deseas pasar al siguiente TEST? Al aceptar solo se tomara en cuenta aquellas preguntas que han sido marcadas y no podrás volver a registrar dicho TEST.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      }).then((result1) => {
        if (result1.isConfirmed) {
          this.comienzaPrueba = true;
          // this.stepper.next();
         // this.router.navigate(['/inicio']);
        }
      });
  }

}
