import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommontodoComponent } from './commontodo.component';

describe('CommontodoComponent', () => {
  let component: CommontodoComponent;
  let fixture: ComponentFixture<CommontodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommontodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommontodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
