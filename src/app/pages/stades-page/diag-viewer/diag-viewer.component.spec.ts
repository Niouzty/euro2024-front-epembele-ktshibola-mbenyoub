import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagViewerComponent } from './diag-viewer.component';

describe('DiagViewerComponent', () => {
  let component: DiagViewerComponent;
  let fixture: ComponentFixture<DiagViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
