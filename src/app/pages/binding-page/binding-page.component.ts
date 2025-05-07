import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-binding-page',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './binding-page.component.html',
  styleUrl: './binding-page.component.scss'
})
export class BindingPageComponent {
  name: string = "Billel ABBES";
  imageUrl : string = 'https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto';
  disabled : boolean = true;
  bootstrapUrl : string = 'https://getbootstrap.com/docs/5.3/getting-started/introduction/'

  text : string = "Example de text";

  getEmail () : string {
    return "billel.abbes@outlook.fr"
  }

  getImageUrl(size : number) : string {
    if (size === 300) {
      return 'https://fakeimg.pl/300/'
    }else if (size === 250) {
      return 'https://fakeimg.pl/250x100/'
    }else {
      return 'https://fakeimg.pl/350x200/?text=Hello';
    }
  }

  onClick(){
    alert("Hello World");
  }

  onKeyUp(event : any){
    console.log(event.key);
  }


  onKeyDown (event : any) {
    console.log(event.key);
  }

  onFocus(){
    alert ("Focus");
  }

}
