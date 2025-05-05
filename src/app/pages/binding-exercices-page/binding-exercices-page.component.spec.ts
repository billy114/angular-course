import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingExercicesPageComponent } from './binding-exercices-page.component';

describe('BindingExercicesPageComponent', () => {
  let component: BindingExercicesPageComponent;
  let fixture: ComponentFixture<BindingExercicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingExercicesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingExercicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
