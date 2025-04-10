import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitresPageComponent } from './arbitres-page.component';

describe('ArbitresPageComponent', () => {
  let component: ArbitresPageComponent;
  let fixture: ComponentFixture<ArbitresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbitresPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
