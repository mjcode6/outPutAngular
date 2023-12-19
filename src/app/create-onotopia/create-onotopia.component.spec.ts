import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnotopiaComponent } from './create-onotopia.component';

describe('CreateOnotopiaComponent', () => {
  let component: CreateOnotopiaComponent;
  let fixture: ComponentFixture<CreateOnotopiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOnotopiaComponent]
    });
    fixture = TestBed.createComponent(CreateOnotopiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
