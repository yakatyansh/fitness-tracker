import { Component, OnInit } from '@angular/core';
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
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './workout-list.component.html',
})
export class WorkoutListComponent implements OnInit {
  users: User[] = [];
  filteredWorkouts: Workout[] = [];
  filteredName: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 5; // Default items per page
  paginatedWorkouts: Workout[] = [];

  ngOnInit() {
    this.loadUsers();
    this.filteredWorkouts = this.getAllWorkouts();
    this.paginate();
  }

  loadUsers() {
    const storedUsers = localStorage.getItem('userData');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }

  getAllWorkouts(): Workout[] {
    return this.users.flatMap(user => user.workouts);
  }

  filterWorkout(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.filteredWorkouts = selectedValue
      ? this.getAllWorkouts().filter(workout => workout.type === selectedValue)
      : this.getAllWorkouts();
    this.paginate();
  }

  filterByUser() {
    if (this.filteredName) {
      this.filteredWorkouts = this.getAllWorkouts().filter(workout =>
        workout.user.toLowerCase().includes(this.filteredName.toLowerCase())
      );
    } else {
      this.filteredWorkouts = this.getAllWorkouts();
    }
    this.paginate();
  }

  paginate() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedWorkouts = this.filteredWorkouts.slice(startIndex, endIndex);
  }

  nextPage() {
    this.currentPage++;
    this.paginate();
  }

  prevPage() {
    this.currentPage--;
    this.paginate();
  }
}
