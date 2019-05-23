import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AnalyzePage } from './analyze.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
import {InputCardComponent} from '../components/input-card/input-card.component'

const routes: Routes = [
  {
    path: '',
    component: AnalyzePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ionic4DatepickerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AnalyzePage,InputCardComponent]
})
export class AnalyzePageModule {}
