import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPhotoPartComponent } from './main-photo-part.component';

describe('MainPhotoPartComponent', () => {
  let component: MainPhotoPartComponent;
  let fixture: ComponentFixture<MainPhotoPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPhotoPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPhotoPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
