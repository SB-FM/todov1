import { TodoItemComponent } from './../todo-item/todo-item.component';
import { TodoStore } from './../store/todoStore';
import { ITodoItem } from './../store/ITodoItem';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']

})
export class TodolistComponent implements OnInit {
  newItem = 'test';
  store: TodoStore;


  addItem() {
    this.store.addItem(this.newItem);
    this.newItem = '';
}

  constructor(store: TodoStore) {
    this.store = store;
  }

  ngOnInit() {
  }

  removeItem(item: ITodoItem) {
    this.store.removeItem(item);
}
  doneItem(item: ITodoItem) {
    this.store.doneItem(item);
}

}
