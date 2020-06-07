import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarAlunoComponent } from './pesquisar-aluno.component';

describe('PesquisarAlunoComponent', () => {
  let component: PesquisarAlunoComponent;
  let fixture: ComponentFixture<PesquisarAlunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarAlunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
