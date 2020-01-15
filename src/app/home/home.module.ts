import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';



@NgModule({
  imports: [ ],
  declarations: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule { }
