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


@NgModule({
  declarations: [
    AppComponent,
    // AssignmentTwoComponent,
    // AssignmentThreeComponent,
    // ServerComponent,
    // ServersComponent,
    AssignmentFourComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      progressBar: true,
      preventDuplicates: true
    }), // ToastrModule added
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
