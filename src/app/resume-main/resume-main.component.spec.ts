import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeMainComponent } from './resume-main.component';

describe('ResumeMainComponent', () => {
  let component: ResumeMainComponent;
  let fixture: ComponentFixture<ResumeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
