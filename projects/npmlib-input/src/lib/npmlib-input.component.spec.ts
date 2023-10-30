import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmlibInputComponent } from './npmlib-input.component';

describe('NpmlibInputComponent', () => {
  let component: NpmlibInputComponent;
  let fixture: ComponentFixture<NpmlibInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpmlibInputComponent]
    });
    fixture = TestBed.createComponent(NpmlibInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
