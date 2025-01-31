import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workout-list.component.html',
})
export class WorkoutListComponent implements OnInit {
  users: User[] = [];
  filteredWorkouts: Workout[] = [];

  ngOnInit() {
    this.loadData();
  }

  // Load data from localStorage
  loadData() {
    const data = localStorage.getItem('userData');
    if (data) {
      this.users = JSON.parse(data);
    }
    this.filteredWorkouts = this.getAllWorkouts();
  }

  // Get all workouts
  getAllWorkouts(): Workout[] {
    return this.users.flatMap(user => user.workouts);
  }

  // Filter workouts
  filterWorkout(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.filteredWorkouts = selectedValue
      ? this.getAllWorkouts().filter(workout => workout.type === selectedValue)
      : this.getAllWorkouts();
  }

  // Refresh the workout list when a new workout is added
  refreshWorkouts() {
    this.loadData();
  }
}
