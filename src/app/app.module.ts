import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { SidebarModule } from "./sidebar/sidebar.module";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { PagesnavbarModule } from "./shared/pagesnavbar/pagesnavbar.module";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { AppRoutes } from "./app.routing";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { BrowserModule } from "@angular/platform-browser";
import { ConfirmeModalComponent } from "./shared/confirme-modal/confirme-modal.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
    }),
    HttpModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    PagesnavbarModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ConfirmeModalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
