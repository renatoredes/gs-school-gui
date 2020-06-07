import { AlunosComponent } from "./alunos/alunos.component";
import { Routes } from "@angular/router";

import { AlunoResolverGuard } from "app/guards/aluno-resolver.guard";

export const FormsRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "novo",
        component: AlunosComponent,
        resolve: {
          alunoresolvido: AlunoResolverGuard,
        },
      },
    ],
  },
  {
    path: "",
    children: [
      {
        path: "editar/:id",
        component: AlunosComponent,
        resolve: {
          alunoresolvido: AlunoResolverGuard,
        },
      },
    ],
  },
];
