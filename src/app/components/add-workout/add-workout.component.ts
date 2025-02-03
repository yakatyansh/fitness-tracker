import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

interface Workout {
  user: string;
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-add-workout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './add-workout.component.html',
})
export class AddWorkoutComponent {
  users: User[] = [];
  selectedWorkoutType: string = '';
  workoutMinutes: number = 0;
  UserName: string = '';

  @Output() workoutAdded = new EventEmitter<void>();

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    if (typeof window !== 'undefined') {
      const users = localStorage.getItem('users');
      this.users = users ? JSON.parse(users) : [];
    }
  }
  

  addUser() {
    if (this.UserName === "" || !this.selectedWorkoutType || this.workoutMinutes === 0) {
      alert('Please fill all fields!');
      return;
    }

    const newUser: User = {
      id: Date.now(),
      name: this.UserName,
      workouts: [{
        user: this.UserName,
        type: this.selectedWorkoutType,
        minutes: this.workoutMinutes,
      }],
    };

    this.users.push(newUser);
    localStorage.setItem('userData', JSON.stringify(this.users));
    alert('User added successfully!');
  }

  addWorkoutToExistingUser() {
    const user = this.users.find(u => u.name === this.UserName);
    if (user) {
      user.workouts.push({
        user: this.UserName,
        type: this.selectedWorkoutType,
        minutes: this.workoutMinutes,
      });
      localStorage.setItem('userData', JSON.stringify(this.users));
      alert('Workout added to existing user!');
    } else {
      alert('User not found!');
    }
  }
}
