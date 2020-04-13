import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';


import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  exerciseSubscription: Subscription;

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => this.exercises = exercises);
    this.trainingService.fetchAvailableExercises();
  }

  onStartNewTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.training);
  }

  ngOnDestroy() {
    this.exerciseSubscription.unsubscribe();
  }

}
