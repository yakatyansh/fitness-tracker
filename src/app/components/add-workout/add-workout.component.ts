import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Workout {
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
  imports: [CommonModule,FormsModule],
  templateUrl: './add-workout.component.html',
})
export class AddWorkoutComponent {
  users: User[] = [];

  selectedUserId: number | null = null;
  selectedWorkoutType: string = '';
  workoutMinutes: number | null = null;

  // Emit event when a workout is added
  @Output() workoutAdded = new EventEmitter<void>();

  constructor() {
    this.loadUsers();
  }

  // Load users from localStorage
  loadUsers() {
    const data = localStorage.getItem('userData');
    if (data) {
      this.users = JSON.parse(data);
    }
  }

  // Add workout and update localStorage
  addWorkout() {
    if (this.selectedUserId === null || !this.selectedWorkoutType || this.workoutMinutes === null) {
      alert('Please fill all fields!');
      return;
    }

    const user = this.users.find(u => u.id === this.selectedUserId);
    if (user) {
      user.workouts.push({
        type: this.selectedWorkoutType,
        minutes: this.workoutMinutes,
      });

      localStorage.setItem('userData', JSON.stringify(this.users)); // Save to localStorage
      this.workoutAdded.emit(); // Notify WorkoutListComponent

      alert('Workout added successfully!');
      this.resetForm();
    }
  }

  // Reset form fields after adding a workout
  resetForm() {
    this.selectedUserId = null;
    this.selectedWorkoutType = '';
    this.workoutMinutes = null;
  }
}
