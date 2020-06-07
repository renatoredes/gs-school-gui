import { DataTableAlunoComponent } from "./data-table-aluno/data-table-aluno.component";
import { AlunosComponent } from "./../forms/alunos/alunos.component";
import { Routes } from "@angular/router";

import { ExtendedTableComponent } from "./extendedtable/extendedtable.component";
import { DataTableComponent } from "./datatable.net/datatable.component";
import { PesquisarAlunoComponent } from "./pesquisar-aluno/pesquisar-aluno.component";
import { AlunoResolverGuard } from "app/guards/aluno-resolver.guard";
export const TablesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "pesquisaralunos",
        // component: DataTableAlunoComponent,
        component: PesquisarAlunoComponent,
      },
      {
        path: "novo",
        component: AlunosComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "regular",
        component: ExtendedTableComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "extended",
        component: ExtendedTableComponent,
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "datatables.net",
        component: DataTableComponent,
      },
    ],
  },
];
