import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JerseyListComponent } from './jersey-list.component';

describe('JerseyListComponent', () => {
  let component: JerseyListComponent;
  let fixture: ComponentFixture<JerseyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JerseyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JerseyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
