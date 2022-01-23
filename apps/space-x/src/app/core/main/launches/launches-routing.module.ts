import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './components/launches/launches.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/listing/listing.module').then((m) => m.ListingModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./modules/launch/launch.module').then((m) => m.LaunchModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}
