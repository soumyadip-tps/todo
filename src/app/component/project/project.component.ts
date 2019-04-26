import { Component, OnInit } from '@angular/core';
import { ProjectstoreService } from 'src/app/service/projectstore.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projList = [];
  editFlag: boolean = false;

  todovalue: any = null;
  constructor(private projectStore: ProjectstoreService) { }

  onClick() {
    console.log(this.todovalue);
    if(this.todovalue){
      this.projectStore.addProject(this.todovalue);
    }
    this.todovalue = '';
  }

  del(id) {
    this.projectStore.deleteProject(id);
  }

  edi(id, oldtitle) {
    const title = prompt("Edit Name",oldtitle );
    if (title) {
      this.projectStore.editProject(id, title);
    }

  }

  ngOnInit() {
    this.projectStore.currentProject.subscribe(proj => this.projList = proj);
  }

}
