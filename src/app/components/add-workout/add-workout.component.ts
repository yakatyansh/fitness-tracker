import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AddWorkoutComponent implements OnInit {
  workoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.workoutForm = this.fb.group({
      userName: ['', Validators.required],
      workoutType: ['', Validators.required],
      workoutMinutes: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
    // Component initialization logic if needed
  }

  onSubmit() {
    if (this.workoutForm.valid) {
      console.log(this.workoutForm.value);
      // Handle form submission
    } else {
      Object.keys(this.workoutForm.controls).forEach(key => {
        const control = this.workoutForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}