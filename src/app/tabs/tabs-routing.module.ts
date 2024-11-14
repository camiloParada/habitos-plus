import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'create-habit',
        loadChildren: () =>
          import('../pages/create-habit/create-habit.module').then(
            (m) => m.CreateHabitPageModule
          ),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'progress/:habitId',
        loadChildren: () =>
          import('../pages/progress/progress.module').then(
            (m) => m.ProgressPageModule
          ),
      },
      {
        path: 'reminders/:habitId',
        loadChildren: () =>
          import('../pages/reminders/reminders.module').then(
            (m) => m.RemindersPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
