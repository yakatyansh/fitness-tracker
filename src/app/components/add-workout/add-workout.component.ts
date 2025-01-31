import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  imports: [CommonModule,FormsModule],
  templateUrl: './add-workout.component.html',
})
export class AddWorkoutComponent {
  users: User[] = [];
  workouts: Workout[] = [];

  selectedUserId: number | null = null;
  selectedWorkoutType: string = '';
  workoutMinutes: number | null = null;
  UserName: string = '';

  @Output() workoutAdded = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const storedWorkouts = localStorage.getItem('workouts');
      this.workouts = storedWorkouts ? JSON.parse(storedWorkouts) : [];
    }
  }

  loadUsers() {
    const data = localStorage.getItem('userData');
    if (data) {
      this.users = JSON.parse(data);
    }
  }

  addWorkout() {
    if (this.UserName === "" || !this.selectedWorkoutType || this.workoutMinutes === null) {
      alert('Please fill all fields!');
      return;
    }

    const user = this.users.find(u => u.id === this.selectedUserId);
    if (user) {
      user.workouts.push({
        user: this.UserName,
        type: this.selectedWorkoutType,
        minutes: this.workoutMinutes,
      });

      localStorage.setItem('userData', JSON.stringify(this.users)); 
      this.workoutAdded.emit(); 

      alert('Workout added successfully!');
      this.resetForm();
    }
  }

  resetForm() {
    this.UserName = '';
    this.selectedWorkoutType = '';
    this.workoutMinutes = null;
  }
}
