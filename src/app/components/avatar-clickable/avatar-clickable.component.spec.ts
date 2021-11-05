import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarClickableComponent } from './avatar-clickable.component';

describe('AvatarClickableComponent', () => {
  let component: AvatarClickableComponent;
  let fixture: ComponentFixture<AvatarClickableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatarClickableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarClickableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
