import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AssignmentFourComponent } from './assignment-four/assignment-four.component';
import { GameControlComponent } from './assignment-four/game-control/game-control.component';
import { OddComponent } from './assignment-four/odd/odd.component';
import { EvenComponent } from './assignment-four/even/even.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HilightDirective } from './Directive-Assets/hilight.directive';
import { UnlessDirective } from './Directive-Assets/unless.directive';

import {MatSelectModule} from '@angular/material/select';
import { MatFormField } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';

import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { ServiceTutorialComponent } from './service-tutorial/service-tutorial.component';
import { AccountComponent } from './service-tutorial/account/account.component';
import { NewAccountComponent } from './service-tutorial/new-account/new-account.component';
// import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
// Rjw$S1uWuAE7c7PCZwVJ 
    // AssignmentTwoComponent,
    // AssignmentThreeComponent,
    // ServerComponent,
    // ServersComponent,
    AssignmentFourComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    HilightDirective,
    UnlessDirective,
    ServiceTutorialComponent,
    AccountComponent,
    NewAccountComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      preventDuplicates: true
    }), // ToastrModule added
    CommonModule,

    // MatSliderModule
  ],
  exports: [
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
