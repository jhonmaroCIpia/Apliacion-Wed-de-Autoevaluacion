import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCoordinadorComponent } from './info-coordinador.component';

describe('InfoCoordinadorComponent', () => {
  let component: InfoCoordinadorComponent;
  let fixture: ComponentFixture<InfoCoordinadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoCoordinadorComponent]
    });
    fixture = TestBed.createComponent(InfoCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
