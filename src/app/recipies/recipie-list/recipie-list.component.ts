import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {
  recipies:Recipie[] = [
    new Recipie('Testing Recipie', 'Just a simply test', 'https://snappygoat.com/b/8aeb0835d905c355fe8b623b012cdce231b44eb1'),
    new Recipie('Testing Recipie', 'Just a simply test', 'https://snappygoat.com/b/8aeb0835d905c355fe8b623b012cdce231b44eb1')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
