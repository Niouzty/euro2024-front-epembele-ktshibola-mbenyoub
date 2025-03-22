import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueMatchComponent } from './historique-match.component';

describe('HistoriqueMatchComponent', () => {
  let component: HistoriqueMatchComponent;
  let fixture: ComponentFixture<HistoriqueMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoriqueMatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
