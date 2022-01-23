import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchRoutingModule } from './launch-routing.module';
import { LaunchComponent } from './components/launch/launch.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [LaunchComponent],
  imports: [CommonModule, LaunchRoutingModule, MatButtonModule, MatIconModule],
})
export class LaunchModule {}
