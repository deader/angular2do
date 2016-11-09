import { Component } from '@angular/core';
import { todoListComponent } from './todo/todo-list.component';
import { Todo } from './todo/todo';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [todoListComponent]
})
export class AppComponent { 
    title: string;
    todos: Todo[];
    
    constructor() {
        this.title = "Angular2do";
        this.todos = [];
    }

    addTodo(title: string) {
        this.todos.push(new Todo(title));
    }
}
