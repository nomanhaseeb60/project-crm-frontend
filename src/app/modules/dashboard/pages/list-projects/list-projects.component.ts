import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectList } from 'src/app/core/mocks/project-list';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css']
})
export class ListProjectsComponent implements AfterViewInit {


  ELEMENT_DATA: ProjectList[] = ProjectList.projects;
  displayedColumns: string[] = ['position', 'name', 'weight', 'details'];
  dataSource = new MatTableDataSource<ProjectList>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


