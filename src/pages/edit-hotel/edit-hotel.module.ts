import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditHotelPage } from './edit-hotel';

@NgModule({
  declarations: [
    EditHotelPage,
  ],
  imports: [
    IonicPageModule.forChild(EditHotelPage),
  ],
})
export class EditHotelPageModule {}
