import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListstoreService {

  private listSource = new BehaviorSubject([]);
  currentList = this.listSource.asObservable();

  storeKey = 'list_store';


  constructor() {
    const currentVal = localStorage.getItem(this.storeKey);
    if (currentVal) {
      this.listSource.next(JSON.parse(currentVal));
    } else {
      this.listSource.next([]);
    }
  }

  getLastId() {
    return +localStorage.getItem(this.storeKey + "_id") || 0;
  }

  addList(title, proj_id) {
    const id = this.getLastId() + 1;
    let temp = this.listSource.getValue();
    console.log(temp);
    temp.push({ id, title, proj_id });
    this.listSource.next(temp);
    this.write();
    localStorage.setItem(this.storeKey + "_id", id.toString());
  }

  deleteList(id) {
    let temp = this.listSource.getValue();
    temp = temp.filter(list => list.id != id);
    this.listSource.next(temp);
    this.write();
  }

  editList(id, title) {
    let temp = this.listSource.getValue();
    temp.forEach(list => {
      if (list.id == id) {
        list.title = title;
      }
    });
    this.listSource.next(temp);
    this.write();

  }

  write() {
    localStorage.setItem(this.storeKey, JSON.stringify(this.listSource.getValue()))
  }

}
