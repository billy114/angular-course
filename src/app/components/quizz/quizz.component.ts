import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent {
  prenom: string = '';
  question: string = 'Quel est le plus grand océan du monde ?';
  reponse1: string = 'Océan Atlantique';
  reponse2: string = 'Océan Indien';
  reponse3: string = 'Océan Arctique';
  reponse4: string = 'Océan Pacifique';
  bonneReponse: string = 'Océan Pacifique';
  message: string = '';
  boutonsDesactives: boolean = false;

  verifier(reponse: string): void {
    if (reponse === this.bonneReponse) {
      this.message = `Bravo ${this.prenom} ! Bonne réponse 🎉`;
    } else {
      this.message = `Dommage ${this.prenom}, essaie encore 😞`;
    }
    this.boutonsDesactives = true;
  }

  reset(): void {
    this.message = '';
    this.boutonsDesactives = false;
  }
}
