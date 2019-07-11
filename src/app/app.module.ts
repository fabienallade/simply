import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatMenuModule,MatGridListModule,MatCardModule,MatInputModule, MatProgressBar, MatIcon} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { ApiServiceService } from './services/api-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    UserComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     MatToolbarModule,
     MatMenuModule,
     MatGridListModule,
     MatCardModule,
     MatInputModule,
     MatProgressBar,
     MatIcon,
     FormsModule,
     HttpModule
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatProgressBar,
    MatIcon,
    FormsModule
  ,
  HttpModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
