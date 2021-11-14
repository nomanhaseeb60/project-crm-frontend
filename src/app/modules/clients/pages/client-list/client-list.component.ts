import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersList } from 'src/app/core/mocks/customers-list';
import { ProjectList } from 'src/app/core/mocks/project-list';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit,AfterViewInit {

  ELEMENT_DATA: ProjectList[] = CustomersList.customers;
  displayedColumns: string[] = ['name', 'surname', 'companyName', 'email','details'];
  dataSource = new MatTableDataSource<CustomersList>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
