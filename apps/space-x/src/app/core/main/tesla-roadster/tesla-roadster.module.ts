import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeslaRoadsterRoutingModule } from './tesla-roadster-routing.module';
import { TeslaRoadsterComponent } from './components/tesla-roadster/tesla-roadster.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TeslaRoadsterComponent],
  imports: [CommonModule, TeslaRoadsterRoutingModule, MatButtonModule],
})
export class TeslaRoadsterModule {}
