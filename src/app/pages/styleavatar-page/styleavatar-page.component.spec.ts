import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleavatarPageComponent } from './styleavatar-page.component';

describe('StyleavatarPageComponent', () => {
  let component: StyleavatarPageComponent;
  let fixture: ComponentFixture<StyleavatarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleavatarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleavatarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
