import { AlertModalService } from "./alert-modal/alert-modal.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampoControlErroComponent } from "./campo-control-erro/campo-control-erro.component";
import { ErrorMsgComponent } from "./error-msg/error-msg.component";
import { AlertModalComponent } from "./alert-modal/alert-modal.component";
import { ConfirmModalComponent } from "./confirm-modal/confirm-modal.component";
@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [
    //componentes deste modulo
    CampoControlErroComponent,
    ErrorMsgComponent,
    AlertModalComponent,
    ConfirmModalComponent,
  ],
  exports: [
    //expor os componentes
    CampoControlErroComponent,
    ErrorMsgComponent,
    AlertModalComponent,
    ConfirmModalComponent,
  ], //,
  //providers: [  ]
})
export class SharedModule {}
