import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../../services/workouts/workout.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent implements OnInit {
	workouts:any[];

  constructor(public works: WorkoutService) {

   }

  ngOnInit() {
  	this.works.getWorkouts().subscribe(workouts => {
  		this.workouts = workouts;
  	})

  }
  list(){
  	console.log(this.workouts);
  }

}
