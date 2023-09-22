import { Injectable, signal } from '@angular/core';
import { ITodo } from './itodo';

@Injectable({
  providedIn: 'root'
})


export class TodoService {

  _todos = signal([
    { todo: "shopping", done: false },
    { todo: "running", done: false },
    { todo: "eating", done: false },
  ]);

  constructor() { }


  get getTodos(): ITodo[] {
    return this._todos();
  };

  addToDo(todo: ITodo){
    let _currentToDos = this.getTodos;
    _currentToDos = [..._currentToDos, todo];
    this._todos.set(_currentToDos);
  }

  removeToDo(todoToRemove: ITodo){
    let _currentToDos = this.getTodos;
    _currentToDos = _currentToDos.filter(todo => todo.todo !== todoToRemove.todo);
    this._todos.set(_currentToDos);
  }

  toggleCompleted(todoToChange: ITodo){
    let _currentToDos = this.getTodos;
    todoToChange.done = !todoToChange.done;
    _currentToDos = _currentToDos.map(todo => {
      if(todo.todo === todoToChange.todo){
        return todoToChange;
      }
      return todo;
    })
    this._todos.set(_currentToDos);
  }

}


