import { ITodoItem } from './../store/ITodoItem';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() item: ITodoItem;
  @Output() done = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeClicked() {
    console.log('remove clicked: ' + this.item);
    this.remove.emit(this.item);
  }
  doneClicked() {
    console.log('done clicked: ' + this.item);
    this.done.emit(this.item);
  }

}
