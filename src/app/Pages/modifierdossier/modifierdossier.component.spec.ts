import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierdossierComponent } from './modifierdossier.component';

describe('ModifierdossierComponent', () => {
  let component: ModifierdossierComponent;
  let fixture: ComponentFixture<ModifierdossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierdossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierdossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
