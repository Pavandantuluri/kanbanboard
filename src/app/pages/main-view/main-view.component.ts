import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';



@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent {
  board: Board = new Board('Test Board', [
    new Column('To Do', [
      'Design Screen3',
      'Design Screen4',
      'Design Screen5',
    ]),
    //new Column('Research', ['Lorem Ipsum', 'Foo', 'Foo 2']),
    new Column('Implementing', [
      'style for Screen3',
      'basic template for screen 3',
      'style for Screen 4',
      'basic template for screen4',
    ]),
    new Column('Done', [
      'Design Screen 1',
      'Design Screen 2',
      'Implemention for screen1 ',
      'Implementation screen 2',
    ]),
  ]);

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}