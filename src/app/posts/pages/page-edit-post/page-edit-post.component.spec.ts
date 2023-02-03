import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditPostComponent } from './page-edit-post.component';

describe('PageEditPostComponent', () => {
  let component: PageEditPostComponent;
  let fixture: ComponentFixture<PageEditPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEditPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEditPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
