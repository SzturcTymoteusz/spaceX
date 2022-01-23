import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchComponent } from './components/launch/launch.component';
import { GetLaunch } from './resolvers/get-launch/get-launch';

const routes: Routes = [
  {
    path: '',
    component: LaunchComponent,
    resolve: {
      launch: GetLaunch,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchRoutingModule {}
