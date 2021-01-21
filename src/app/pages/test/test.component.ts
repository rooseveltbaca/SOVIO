import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/model/pregunta.model';
import { Prueba } from 'src/app/model/prueba.model';
import { Respuesta } from 'src/app/model/respuesta.model';
import { TestService } from 'src/app/service/test.service';
import swal from 'sweetalert2';
import * as countdown from 'countdown';
import { BrowserStack } from 'protractor/built/driverProviders';
import { timer } from 'rxjs';
interface Time{
  hours: number;
  minutes: number;
  seconds: number;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @ViewChild('stepper') stepper: MatStepper;
  @ViewChild('stepperPrueba') stepperPrueba: MatStepper;
  isPushedTest = true;
  isPushedPractice = true;
  lent_test = 0;
  lent_instruccion = 0;
  lent_practice = 0;
  prueba: Prueba[];
  pregunta: Pregunta[];
  preguntaPractica: Pregunta[];
  preguntaPrueba: Pregunta[];
  respuesta: Respuesta[];
  pruebaId = sessionStorage.getItem('pruebaId');
  tipoPrueba = sessionStorage.getItem('tipoPrueba');
  selectedIndex = 0;
  evaluacionIndex = 0;
  comienzaPrueba = false;
  stepPratica = 0;
  stepPueba = 0;
  tPreguntaPrueba = true;
  tPreguntaP = true;
  pruebaIdsteet: number;
  orden: number;
  pruebasTotal: Prueba[];
  totalDePregunta = 0;
  indexPreguntaPru = 0;
  indexPregunta = 0;
  time: Time;
  totalPrueba: Prueba[];
  totalPruebaBtn: Prueba[];
  tipoPruebaABC: string;
  cantidadPra: number;
  cantidadPru: number;
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  now2: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;

  constructor(private router: Router, private testService: TestService) { }

  contador(time: number): void {
    this.now2 = new Date();
    
    var minute=this.now2.getMinutes()+time;
    var hora=this.now2.getHours()+0;
    var tiempo=this.sumarhora(hora,minute,0);
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date(this.now.getFullYear()+'-'+(this.now.getMonth()+1)+'-'+(this.now.getDate())+' '+tiempo);

      this.showDate();
    });
    /*const date = new Date();
    date.setMinutes(8);
    console.log(  (new Date(), date).toString());
    countdown(date, (ts) => {
      this.time = {
        hours: ts.hours,
        minutes: ts.minutes,
        seconds: ts.seconds
      };
    // tslint:disable-next-line: no-bitwise
    }, countdown.HOURS | countdown.MINUTES  | countdown.SECONDS);*/
  }
  showDate(){
    let distance = ((this.end - this.now)+ 1000) / 1000;
    this.day =Math.floor(distance / (3600 * 24));
    this.hours =('0' +Math.floor(distance / 3600 % 24)).slice(-2);
    this.minutes =('0' + Math.floor(distance / 60 % 60)).slice(-2);
    this.seconds = ('0' + Math.floor(distance % 60)).slice(-2);

  }
  // ar hora =1;
  //   var minutos = 20;
  //   var segundos = 181;
  sumarhora(horas,minutos,segundos) {
    horas = parseFloat(horas);
    minutos = parseFloat(minutos);
    segundos = parseFloat(segundos);
     
     
    var horas_Segundos = horas * 3600;
    var minutos_Segundos = minutos * 60;
    var segundos = segundos + minutos_Segundos + horas_Segundos;
     
     
    var hours = Math.floor( segundos / 3600 );
    var minutes = Math.floor( (segundos % 3600) / 60 );
    var seconds = segundos % 60;
     
    //Anteponiendo un 0 a los minutos si son menos de 10 
    var minutes2 = (minutes < 10 ? '0' + minutes : minutes);
     
    //Anteponiendo un 0 a los segundos si son menos de 10 
    var seconds2 = seconds < 10 ? '0' + seconds : seconds;
     
    var result = hours + ":" + minutes2 + ":" + seconds2; 
    return result; 
  }

  ngOnInit(): void {
    // sessionStorage.setItem('tipoPrueba', 'A');
    this.tipoPrueba = sessionStorage.getItem('tipoPrueba');
    //this.contador();
    const tipo = sessionStorage.getItem('tipo');
    const pruebaId = sessionStorage.getItem('pruebaId');
    const pru = pruebaId;
    this.testService.getPrueba(pru).subscribe(response => {
      console.log(response.data.data);
      this.totalPrueba = response.data.data;
      this.totalPruebaBtn = response.data.data;
      this.tipoPruebaABC = response.data.data.filter(e => e.order === this.tipoPrueba)[0].sequence;
      this.prueba = response.data.data.filter(e => e.order === this.tipoPrueba);
      const instruccionCantidad = response.data.data.filter( e => e.order === this.tipoPrueba)[0].data.INSTRUCCION.length;
      const practicaCantidad = response.data.data.filter( e => e.order === this.tipoPrueba)[0].data.TEST.length;
      this.cantidadPra = Number(instruccionCantidad) + Number(practicaCantidad);
      this.cantidadPru = response.data.data.filter( e => e.order === this.tipoPrueba)[0].data.PRACTICE.length;
    });
  }

  preguntas(prueba: number): void {
    this.pruebaIdsteet = prueba;
    const pre = {pruebaId: prueba};
    this.testService.getPregunta(pre).subscribe(data => {
      this.pregunta =  data.filter(dat => dat.preguntaTipoId === 1);
      this.pregunta.forEach(item => {
        this.testService.getRespuesta({preguntaId: item.preguntaId}).subscribe(response => {
          item.respuestas = response;
          this.totalDePregunta += response.length;
        });
      });
      this.preguntaPractica = data.filter(dat => dat.preguntaTipoId === 2);
      this.preguntaPractica.forEach(item => {
        this.testService.getRespuesta({preguntaId: item.preguntaId}).subscribe(response => {
          item.respuestas = response;
          this.totalDePregunta += response.length;
        });
      });
      this.preguntaPrueba = data.filter(dat => dat.preguntaTipoId === 3);
      this.preguntaPrueba.forEach(item => {
        this.testService.getRespuesta({preguntaId: item.preguntaId}).subscribe(response => {
          item.respuestas = response;
          this.totalDePregunta += response.length;
        });
      });
    }, err => {
      console.log('Error: ' + err);
    });
  }

  nextTab(index: number): void {
    if (index === 2){
      swal.fire({
        title: 'Mensaje Informativo',
        text: 'A continuación, hay más ejercicios como estos. Resuelvelos de la misma forma. Trabaja con la mayor rapidez y acierto que puedas. Tendras x minutos para hacer los ejercicios.',
        showCancelButton: false,
        confirmButtonColor: '#E1251B',
        confirmButtonText: 'Aceptar',
      }).then((result1) => {
        if (result1.isConfirmed) {
          this.selectedIndex = index;
          const time = this.totalPrueba[this.totalPrueba.length - 1].time;
          console.log(time);
          this.contador(Number(time));
        }
      });
    } else {
      this.selectedIndex = index;
    }
  }

  previousStepper(): void{
    this.stepper.previous();
    this.tPreguntaPrueba =  true;
    this.stepPratica--;
    this.isPushedTest = true;
  }

  nextStepper(id: number): void {
    console.log(this.prueba);
    console.log(id);
    const cantidad = this.prueba[0].data.TEST.length;
    const pruebaId = sessionStorage.getItem('pruebaId');
    if (pruebaId === '1'){
      const preCorrecta = this.prueba[0].data.TEST.filter(e => e.id === id)[0].answers
      .filter(j => j.value === '1')[0].sequence;
      const orden = this.prueba[0].data.TEST.filter(e => e.id === id)[0].sequence;
      swal.fire({
        title: 'Mensaje Informativo',
        text: 'La respuesta correcta para la pregunta N° ' + orden +  ' es la "' + preCorrecta + '"',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
      }).then((result1) => {
        if (result1.isConfirmed) {
          this.stepPratica++;
          this.comienzaPrueba = true;
          this.stepper.next();
          if (this.stepPratica <= cantidad - 2) {
            this.isPushedTest = true;
          }else{
            this.isPushedTest = false;
          }
        }
      });
    } else {
      if(this.stepPratica == 0){
        this.selectedIndex = 2;
      }
      this.stepPratica++;
      this.comienzaPrueba = true;
      this.stepper.next();
      if (this.stepPratica <= cantidad - 2) {
        this.isPushedTest = true;
      }else{
        this.isPushedTest = false;
      }
    }
  }

  radio(event): void{
    console.log(event);
    // this.resPrueba = event;
  }

  siguientePregunta(pre): void{
    const pruebaId = sessionStorage.getItem('pruebaId');
    if (pruebaId === '2'){
      if(pre.response !== ''){
        console.log(pre);
        this.testService.saveMarcado(pre.id, pre.response).subscribe(dat => {});
        const cantidad = this.prueba[0].data.PRACTICE.length;
        this.stepPueba++;
        this.stepperPrueba.next();
        if (this.stepPueba >= (cantidad - 1)){
          this.isPushedPractice = false;
        }else{
          this.isPushedPractice = true;
        }
      } else {
        swal.fire(
          '',
          'Debe Marcar una opción',
          'error'
        );
      }
    } else {
      console.log(pre);
      this.testService.saveMarcado(pre.id, pre.response).subscribe(dat => {

      });
      const cantidad = this.prueba[0].data.PRACTICE.length;
      this.stepPueba++;
      this.stepperPrueba.next();
      if (this.stepPueba >= (cantidad - 1)){
        this.isPushedPractice = false;
      }else{
        this.isPushedPractice = true;
      }
    }
  }

  atrasPregunta(): void{
    this.stepPueba--;
    this.tPreguntaP =  true;
    this.stepperPrueba.previous();
  }
  siguientePrueba(pre): void {
    const ultimo = this.totalPrueba[this.totalPrueba.length - 1].order;
    console.log(ultimo);
    console.log(this.tipoPrueba);
    if (Number(ultimo) === Number(this.tipoPrueba)){
      swal.fire({
        title: 'Mensaje Informativo',
        text: 'Felicitaciones por haber concluido la prueba',
        icon: 'question',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then((result1) => {
        if (result1.isConfirmed) {
          this.router.navigate(['/inicio']);
        }
      });
    } else {
      swal.fire({
        title: 'Mensaje Informativo',
        text: '¿Estás seguro de que deseas pasar al siguiente TEST? Al aceptar solo se tomara en cuenta aquellas preguntas que han sido marcadas y no podrás volver a registrar dicho TEST.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then((result1) => {
        if (result1.isConfirmed) {
          this.testService.saveMarcado(pre.id, pre.response).subscribe(dat => {

          });
          let contador = Number(sessionStorage.getItem('tipoPruebaCount'));
          contador = contador + 1;
          const tipoPrueba = this.get_abcd(contador);
          sessionStorage.setItem('tipoPrueba', String(contador));
          sessionStorage.setItem('tipoPruebaCount', contador.toString());
          this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(()=>{
              this.router.navigate(['/test']);
          });
          // window.location.reload();
        }
      });
    }
    
  }
  get_abcd(data) {
    const obj=[];
    obj[1]='A';  
    obj[2]='B';  
    obj[3]='C';  
    obj[4]='D';  
    obj[5]='E';  
    obj[6]='F';  
    obj[7]='G';  
    obj[8]='H';  
    obj[9]='I';  
    obj[10]='J';  
    obj[11]='K';  
    return obj[data];
  }
  sequenceOrden(id: string): string{
    console.log('entro aqui' + id);
    let sequence = id;
    if (this.pruebaId === '2') {
      switch (sequence) {
        case 'A':
          sequence = '1';
          break;
        case 'B':
          sequence = '2';
          break;
        case 'C':
          sequence = '3';
          break;
        case 'D':
          sequence = '4';
          break;
      }
      return sequence;
    }
  }

  salir(): void{
    swal.fire({
      title: 'Mensaje Informativo',
      text: '¿Estás seguro de que deseas salir de la PRUEBA? Al aceptar solo se tomara en cuenta aquellas preguntas que han sido marcadas y no podrás volver a registrar dicha PRUEBA.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result1) => {
      if (result1.isConfirmed) {
        this.router.navigate(['/inicio']);
        // window.location.reload();
      }
    });
  }
}
