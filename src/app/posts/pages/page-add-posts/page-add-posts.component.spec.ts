import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddPostsComponent } from './page-add-posts.component';

describe('PageAddPostsComponent', () => {
  let component: PageAddPostsComponent;
  let fixture: ComponentFixture<PageAddPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAddPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
