import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatPageComponent } from './resultat-page.component';

describe('ResultatPageComponent', () => {
  let component: ResultatPageComponent;
  let fixture: ComponentFixture<ResultatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultatPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
