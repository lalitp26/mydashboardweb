import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecttodoComponent } from './projecttodo.component';

describe('ProjecttodoComponent', () => {
  let component: ProjecttodoComponent;
  let fixture: ComponentFixture<ProjecttodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjecttodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecttodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
