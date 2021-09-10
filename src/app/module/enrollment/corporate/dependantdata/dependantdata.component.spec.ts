import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantdataComponent } from './dependantdata.component';

describe('DependantdataComponent', () => {
  let component: DependantdataComponent;
  let fixture: ComponentFixture<DependantdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependantdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DependantdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
