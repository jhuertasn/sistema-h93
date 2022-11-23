import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulodirectivoComponent } from './modulodirectivo.component';

describe('ModulodirectivoComponent', () => {
  let component: ModulodirectivoComponent;
  let fixture: ComponentFixture<ModulodirectivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulodirectivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulodirectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
