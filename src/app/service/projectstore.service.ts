import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectstoreService {
  private projectSource = new BehaviorSubject([]);
  currentProject = this.projectSource.asObservable();

  storeKey = 'project_store';


  constructor() {
    const currentVal = localStorage.getItem(this.storeKey);
    if (currentVal) {
      this.projectSource.next(JSON.parse(currentVal));
    } else {
      this.projectSource.next([]);
    }
  }

  getLastId() {
    return +localStorage.getItem(this.storeKey + "_id") || 0;
  }

  addProject(title) {

    const id = this.getLastId() + 1;
    let temp = this.projectSource.getValue();
    console.log(temp);
    temp.push({ id, title });
    this.projectSource.next(temp);
    this.write();
    localStorage.setItem(this.storeKey + "_id", id.toString());
  }

  deleteProject(id) {
    let temp = this.projectSource.getValue();
    temp = temp.filter(project => project.id != id);
    this.projectSource.next(temp);
    this.write();
  }

  editProject(id, title) {
    let temp = this.projectSource.getValue();
    temp.forEach(project => {
      if (project.id == id) {
        project.title = title;
      }
    });
    this.projectSource.next(temp);
    this.write();

  }

  write() {
    localStorage.setItem(this.storeKey, JSON.stringify(this.projectSource.getValue()))
  }
}
