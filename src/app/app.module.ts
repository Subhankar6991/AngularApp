import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    // ServerComponent,
    // ServersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
