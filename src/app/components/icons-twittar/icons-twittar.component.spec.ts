import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsTwittarComponent } from './icons-twittar.component';

describe('IconsTwittarComponent', () => {
  let component: IconsTwittarComponent;
  let fixture: ComponentFixture<IconsTwittarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsTwittarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsTwittarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
