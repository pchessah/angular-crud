import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../todo.service';
import { ITodo } from '../itodo';

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent {

   _todoService = inject(TodoService);

  todos = this._todoService._todos()

  todoForm = new FormGroup({
    todo: new FormControl("")
  })

  submit(){
    if(!!this.todoForm.value){
      const todoToAdd:ITodo = { todo:this.todoForm.value.todo as string, done: false };
      this._todoService.addToDo(todoToAdd);
      this.todoForm.controls["todo"].setValue("");
    }

    
  }

}
