import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TagCloudModule } from 'angular-tag-cloud-module';

import { IonicModule } from '@ionic/angular';

import { ScoresPage } from './scores.page';

const routes: Routes = [
  {
    path: '',
    component: ScoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TagCloudModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScoresPage]
})
export class ScoresPageModule {}
