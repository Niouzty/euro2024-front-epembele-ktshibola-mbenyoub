import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapeauxPageComponent } from './drapeaux-page.component';

describe('DrapeauxPageComponent', () => {
  let component: DrapeauxPageComponent;
  let fixture: ComponentFixture<DrapeauxPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrapeauxPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrapeauxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
