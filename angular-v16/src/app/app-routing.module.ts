import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';
import { CcompComponent } from './ccomp/ccomp.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'acomp',
    component: AcompComponent
  },
  {
    path: 'acomp/details/:id',
    component: CcompComponent
  },
  {
    path: 'pipe',
    component: PipeDemoComponent
  },
  {
    path: 'event',
    component: EventComponent
  },
  {
    path: 'about',
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: 'company',
        component: AboutComponent
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
