import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadesPageComponent } from './stades-page.component';

describe('StadesPageComponent', () => {
  let component: StadesPageComponent;
  let fixture: ComponentFixture<StadesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StadesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
