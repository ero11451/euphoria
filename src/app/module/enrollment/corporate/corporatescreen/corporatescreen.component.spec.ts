import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatescreenComponent } from './corporatescreen.component';

describe('CorporatescreenComponent', () => {
  let component: CorporatescreenComponent;
  let fixture: ComponentFixture<CorporatescreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatescreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatescreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
