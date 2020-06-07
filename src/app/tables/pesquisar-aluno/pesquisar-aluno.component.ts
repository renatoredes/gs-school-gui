import { AlertModalService } from "./../../shared/alert-modal/alert-modal.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable, empty, EMPTY } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, take, switchMap } from "rxjs/operators";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

import { Aluno } from "./../../model/aluno";
import { AlunosService } from "./../../core/alunos.service";

declare var $: any;

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

@Component({
  moduleId: module.id,
  selector: "app-pesquisar-aluno",
  templateUrl: "./pesquisar-aluno.component.html",
  styleUrls: ["./pesquisar-aluno.component.css"],
})
export class PesquisarAlunoComponent implements OnInit {
  public dataTable: DataTable;
  alunos$: Observable<Aluno[]>;
  alunoSelecionado: Aluno;

  deleteModalRef: BsModalRef;
  /**referencia de uma variavel do template */
  @ViewChild("deleteModal", { static: true }) deleteModal;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunoService: AlunosService,
    private modalService: BsModalService,
    private alertService: AlertModalService
  ) {}

  ngOnInit() {
    this.onRefresh();

    // Eu posso passar um Obseervable    this.alunos$ = this.alunoService.listAlunoService();
    this.alunoService.listAlunoService().subscribe((dados) => {
      console.log(dados);
      this.dataTable = {
        headerRow: ["Id", "Nome", "Email", "Cidade", "Cep", "Actions"],
        footerRow: ["Id", "Nome", "Email", "Cidade", "Cep", "Actions"],
        dataRows: dados,
      };
    });
  }

  // Chama o serviço para obtém todos os carros

  onEdit(id) {
    this.router.navigate(["forms/editar", id]); //{ relativeTo: this.route }
  }

  onDelete(aluno) {
    this.alunoSelecionado = aluno;
    // this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' });
    const result$ = this.alertService.showConfirm(
      "Confirmacao",
      "Tem certeza que deseja remover esse aluno?"
    );
    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) =>
          result ? this.alunoService.remove(aluno.id) : EMPTY
        )
      )
      .subscribe(
        (success) => {
          this.alertService.showAlertDanger("Aluno Removido do Sistema");
        },
        (error) => {
          this.alertService.showAlertDanger(
            "Erro ao remover o aluno. Tente novamente mais tarde."
          );
          this.deleteModalRef.hide();
        }
      );
  }
  onConfirmDelete() {
    this.alunoService.remove(this.alunoSelecionado.id).subscribe(
      (succes) => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      (error) => {
        this.alertService.showAlertDanger(
          "Erro ao remover aluno. Tente novamente mais tarde."
        );
        this.deleteModalRef.hide();
      }
    );
  }
  onDeclineDelete() {
    this.deleteModalRef.hide();
  }

  handleError() {
    //  this.alertService.showAlertDanger('Erro ao carregar. Tente novamente mais tarde.');
    console.log("erro ao carregar lista de alunos");
  }

  ngAfterViewInit() {
    $("#datatables").DataTable({
      pagingType: "full_numbers",
      lengthMenu: [
        [10, 25, 50, -1],
        [10, 25, 50, "All"],
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      },
    });
  }

  onRefresh() {
    this.alunos$ = this.alunoService.listAlunoService().pipe(
      // map(),
      // tap(),
      // switchMap(),
      catchError((error) => {
        console.error(error);
        // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }
}
