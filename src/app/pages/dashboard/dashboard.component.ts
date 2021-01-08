import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RegistroService } from 'src/app/service/registro.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit  {
  showFiller = false;
  displayedColumns: string[] = ['position', 'test', 'fecha', 'documento', 'name', 'region', 'ver'];
  displayedColumnsTest: string[] = ['position', 'test', 'total'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSourceTest = new MatTableDataSource<FiltroTest>(ELEMENT_DATA_TEST);
  typeFilter = '1';
  regions = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(public  registroServer: RegistroService) { }

  ngAfterViewInit(): void {
    this.typeFilter = '1';
    //this.drawer.toggle();
    this.dataSource.paginator = this.paginator;
    this.parametersRegister()
  }

  parametersRegister(){
    this.registroServer.getParametersRegister().subscribe(data => {
      this.regions = data.regions;
    })

  }

}


export interface PeriodicElement {
  position: number;
  test: string;
  fecha: string;
  documento: string;
  name: string;
  region: string;
  ver: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, test: 'PHB', fecha: '05/12/2020', documento: '47905746', name: 'Gian carlos solis linares', region: 'Lima', ver: ''},
  {position: 2, test: 'TEPE', fecha: '11/12/2020', documento: '68534582', name: 'Brian Quispe', region: 'Lima', ver: ''},
  {position: 3, test: 'IEPPO', fecha: '01/12/2020', documento: '42539685', name: 'Maria Fernandez', region: 'Lima', ver: ''},
];

export interface FiltroTest {
  position: number;
  test: string;
  total: string;
}

const ELEMENT_DATA_TEST: FiltroTest[] = [
  {position: 1, test: 'PHB', total: '352'},
  {position: 2, test: 'TEPE', total: '352'},
  {position: 3, test: 'IEPPO', total: '352'},
];
