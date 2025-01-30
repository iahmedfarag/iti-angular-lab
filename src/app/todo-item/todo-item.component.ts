import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoType } from '../types/todo-type';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todoItem!: TodoType;
  @Output() handleDeleteOutput = new EventEmitter<number>();
  @Output() toggleStatusOutput = new EventEmitter<number>();

  handleDelete = (id: number) => {
    this.handleDeleteOutput.emit(id);
  };

  toggleTodoStatus = (id: number) => {
    this.toggleStatusOutput.emit(id);
  };
}
