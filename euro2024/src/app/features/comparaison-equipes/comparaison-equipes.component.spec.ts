import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparaisonEquipesComponent } from './comparaison-equipes.component';

describe('ComparaisonEquipesComponent', () => {
  let component: ComparaisonEquipesComponent;
  let fixture: ComponentFixture<ComparaisonEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComparaisonEquipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparaisonEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
