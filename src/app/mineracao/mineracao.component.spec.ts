import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MineracaoComponent } from './mineracao.component';

describe('MineracaoComponent', () => {
  let component: MineracaoComponent;
  let fixture: ComponentFixture<MineracaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MineracaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MineracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
