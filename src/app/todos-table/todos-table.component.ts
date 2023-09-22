import { Component, inject } from '@angular/core';
import { TodoService }       from '../todo.service';
import { ITodo }             from '../itodo';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.css']
})
export class TodosTableComponent  {
  _todoService = inject(TodoService);
  

  toggleToDo(todo:ITodo){
    this._todoService.toggleCompleted(todo);
  }

  delete(todo:ITodo):void{
    this._todoService.removeToDo(todo);
  }

}
