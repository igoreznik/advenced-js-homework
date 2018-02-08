import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepoleInfoComponent } from './pepole-info.component';

describe('PepoleInfoComponent', () => {
  let component: PepoleInfoComponent;
  let fixture: ComponentFixture<PepoleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepoleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepoleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
