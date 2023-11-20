import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDocenteComponent } from './add-edit-docente.component';

describe('AddEditDocenteComponent', () => {
  let component: AddEditDocenteComponent;
  let fixture: ComponentFixture<AddEditDocenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditDocenteComponent]
    });
    fixture = TestBed.createComponent(AddEditDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
