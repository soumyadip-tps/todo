import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemstoreService } from 'src/app/service/itemstore.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  type = "all";
  list_id = null;
  items = null;
  todovalue = null;
  constructor(private activatedRoute: ActivatedRoute, private itemStoreService: ItemstoreService) { }

  onClick() {
    console.log(this.todovalue);
    if(this.todovalue){
      this.itemStoreService.addItem(this.todovalue, this.list_id);
    }
    this.todovalue = '';
  }

  del(id) {
    this.itemStoreService.deleteItem(id);
  }

  edi(id) {
    const title = prompt("Edit Name");
    if (title) {
      this.itemStoreService.editItem(id, title);
    }

  }

  changePriority(id, priority){

    this.itemStoreService.changePriority(id, priority);
  }
  changeTask(id, status){

    this.itemStoreService.changeStatus(id, status);

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.list_id = +params.id;
    });

    this.itemStoreService.currentItem.subscribe(items => {
      this.items = items.filter(item => item.list_id === this.list_id);
    });
  }

}
