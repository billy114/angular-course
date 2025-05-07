import { Routes } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {HomeComponent} from './pages/home/home.component';
import {BindingPageComponent} from './pages/binding-page/binding-page.component';
import {BindingExercicesPageComponent} from './pages/binding-exercices-page/binding-exercices-page.component';
import {DirectivesComponent} from './pages/directives/directives.component';
import {DirectivesExercicesPageComponent} from './pages/directives-exercices-page/directives-exercices-page.component';
import {ComposantsImbriquesComponent} from './pages/composants-imbriques/composants-imbriques.component';
import {RoutingComponent} from './pages/routing/routing.component';
import {UserLayoutComponent} from './layouts/user-layout/user-layout.component';
import {DashboardUserComponent} from './pages/user/dashboard-user/dashboard-user.component';
import {ProfilUserComponent} from './pages/user/profil-user/profil-user.component';
import {ExampleComponent} from './pages/example/example.component';
import {ProjectComponent} from './pages/project/project.component';
import {ProduitsComponent} from './pages/produits/produits.component';

export const routes: Routes = [

  {path: 'landing', component: LandingPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '', component: HomeComponent},
  {path: 'components', component: ComposantsImbriquesComponent},
  {path: 'routing', component: RoutingComponent},
  {path: 'binding-exercices', component: BindingExercicesPageComponent},
  {path: 'directives', component: DirectivesComponent},
  {path: 'projects', component: DirectivesExercicesPageComponent},
  {path: 'project/:id', component: ProjectComponent},
  {path: 'user', component: UserLayoutComponent, children: [
      {path: '', component: DashboardUserComponent},
      {path: 'profile', component: ProfilUserComponent},
    ]
  },
  {path: 'services', component: ExampleComponent},
  {path: 'maison', redirectTo: 'landing'},
  {path: 'produits', component: ProduitsComponent},
  {path: '**', component: HomeComponent},

];
