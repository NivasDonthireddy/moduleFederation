import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MicrofrontendRoutingModule } from './microfrontend-routing.module';
import { MicrofrontendComponent } from './microfrontend/microfrontend.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    MicrofrontendComponent
  ],
  imports: [
    CommonModule,
    MicrofrontendRoutingModule,
    MatCardModule, 
    MatButtonModule,
  ]
})
export class MicrofrontendModule { }
