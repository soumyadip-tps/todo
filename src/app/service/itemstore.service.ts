import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemstoreService {



  private itemSource = new BehaviorSubject([]);
  currentItem = this.itemSource.asObservable();

  storeKey = 'item_store';


  constructor() {
    const currentVal = localStorage.getItem(this.storeKey);
    if(currentVal){
      this.itemSource.next(JSON.parse(currentVal));
    }
    else{
      this.itemSource.next([]);
    }
   }

   getLastId() {
    return +localStorage.getItem(this.storeKey + "_id") || 0;
  }

  addItem(title, list_id) {
    const id = this.getLastId() + 1;
    let temp = this.itemSource.getValue();
    console.log(temp);
    temp.push({ id, title, list_id, status: false, priority: 'low' });
    this.itemSource.next(temp);
    this.write();
    localStorage.setItem(this.storeKey + "_id", id.toString());
  }

  deleteItem(id) {
    let temp = this.itemSource.getValue();
    temp = temp.filter(item => item.id != id);
    this.itemSource.next(temp);
    this.write();
  }

  editItem(id, title) {
    let temp = this.itemSource.getValue();
    temp.forEach(item => {
      if (item.id == id) {
        item.title = title;
      }
    });
    this.itemSource.next(temp);
    this.write();

  }
  changePriority(id, priority) {
    let temp = this.itemSource.getValue();
    temp.forEach(item => {
      if (item.id == id) {
        item.priority = priority;
      }
    });
    this.itemSource.next(temp);
    this.write();

  }
  changeStatus(id, status) {
    let temp = this.itemSource.getValue();
    temp.forEach(item => {
      if (item.id == id) {
        item.status = status;
      }
    });
    this.itemSource.next(temp);
    this.write();

  }

   write(){
    localStorage.setItem(this.storeKey, JSON.stringify(this.itemSource.getValue()))
   }

}
