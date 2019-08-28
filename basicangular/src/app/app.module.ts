import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewComponent } from './view/view.component';
import {Routes,RouterModule} from '@angular/router';

const appRoutes:Routes=[
  {path:'',component:ContactusComponent},
  {path:'view',component:ViewComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactusComponent,
    NavbarComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 

  ],
  providers: [],
  bootstrap: [AppComponent,NavbarComponent]
})
export class AppModule { }
