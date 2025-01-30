import { Component } from '@angular/core';
import { TodoType } from '../types/todo-type';
import { FormsModule } from '@angular/forms';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-todos-list',
  imports: [FormsModule, TodoItemComponent, HeaderComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
})
export class TodosListComponent {
  todos: TodoType[] = [
    {
      id: 1,
      title: 'todo-1',
      completed: false,
    },
    {
      id: 2,
      title: 'todo-2',
      completed: true,
    },
    {
      id: 3,
      title: 'todo-3',
      completed: false,
    },
  ];

  newTodoTitle: string = '';
  newTodoValid: boolean = false;

  handleReset = () => {
    this.newTodoTitle = '';
  };

  handleDelete = (id: number) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  handleInput = () => {
    if (this.newTodoTitle.trim().length >= 3) {
      this.newTodoValid = true;
    } else {
      this.newTodoValid = false;
    }
  };

  handleAdd = () => {
    const maxId =
      this.todos.length > 0
        ? Math.max(...this.todos.map((todo) => todo.id))
        : 0;
    const newTodo = {
      id: maxId + 1,
      title: this.newTodoTitle,
      completed: false,
    };
    this.todos.push(newTodo);
    this.handleReset();
  };

  toggleTodoStatus = (id: number) => {
    const theTodo = this.todos.find((todo) => todo.id === id);
    if (theTodo) {
      theTodo.completed = !theTodo.completed;
      return;
    }
    throw Error(`TODO with id: ${id} Not Found`);
  };
}
