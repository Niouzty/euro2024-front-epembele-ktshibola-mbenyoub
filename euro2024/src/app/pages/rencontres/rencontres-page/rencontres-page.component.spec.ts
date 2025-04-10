import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RencontresPageComponent } from './rencontres-page.component';

describe('RencontresPageComponent', () => {
  let component: RencontresPageComponent;
  let fixture: ComponentFixture<RencontresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RencontresPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RencontresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
