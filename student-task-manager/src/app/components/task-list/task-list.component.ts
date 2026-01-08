// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-list',
//   imports: [],
//   templateUrl: './task-list.component.html',
//   styleUrl: './task-list.component.css'
// })
// export class TaskListComponent {

// }
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: any[] = [];
}
