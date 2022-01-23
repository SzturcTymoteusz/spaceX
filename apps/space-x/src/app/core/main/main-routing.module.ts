import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AuthGuard } from '../../commanders/auth/guard/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./initial-page/initial-page.module').then((m) => m.InitialPageModule),
  },
  {
    path: 'launches',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./launches/launches.module').then((m) => m.LaunchesModule),
  },
  {
    path: 'tesla-roadster',
    component: MainComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./tesla-roadster/tesla-roadster.module').then((m) => m.TeslaRoadsterModule),
  },
  {
    path: '**',
    component: MainComponent,
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
