import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/header/header.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {FeaturesComponent} from '../../components/features/features.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FeaturesComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
