import { Component } from '@angular/core';
import { todoListComponent } from './todo/todo-list.component'

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    directives: [todoListComponent]
})
export class AppComponent { 
    title: string;
    todos: string[];
    
    constructor() {
        this.title = "Angular2do";
        this.todos = [];
    }

    addTodo(title: string) {
        this.todos.push(title);
       // let title = input.value;
       // input.value = "";
       // console.log('Добавить задачи: ' + title);
       // this.todos.push(title);
    }
}
