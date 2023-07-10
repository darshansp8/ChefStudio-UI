import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedNavigationComponent } from './feed-navigation.component';

describe('FeedNavigationComponent', () => {
  let component: FeedNavigationComponent;
  let fixture: ComponentFixture<FeedNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
