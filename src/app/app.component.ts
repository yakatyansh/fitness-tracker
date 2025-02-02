import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from "./components/workout-list/workout-list.component";
import { FormsModule } from '@angular/forms';
import { WorkoutChartComponent } from "./components/workout-chart/workout-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, AddWorkoutComponent, WorkoutListComponent, WorkoutChartComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitness-tracker';
}
