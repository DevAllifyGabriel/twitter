import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFeedComponent } from './icons-feed.component';

describe('IconsFeedComponent', () => {
  let component: IconsFeedComponent;
  let fixture: ComponentFixture<IconsFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
