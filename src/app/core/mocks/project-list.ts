import { Project } from "src/app/shared/models/project";

export class ProjectList {
  public static projects: Project[] = [
    {projectId: 1, name: 'Hydrogen', estimatedCost: 1.0079, id: 0},
    {projectId: 2, name: 'Helium', estimatedCost: 4.0026, id: 1},
    {projectId: 3, name: 'Lithium', estimatedCost: 6.941, id: 2},
    {projectId: 4, name: 'Beryllium', estimatedCost: 9.0122, id: 3},
    {projectId: 5, name: 'Boron', estimatedCost: 10.811, id: 4},
    {projectId: 6, name: 'Carbon', estimatedCost: 12.0107, id: 5},
    {projectId: 7, name: 'Nitrogen', estimatedCost: 14.0067, id: 6},
    {projectId: 8, name: 'Oxygen', estimatedCost: 15.9994, id: 7},
  ];
}
