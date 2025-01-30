import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from "./components/workout-list/workout-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddWorkoutComponent, WorkoutListComponent],
  template: ` <div>
      <app-add-workout></app-add-workout>
      <app-workout-list></app-workout-list>
    </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitness-tracker';
}
