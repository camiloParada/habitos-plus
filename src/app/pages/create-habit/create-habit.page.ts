import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-habito',
  templateUrl: './create-habit.page.html',
  styleUrls: ['./create-habit.page.scss'],
})

export class CreateHabitPage {
  habit = {
    name: '',
    description: '',
    category: ''
  };
  categories = ['Salud', 'Trabajo', 'Estudio', 'Hogar'];

  selectedTab: string = 'home'; 
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  selectCategory(category: string) {
    this.habit.category = category;
  }

  async saveHabit() {
    if (!this.habit.name || !this.habit.category) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos obligatorios.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Aquí puedes ajustar la URL a la API que estás utilizando
    this.http.post('https://tu-api.com/api/habits', this.habit).subscribe(
      async () => {
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Hábito guardado correctamente.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/']);
      },
      async (error) => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se pudo guardar el hábito. Inténtalo más tarde.',
          buttons: ['OK'],
        });
        await alert.present();
        console.error('Error al guardar el hábito:', error);
      }
    );
  }
}
