import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private workouts: any[] = [];

  addWorkout(workout: any) {
    this.workouts.push(workout);
  }

  getWorkouts() {
    return this.workouts;
  }
}
