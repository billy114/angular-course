import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {

  nameFormControl : FormControl<string | null> = new FormControl ('', [
    Validators.required, Validators.minLength(6)
    ]);

  password : FormControl<string | null> = new FormControl ('', [
    Validators.pattern("^[a-z0-9]*$"),
  ]);
  confPssword : FormControl<string | null> = new FormControl ('', []);


  ngOnInit(): void {
    console.log(this.nameFormControl.value)
    // this.nameFormControl.patchValue("Elie !!");
  }


}
