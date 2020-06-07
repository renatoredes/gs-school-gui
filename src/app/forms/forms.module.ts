import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EqualValidator } from "./equal-validator.directive";
import { LbdModule } from "../lbd/lbd.module";
import { FormsRoutes } from "./forms.routing";
import { TagInputModule } from "ngx-chips";
import { NouisliderModule } from "ng2-nouislider";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { AlunosComponent } from "./alunos/alunos.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormsRoutes),
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    LbdModule,
    SharedModule,
  ],
  declarations: [EqualValidator, AlunosComponent],
})
export class Forms {}
