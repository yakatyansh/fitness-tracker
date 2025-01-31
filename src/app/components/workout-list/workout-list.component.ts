import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Import FormsModule for ngModel
  templateUrl: './workout-list.component.html',
})
export class WorkoutListComponent {
  searchTerm: string = ''; // This binds to ngModel
  workoutTypeFilter: string = '';

  workouts = [
    { UserName: 'Yash', workoutType: 'Running', workoutMinutes: 30 },
    { UserName: 'John', workoutType: 'Cycling', workoutMinutes: 45 },
    { UserName: 'Alice', workoutType: 'Yoga', workoutMinutes: 60 },
  ];
  filteredWorkouts = [...this.workouts]; 

  filterWorkout(event: Event) {
    const target = event.target as HTMLSelectElement; // Type assertion
    const selectedValue = target.value; 
  
    this.filteredWorkouts = this.workouts.filter(workout =>
      selectedValue ? workout.workoutType === selectedValue : true
    );
  }  
  
}
