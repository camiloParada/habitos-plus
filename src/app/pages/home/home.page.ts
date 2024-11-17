import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Habit {
  id: number;
  name: string;
  icon: string;
  meta: string;
  progress: number;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedTab = 'home';
  habits: Habit[] = [
    {
      id: 1,
      name: 'Estudio',
      icon: 'brain-outline',
      meta: 'Meta: 1 por día',
      progress: 75,
      image: 'assets/img/habito.jpg'
    },
    {
      id: 2,
      name: 'Beber 8 vasos de agua al día',
      icon: 'water-outline',
      meta: 'Meta: 8 vasos',
      progress: 100,
      image: 'assets/img/beber_agua.jpg'
    },
    {
      id: 3,
      name: 'Leer 30 minutos al día',
      icon: 'book-outline',
      meta: 'Meta: 30 min',
      progress: 100,
      image: 'assets/img/leer.jpg'
    },
    {
      id: 4,
      name: 'Comer 5 porciones de frutas',
      icon: 'nutrition-outline',
      meta: 'Meta: 5 porciones',
      progress: 80,
      image: 'assets/img/fruta.jpg'
    },
    {
      id: 5,
      name: 'Dormir 8 horas diarias',
      icon: 'bed-outline',
      meta: 'Meta: 8 horas',
      progress: 0,
      image: 'assets/img/dormir.jpg'
    },
    {
      id: 6,
      name: 'Realizar actividad física',
      icon: 'fitness-outline',
      meta: 'Meta: 30 min',
      progress: 50,
      image: 'assets/img/actividad.jpg'
    },
    {
      id: 7,
      name: 'Limitar el tiempo frente a pantallas',
      icon: 'timer-outline',
      meta: 'Meta: 2 horas',
      progress: 65,
      image: 'assets/img/tiempoPantalla.jpg'
    },
    {
      id: 8,
      name: 'Realizar pausas activas',
      icon: 'walk-outline',
      meta: 'Meta: 15 min/hora',
      progress: 90,
      image: 'assets/img/PausasActivas.jpg'
    },
    {
      id: 9,
      name: 'Estiramiento al despertar',
      icon: 'sunny-outline',
      meta: 'Meta: 10 min',
      progress: 100,
      image: 'assets/img/estiramientoDormir.jpg'
    }
  ];

  constructor(private router: Router) {}

  segmentChanged(event: any) {
    this.selectedTab = event.detail.value;
  }

  goToAgregar() {
    this.router.navigate(['/create-habit']);
  }
} 