import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-habito',
  templateUrl: './create-habit.page.html',
  styleUrls: ['./create-habit.page.scss'],
})

export class CreateHabitPage {
  selectedTab: string = 'home';
  categories: string[] = [
    'Salud Física',
    'Salud Mental',
    'Bienestar Personal',
    'Sociales',
    'Productividad'
  ];

  constructor() {}
}
