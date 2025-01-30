import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddWorkoutComponent],
  template: ` <div>
      <app-add-workout></app-add-workout>
    </div>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitness-tracker';
}
