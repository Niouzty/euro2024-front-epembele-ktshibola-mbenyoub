import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillesPageComponent } from './villes-page.component';

describe('VillesPageComponent', () => {
  let component: VillesPageComponent;
  let fixture: ComponentFixture<VillesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VillesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
