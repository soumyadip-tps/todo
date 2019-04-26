import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListstoreService } from 'src/app/service/liststore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  proj_id = null;
  lists = null;
  todovalue = null;

  constructor(private activatedRoute: ActivatedRoute, private listStoreService: ListstoreService) { }

  onClick() {
    console.log(this.todovalue);
    if(this.todovalue){
      this.listStoreService.addList(this.todovalue, this.proj_id);
    }
    this.todovalue = '';
  }

  del(id) {
    this.listStoreService.deleteList(id);
  }

  edi(id) {
    const title = prompt("Edit Name");
    if (title) {
      this.listStoreService.editList(id, title);
    }

  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.proj_id = +params.id;
    });

    this.listStoreService.currentList.subscribe(lists => {
      this.lists = lists.filter(list => list.proj_id === this.proj_id);
    });
  }

}
