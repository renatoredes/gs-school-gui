import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { TablesRoutes } from "./tables.routing";

import { ExtendedTableComponent } from "./extendedtable/extendedtable.component";
import { RegularTableComponent } from "./regulartable/regulartable.component";
import { DataTableComponent } from "./datatable.net/datatable.component";
import { PesquisarAlunoComponent } from "./pesquisar-aluno/pesquisar-aluno.component";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { DataTableAlunoComponent } from './data-table-aluno/data-table-aluno.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TablesRoutes),
    FormsModule,
    JwBootstrapSwitchNg2Module,

    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [
    ExtendedTableComponent,
    DataTableComponent,
    RegularTableComponent,
    PesquisarAlunoComponent,
    DataTableAlunoComponent,
  ],
})
export class TablesModule {}
