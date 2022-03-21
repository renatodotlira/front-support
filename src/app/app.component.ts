import { Component, OnInit } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';
import { ScheduleService } from './schedule.service';
import { Schedule } from './models/schedule.model';

@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Fipe';

  selecao = "Selecione uma marca";

  selectedBrand: any;

  selectedVehicle: any;

  schedules : any[];

  constructor(private scheduleService: ScheduleService) {

  }

  ngOnInit() {
    this.scheduleService.getImDay()
      .subscribe( data => {
        this.schedules = data;
      });
  };  

}
