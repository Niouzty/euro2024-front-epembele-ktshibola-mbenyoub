import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalitePageComponent } from './nationalite-page.component';

describe('NationalitePageComponent', () => {
  let component: NationalitePageComponent;
  let fixture: ComponentFixture<NationalitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationalitePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationalitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
