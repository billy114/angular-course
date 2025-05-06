import { Component } from '@angular/core';
import {ParentComponent} from '../../components/parent/parent.component';

@Component({
  selector: 'app-composants-imbriques',
  standalone: true,
  imports: [
    ParentComponent
  ],
  templateUrl: './composants-imbriques.component.html',
  styleUrl: './composants-imbriques.component.scss'
})
export class ComposantsImbriquesComponent {

}
