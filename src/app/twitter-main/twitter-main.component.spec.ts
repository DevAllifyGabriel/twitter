import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterMainComponent } from './twitter-main.component';

describe('TwitterMainComponent', () => {
  let component: TwitterMainComponent;
  let fixture: ComponentFixture<TwitterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
