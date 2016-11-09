import { Component, Input } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: './app/todo/todo-list.component.html'
})

export class todoListComponent{
    @Input() todos: string[];
}