import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { UserComponent } from './user/user.component';
import { NgProgressModule} from '@ngx-progressbar/core';
import { NgProgressHttpModule} from '@ngx-progressbar/http';
import { RoutingModule} from './routing/routing.module';
import { FormsModule} from '@angular/forms';
//Defining Routes

@NgModule({
  declarations: [
    AppComponent,
    MyprofileComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
    RoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
