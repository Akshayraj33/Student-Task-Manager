// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-task-form',
//   imports: [],
//   templateUrl: './task-form.component.html',
//   styleUrl: './task-form.component.css'
// })
// export class TaskFormComponent {

// }
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskName = '';
  dueDate: string = '';
  showForm = false;

  @Output() taskCreated = new EventEmitter<any>();

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitTask() {
    if (this.taskName && this.dueDate) {
      const newTask = {
        taskName: this.taskName,
        dueDate: this.dueDate,
        status: 'pending'
      };

      this.taskCreated.emit(newTask);
      this.taskName = '';
      this.dueDate = '';
      this.showForm = false;
    }
  }
}
