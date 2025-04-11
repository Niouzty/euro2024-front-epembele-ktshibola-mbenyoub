import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitrePerformanceComponent } from './arbitre-performance.component';

describe('ArbitrePerformanceComponent', () => {
  let component: ArbitrePerformanceComponent;
  let fixture: ComponentFixture<ArbitrePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArbitrePerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArbitrePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
