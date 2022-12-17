import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderbarAlumnoComponent } from './sliderbar-alumno.component';

describe('SliderbarAlumnoComponent', () => {
  let component: SliderbarAlumnoComponent;
  let fixture: ComponentFixture<SliderbarAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderbarAlumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderbarAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
