import { Routes } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {HomeComponent} from './pages/home/home.component';
import {BindingPageComponent} from './pages/binding-page/binding-page.component';
import {BindingExercicesPageComponent} from './pages/binding-exercices-page/binding-exercices-page.component';
import {DirectivesComponent} from './pages/directives/directives.component';

export const routes: Routes = [
  {path: 'landing', component: LandingPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '', component: HomeComponent},
  {path: 'binding', component: BindingPageComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'binding/exercices', component: BindingExercicesPageComponent},
];
