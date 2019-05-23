import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { Ionic4DatepickerModule } from '@logisticinfotech/ionic4-datepicker';
// import {InputCardComponent} from '../components/input-card/input-card.component'

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
  declarations: [HomePage]
})
export class HomePageModule {
  // inputsArray = [];
  // gridRows = [];
  // elimentsPerRow = 3;

  constructor(){
    // this.createArrays();
    // console.log(this.gridRows.length);
    // console.log(this.gridRows)
  }

  /**
   * Split the input array according to the number of rows and columns
   */
  // createArrays(): void {
  //   let totalElms = this.inputsArray.length;
  //   let totalRows = Math.ceil(totalElms/this.elimentsPerRow);

  //   for (let i=0; i<totalRows; i++){
  //     let currentRow = this.inputsArray.slice(i*this.elimentsPerRow,(i*this.elimentsPerRow)+this.elimentsPerRow);
  //     this.gridRows.push(currentRow);
  //   }
  // }

  // /**
  //  * Create and add new input element object to the inputs array
  //  */
  // clickAddMoreTopics(): void {
  //   let topicNumber = this.inputsArray.length + 1
  //   let inputObj = {
  //     topicNo : topicNumber,
  //     topic:''
  //   }
  //   this.inputsArray.push(inputObj)
  //   this.createArrays();
  //   console.log(this.gridRows.length);
  //   console.log(this.gridRows)

  // }

}
