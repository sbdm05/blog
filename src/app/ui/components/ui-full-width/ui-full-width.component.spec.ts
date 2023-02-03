import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiFullWidthComponent } from './ui-full-width.component';

describe('UiFullWidthComponent', () => {
  let component: UiFullWidthComponent;
  let fixture: ComponentFixture<UiFullWidthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiFullWidthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiFullWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
