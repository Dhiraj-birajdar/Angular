import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PowerPipe } from './custom-pipes/power.pipe';
import { PrefixPipe } from './custom-pipes/prefix.pipe';
import { FactorialPipe } from './custom-pipes/factorial.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PowerPipe,
    PrefixPipe,
    FactorialPipe,
    PipeDemoComponent,
    EventComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
