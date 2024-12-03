import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', // Redirige a la página inicial
    pathMatch: 'full'   // Asegúrate de que coincida completamente con la raíz
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'create-habit',
    loadChildren: () => import('./pages/create-habit/create-habit.module').then(m => m.CreateHabitPageModule)
  },
  {
    path: 'progress',
    loadChildren: () => import('./pages/progress/progress.module').then(m => m.ProgressPageModule)
  },
  {
    path: 'reminders',
    loadChildren: () => import('./pages/reminders/reminders.module').then(m => m.RemindersPageModule)
  },
  {
    path: 'habits',
    loadChildren: () => import('./pages/habits/habits.module').then(m => m.HabitsPageModule)
  },
  {
    path: 'statics',
    loadChildren: () => import('./pages/statics/statics.module').then(m => m.StaticsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
