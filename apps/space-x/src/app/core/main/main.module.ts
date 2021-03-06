import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './menu/header/header.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [CommonModule, MainRoutingModule],
  declarations: [MainComponent, HeaderComponent, MenuComponent],
})
export class MainModule {}
