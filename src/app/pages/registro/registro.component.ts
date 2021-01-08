import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import swal from 'sweetalert2';
import { RegistroService } from 'src/app/service/registro.service';
import { Registro } from 'src/app/model/registro.model';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public registro: Registro;
  @Input()  public ruta_imgdefaul:string;
  validaFormulario = false;
  submitted = false;
  documents = [];
  genders = [];
  countries = [];
  levels = [];
  regions = [];
  provincia = [];
  distritos = [];
  disabilities = [];
  parameters: any;
  file_type= false;
  
  public file_size: number ;
  public filesToUpload:Array<File>;
  traeApi = true;
  formRegistro = this.formBuilder.group({
    tipoDocForm: ['0', Validators.required],
    documentoForm: ['0', Validators.required],
    fechaForm: [{value: '',disabled: this.traeApi}, Validators.required],
    nombreForm: [{value: '',disabled: this.traeApi}, Validators.required],
    apepaForm: [{value: '',disabled: this.traeApi}],
    apemaForm: [{value: '',disabled: this.traeApi}],
    generoForm:[{value: '0',disabled: this.traeApi}, Validators.required],
    nacimientoForm: ['', Validators.required],
    gradoForm: ['', Validators.required],
    paisForm: ['', Validators.required],
    regionForm: ['', Validators.required],
    provinciaForm: ['', Validators.required],
    distritoForm: ['', Validators.required],
    discapacidadForm: ['2', Validators.required],
    tipoDiscapacidadForm: [{value: '', disabled: true}],
    institucionForm: ['', Validators.required],
    celularForm: ['', Validators.required],
    correoForm: ['', Validators.required],
    confiCorreoForm: ['', Validators.required],
    terminosForm: ['', Validators.required],
  });
  correoForm2 = new FormControl('', [Validators.required, Validators.email]);
  confiCorreoForm2 = new FormControl('', [Validators.required, Validators.email]);
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RegistroComponent>,
    public  registroServer: RegistroService
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { 
    this.ruta_imgdefaul='assets/images/usuario.png';
    this.registro=new Registro() ;
    this.traeApi = true ;
    this.registro.documentType=0
    this.registro.gender=0
    this.registro.geocode=0
    this.registro.country=0
    
  }

  ngOnInit(): void {
    this.ParametersRegister();
  }
  getErrorMessagecorreoForm() {
    return this.correoForm2.hasError('email') ? 'Correo Electrónico no valido' : '';
  }
  getErrorMessageconfiCorreoForm() {
    return this.confiCorreoForm2.hasError('email') ? 'Correo Electrónico no valido' : '';
  }
  onSubmit(form : FormGroup) {
     
    this.submitted = true;
    if (form.invalid) {
      return;
    }
    if(this.correoForm2.hasError('email')==true){
    return this.correoForm2.hasError('email') ? 'Correo Electrónico no valido' : '';
    }
    if(this.confiCorreoForm2.hasError('email')==true){
      return this.confiCorreoForm2.hasError('email') ? 'Correo Electrónico no valido' : '';
    }

    if(this.registro.email!=this.formRegistro.get('confiCorreoForm').value){
      swal.fire(
        '',
        'El correo electrónico y el confirmar correo electrónico deben ser iguales',
        'question'
      );
      return false;
    } 
    if(this.registro.motherLastName===undefined && this.registro.fatherLastName===undefined){
      swal.fire(
        '',
        'Se debe ingresar como mínimo un apellido',
        'question'
      );
      return false;
    }
    /*if(this.ruta_imgdefaul=='assets/images/usuario.png'){
      swal.fire(
        '',
        'Falta subir foto',
        'question'
      );
      return false;
    } */
    
    swal.fire({
      title: 'Mensaje de confirmación',
      text: '¿Estas seguro de que tus datos ingresados estan correctos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
       
        this.registro.birthdayDate=this.setDate(this.formRegistro.get('fechaForm').value);
        this.registroServer.guardarRegistroUser(this.registro).subscribe(data => {

        swal.fire({
          title: 'Estimado Usuario',
          text: 'Se completo el proceso de registro exitosmente, La contraseña fue enviada a su correo electrónico',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar',
        }).then((result1) => {
          if (result1.isConfirmed) {

            this.dialogRef.close();
          }
        });
        }, err => {
          swal.fire(
            '',
            err.error.error.message,
            'error'
          );
          console.log(err);
        })
      }
    });
  }
  enviarCorreo(data:{}){
    this.registroServer.envioCorreoUser(data).subscribe(data => {})
  }

  fileChangeEvent(fileInput:any){
    /*if(this.file_type==false){
      swal.fire(
        '',
        'La foto debe tener formato JPG, PNG',
        'question'
      );
      return false;
    }*/
    /*if(this.file_size>100){
      swal.fire(
        '',
        'Foto supera los 100 KB?',
        'question'
      );
      return false;
    }*/
    var rut2='';
    var file = fileInput.target.files[0];
    
    this.file_size=file.size/1024;
    if(file.type=='image/jpeg'){
      this.file_type=true;
    }else if(file.type=='image/png'){
      this.file_type=true;
    }else {
      swal.fire(
        '',
        'La foto debe tener formato JPG, PNG',
        'error'
      );
      return false;
    }
    if(this.file_size>100){
      swal.fire(
        '',
        'Foto supera los 100 KB?',
        'error'
      );
      return false;
    }
    var reader = new FileReader();
    reader.onloadend = (e)=> {
      let base64data =reader.result
      this.ruta_imgdefaul=base64data as string ;
    }
    reader.readAsDataURL(file);
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }
  ParametersRegister(){
    this.registroServer.getParametersRegister().subscribe(data => {
      this.parameters = data;
      this.disabilities = data.disabilities;
      this.regions = data.regions;
      this.levels = data.levels;
      this.documents = data.documents;
      this.genders = data.genders;
      this.countries = data.countries;
    })

  }
  change_radio_states(valor){

    if(valor=='NO'){
      this.formRegistro.get('tipoDiscapacidadForm').disable();

    }else{
      this.formRegistro.get('tipoDiscapacidadForm').enable();
    }
  }
  buscarDocumento() {
    var tipo='DNI'
    if(this.registro.documentType==1){
      tipo='DNI'
    }else if(this.registro.documentType==2){
      tipo=''
    }else{
      tipo=''
    }
    console.log(this.formRegistro.get('generoForm'))
    if(tipo!=''){
      if(tipo=='DNI'){
        if(this.registro.documentNumber.length>=9){
          this.traeApi = false;
          this.formRegistro.get('nombreForm').enable();
          this.formRegistro.get('apepaForm').enable();
          this.formRegistro.get('apemaForm').enable();
          this.formRegistro.get('generoForm').enable();
          this.formRegistro.get('fechaForm').enable();
          return false;
        }
      }
      console.log(this.formRegistro.get('generoForm'))
      this.registroServer.getBusquedaXDNI('DNI',this.registro.documentNumber).subscribe(data => {
        // var persona  =data.persona;
          this.traeApi=true;
          this.registro.motherLastName=data.data.apellidoMaterno;
          this.registro.fatherLastName=data.data.apellidoPaterno;
          this.registro.name=data.data.nombres;
          this.formRegistro.get('nombreForm').disable();
          this.formRegistro.get('apepaForm').disable();
          this.formRegistro.get('apemaForm').disable();
          this.formRegistro.get('generoForm').enable();
          this.formRegistro.get('fechaForm').enable();
      });
      Validators.email
    }else{
      this.traeApi = false;
      this.formRegistro.get('nombreForm').enable();
      this.formRegistro.get('apepaForm').enable();
      this.formRegistro.get('apemaForm').enable();
      this.formRegistro.get('generoForm').enable();
      this.formRegistro.get('fechaForm').enable();
    }
  }
  cancelar(): any {
    swal.fire({
      title: 'Mensaje de confirmación',
      text: '¿Estas seguro de que desea cancelar el registro? Al finalizarlo no se guardará ninguna información.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.dialogRef.close();
      }
    });
  }
  setDate(fec) {
    if (fec == '') {
        return '00/00/2020';
    }
    var sep = '';

    if (fec && fec.indexOf('/') != -1) {
        sep = '/';
    } else if (fec && fec.indexOf('-') != -1) {
        sep = '-';
    } else {
        return '02/06/1996';
    }

    var fcs = fec.split(sep);

    if (fcs[2].length == 4) {
        return fcs[2] + '-' + fcs[1] + '-' + fcs[0];
    } else if (fcs[0].length == 4) {
        return fcs[2] + '/' + fcs[1] + '/' + fcs[0];
    } else {
        return '02/06/1996';
    }
}
  traeProvincia(): void{
    const region = Number(this.formRegistro.get('regionForm').value);
    this.provincia = this.parameters.regions.filter(e => Number(e.id) === region)[0].provinces;
  }

  traeDistrito(): void{
    const region = Number(this.formRegistro.get('regionForm').value);
    const provincia = Number(this.formRegistro.get('provinciaForm').value);
    this.distritos = this.parameters.regions
      .filter(e => Number(e.id) === region)[0].provinces
      .filter(i => Number(i.id) === provincia)[0].districts;
  }
}

