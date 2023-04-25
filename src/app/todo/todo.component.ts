import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todo = {
    id: null,
    title: '',
    nbr: null
  };
  constructor() {}

  onSubmit() {
    console.log('les coordonnes sont valides');
  }

}
