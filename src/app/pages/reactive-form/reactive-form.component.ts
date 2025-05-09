import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent implements OnInit {

  submitted = false;
  signForm : FormGroup = new FormGroup({
    name : new FormControl ('', [Validators.required]),
    email : new FormControl ('', [Validators.required, Validators.email]),
    password: new FormControl ('', []),
    confPssword : new FormControl ('', []),
    languages : new FormArray<FormControl<string | null>>(
      [
        new FormControl ('', [Validators.required]),
      ]
    )
  })

  ngOnInit(): void {

  }

  get name() : FormControl {
    return this.signForm.controls['name'] as FormControl;
  }

  get email() : FormControl {
    return this.signForm.controls['email'] as FormControl;
  }

  get languages() : FormArray<FormControl<string | null>> {
    return this.signForm.controls['languages'] as FormArray<FormControl<string | null>>;
  }

  delete(index : number):void {
    this.languages.removeAt(index);
  }

  add() : void {
    this.languages.push(new FormControl ('', [Validators.required]),)
  }

  onSubmit(){
    this.submitted = true;
    console.log(
      this.signForm.value
    );
  }

}
