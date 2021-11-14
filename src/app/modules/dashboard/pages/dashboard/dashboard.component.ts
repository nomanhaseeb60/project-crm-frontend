import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectList } from 'src/app/core/mocks/project-list';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ELEMENT_DATA: ProjectList[] = ProjectList.projects;
  displayedColumns: string[] = ['position', 'name', 'weight', 'details'];
  dataSource = new MatTableDataSource<ProjectList>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() { }

  ngOnInit(): void {
  }

}
