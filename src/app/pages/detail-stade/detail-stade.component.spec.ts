import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStadeComponent } from './detail-stade.component';

describe('DetailStadeComponent', () => {
  let component: DetailStadeComponent;
  let fixture: ComponentFixture<DetailStadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailStadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailStadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
