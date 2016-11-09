import {Component} from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent { 
    title: string;
    todos: string[];
    
    constructor() {
        this.title = "Angular2do";
        this.todos = [];
    }

    addTodo(input: HTMLInputElement) {
        let title = input.value;
        input.value = "";
        console.log('Добавить задачи: ' + title);
        this.todos.push(title);
    }
}
