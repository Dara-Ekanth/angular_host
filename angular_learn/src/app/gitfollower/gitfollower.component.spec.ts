import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitfollowerComponent } from './gitfollower.component';

describe('GitfollowerComponent', () => {
  let component: GitfollowerComponent;
  let fixture: ComponentFixture<GitfollowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GitfollowerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GitfollowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
