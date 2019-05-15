import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import {InputCardComponent} from '../components/input-card/input-card.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4DatepickerModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,InputCardComponent]
})
export class HomePageModule {
  inputsArray = []

  constructor(){}

  

}
