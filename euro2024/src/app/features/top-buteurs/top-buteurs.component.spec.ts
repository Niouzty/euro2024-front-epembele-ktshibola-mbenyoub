import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopButeursComponent } from './top-buteurs.component';

describe('TopButeursComponent', () => {
  let component: TopButeursComponent;
  let fixture: ComponentFixture<TopButeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopButeursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopButeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
