import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoueurPageComponent } from './joueur-page.component';

describe('JoueurPageComponent', () => {
  let component: JoueurPageComponent;
  let fixture: ComponentFixture<JoueurPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoueurPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoueurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
