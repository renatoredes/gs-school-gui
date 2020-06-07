import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableAlunoComponent } from './data-table-aluno.component';

describe('DataTableAlunoComponent', () => {
  let component: DataTableAlunoComponent;
  let fixture: ComponentFixture<DataTableAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
