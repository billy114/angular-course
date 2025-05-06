import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantsImbriquesComponent } from './composants-imbriques.component';

describe('ComposantsImbriquesComponent', () => {
  let component: ComposantsImbriquesComponent;
  let fixture: ComponentFixture<ComposantsImbriquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantsImbriquesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantsImbriquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
