import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from "./components/workout-list/workout-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddWorkoutComponent, WorkoutListComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitness-tracker';
}
