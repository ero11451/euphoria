import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailscreenComponent } from './retailscreen.component';

describe('RetailscreenComponent', () => {
  let component: RetailscreenComponent;
  let fixture: ComponentFixture<RetailscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
