import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosContainerComponent } from './todos-container.component';
import { By } from '@angular/platform-browser';

import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodosContainerComponent', () => {
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosContainerComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(TodosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have title Enter your todo item below:', () => {
    const { debugElement} = fixture;
    const titleElement = debugElement.query(By.css('[data-testid= "title"]'))
    expect(titleElement.nativeElement.textContent).toBe("Enter your todo item below: ")
  })

  it('Should have child todo form child component', ()=>{
    const { debugElement } = fixture;
    const formTag = debugElement.query(By.css('app-todos-form'))
    expect(formTag).toBeTruthy()
  })


  it('Should have child todo table child component', ()=>{
    const { debugElement } = fixture;
    const toDoTable = debugElement.query(By.css('app-todos-table'))
    expect(toDoTable).toBeTruthy()
  })
});
