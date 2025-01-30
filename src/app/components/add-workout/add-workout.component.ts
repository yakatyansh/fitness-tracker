import { Component } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css']
})
export class AddWorkoutComponent {
  userName: string = '';
  workoutType: string = 'Running';
  workoutMinutes: number = 0;

  constructor(private workoutService: WorkoutService) {}

  addWorkout() {
    if (!this.userName || this.workoutMinutes <= 0) return;

    this.workoutService.addWorkout({
      userName: this.userName,
      workoutType: this.workoutType,
      workoutMinutes: this.workoutMinutes,
      date: new Date(),
    });

    this.userName = '';
    this.workoutMinutes = 0;
  }
}
