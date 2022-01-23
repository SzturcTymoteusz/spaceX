import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeslaRoadsterComponent } from './components/tesla-roadster/tesla-roadster.component';
import { GetRoadsterInfo } from './resolvers/get-roadster-info/get-roadster-info';

const routes: Routes = [
  {
    path: '',
    component: TeslaRoadsterComponent,
    resolve: {
      roadsterInfo: GetRoadsterInfo,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeslaRoadsterRoutingModule {}
