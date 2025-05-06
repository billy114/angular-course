import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesExercicesPageComponent } from './directives-exercices-page.component';

describe('DirectivesExercicesPageComponent', () => {
  let component: DirectivesExercicesPageComponent;
  let fixture: ComponentFixture<DirectivesExercicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesExercicesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesExercicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
