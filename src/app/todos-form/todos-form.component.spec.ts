import { ComponentFixture, TestBed }        from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By }                               from '@angular/platform-browser';
import { TodosFormComponent }               from './todos-form.component';
import { TodoService }                      from '../todo.service';


fdescribe('TodosFormComponent', () => {
  let fixture: ComponentFixture<TodosFormComponent>;
  let component: TodosFormComponent
  let fakeToDoService:TodoService;

  beforeEach(async() => {

    fakeToDoService = jasmine.createSpyObj<TodoService>( 'TodoService',  {
      addToDo:undefined,
      _todos:undefined,
      getTodos: [
        { todo: "shopping", done: false },
        { todo: "running", done: false },
        { todo: "eating", done: false },
      ],
      removeToDo:undefined,
      toggleCompleted:undefined
    })

    await TestBed.configureTestingModule({
      declarations: [TodosFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: TodoService, useValue:fakeToDoService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TodosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("Should clear the form after you click submit", () => {
    const submitBtn = fixture.debugElement.query(By.css('button[type="submit"]'));
    submitBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    const inputField = fixture.debugElement.query(By.css('input'))
    expect(inputField.nativeElement.value).toBe("");
  })

  it("Should call service function to add a todo ", () => {
    const submitBtn = fixture.debugElement.query(By.css('button[type="submit"]'));
    submitBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(fakeToDoService.addToDo).toHaveBeenCalled();
  })
});
