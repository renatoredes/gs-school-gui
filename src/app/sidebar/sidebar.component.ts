import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
} from "@angular/core";

declare var $: any;
//Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  // icon: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Home",
    type: "link",
    icontype: "pe-7s-graph",
  },
  {
    path: "/forms",
    title: "Cadastro",
    type: "sub",
    icontype: "pe-7s-note2",
    children: [
      { path: "novo", title: "Novo Aluno", ab: "RF" },
      //   { path: "regular", title: "Regular Forms", ab: "RF" },
    ],
  },

  {
    path: "/tables",
    title: "Pesquisa",
    type: "sub",
    icontype: "pe-7s-news-paper",
    children: [
      { path: "pesquisaralunos", title: "Alunos", ab: "DT" },
      //  { path: "pesquisaralunos", title: "Alunos", ab: "DT" },
    ],
  },
];

@Component({
  moduleId: module.id,
  selector: "sidebar-cmp",
  templateUrl: "sidebar.component.html",
})
export class SidebarComponent {
  public menuItems: any[];
  isNotMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  ngOnInit() {
    var isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;
    this.menuItems = ROUTES.filter((menuItem) => menuItem);

    isWindows = navigator.platform.indexOf("Win") > -1 ? true : false;

    if (isWindows) {
      // if we are on windows OS we activate the perfectScrollbar function
      $(".sidebar .sidebar-wrapper, .main-panel").perfectScrollbar();
      $("html").addClass("perfect-scrollbar-on");
    } else {
      $("html").addClass("perfect-scrollbar-off");
    }
  }
  ngAfterViewInit() {
    var $sidebarParent = $(".sidebar .nav > li.active .collapse li.active > a")
      .parent()
      .parent()
      .parent();

    var collapseId = $sidebarParent.siblings("a").attr("href");

    $(collapseId).collapse("show");
  }
}
