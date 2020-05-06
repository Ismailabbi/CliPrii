import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisiedossierComponent } from './saisiedossier.component';

describe('SaisiedossierComponent', () => {
  let component: SaisiedossierComponent;
  let fixture: ComponentFixture<SaisiedossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisiedossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisiedossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
