import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloadministrativoComponent } from './moduloadministrativo.component';

describe('ModuloadministrativoComponent', () => {
  let component: ModuloadministrativoComponent;
  let fixture: ComponentFixture<ModuloadministrativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloadministrativoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloadministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
