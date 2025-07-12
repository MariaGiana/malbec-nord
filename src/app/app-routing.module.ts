import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MalbecnordPrincipalComponent } from './malbecnord-principal/malbecnord-principal.component';
import { MalbecnordAboutComponent } from './malbecnord-about/malbecnord-about.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { MalbecnordCartComponent } from './malbecnord-cart/malbecnord-cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wines',
    pathMatch: 'full',
  },
  {
    path: 'wines',
    component: MalbecnordPrincipalComponent,
  },{
  path: 'cart',
    component: MalbecnordCartComponent,
  },
  {
    path: 'about',
    component: MalbecnordAboutComponent,
  },
  {
    path: 'contact',
    component: FormContactComponent,
  },
  {
    path: 'wines/:id', 
    component: WineDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
