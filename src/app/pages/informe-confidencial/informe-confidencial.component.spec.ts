import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeConfidencialComponent } from './informe-confidencial.component';

describe('InformeConfidencialComponent', () => {
  let component: InformeConfidencialComponent;
  let fixture: ComponentFixture<InformeConfidencialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeConfidencialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeConfidencialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
