import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostesPageComponent } from './postes-page.component';

describe('PostesPageComponent', () => {
  let component: PostesPageComponent;
  let fixture: ComponentFixture<PostesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
