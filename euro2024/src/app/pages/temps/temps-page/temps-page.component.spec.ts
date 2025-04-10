import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsPageComponent } from './temps-page.component';

describe('TempsPageComponent', () => {
  let component: TempsPageComponent;
  let fixture: ComponentFixture<TempsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
