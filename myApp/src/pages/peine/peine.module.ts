import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeinePage } from './peine';

@NgModule({
  declarations: [
    PeinePage,
  ],
  imports: [
    IonicPageModule.forChild(PeinePage),
  ],
})
export class PeinePageModule {}
