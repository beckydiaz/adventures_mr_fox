import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Story10Component } from './story10.component';

describe('Story10Component', () => {
  let component: Story10Component;
  let fixture: ComponentFixture<Story10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Story10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Story10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
