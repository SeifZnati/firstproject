import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeeComponent } from './homee.component';

describe('HomeeComponent', () => {
  let component: HomeeComponent;
  let fixture: ComponentFixture<HomeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeeComponent]
    });
    fixture = TestBed.createComponent(HomeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
