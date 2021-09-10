import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatedataComponent } from './corporatedata.component';

describe('CorporatedataComponent', () => {
  let component: CorporatedataComponent;
  let fixture: ComponentFixture<CorporatedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatedataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
