import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultRouteComponent } from './search-result-route.component';

describe('SearchResultRouteComponent', () => {
  let component: SearchResultRouteComponent;
  let fixture: ComponentFixture<SearchResultRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchResultRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
