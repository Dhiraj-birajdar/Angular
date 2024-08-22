;
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
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
import { RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { CcompComponent } from './ccomp/ccomp.component';



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
    PageNotFoundComponent,
    DataComponent,
    AcompComponent,
    BcompComponent,
    CcompComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
