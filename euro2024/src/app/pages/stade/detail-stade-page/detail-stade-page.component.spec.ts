import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStadePageComponent } from './detail-stade-page.component';

describe('DetailStadePageComponent', () => {
  let component: DetailStadePageComponent;
  let fixture: ComponentFixture<DetailStadePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailStadePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStadePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
