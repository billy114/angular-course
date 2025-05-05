import { Component } from '@angular/core';
import {FeaturesComponent} from "../../components/features/features.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {ContactComponent} from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    ContactComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
