import { AlertModalService } from "./../../shared/alert-modal/alert-modal.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { map, tap, distinctUntilChanged, switchMap } from "rxjs/operators";
import { Observable, empty } from "rxjs";

import { Location } from "@angular/common";
import { DropdownService } from "./../../core/dropdown.service";
import { AlunosService } from "app/core/alunos.service";
import { Aluno } from "app/model/aluno";
import { FormValidations } from "app/shared/form-validations";
import { Cidade } from "app/model/cidade";
import { EstadoBr } from "app/model/estado";
import { ConsultaCepService } from "app/core/consulta-cep.service";
import { ActivatedRoute } from "@angular/router";

declare var $: any;

@Component({
  selector: "app-alunos",
  templateUrl: "./alunos.component.html",
  styleUrls: ["./alunos.component.css"],
})
export class AlunosComponent implements OnInit {
  aluno = new Aluno();
  cidades: Cidade[];
  estados: EstadoBr[];
  formNovoAluno: FormGroup;
  submitted = false;
  constructor(
    private alunoService: AlunosService,
    private formBuilder: FormBuilder,
    private dropdownService: DropdownService,
    private cepService: ConsultaCepService,
    private route: ActivatedRoute,
    private location: Location,
    private alertModalService: AlertModalService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        map((params: any) => params["id"]),
        switchMap((id) => this.alunoService.loadByID(id))
      )
      .subscribe((aluno) => this.updateForm(aluno));

    //chamo o metodo que cria o forumalario de aluno e crio o formulario no momento da inicialização do componente
    this.createAluno(new Aluno());
    this.dropdownService
      .getEstadosBr()
      .subscribe((dados) => (this.estados = dados));
  }

  onSubmit() {
    // aqui fica a logica para o formulário salvar
    this.submitted = true;
    // console.log(this.formNovoAluno.value);
    let msgSuccess = "Aluno criado com sucesso!";
    let msgError = "Erro ao criar aluno, tente novamente!";

    if (this.formNovoAluno.valid) {
      if (this.formNovoAluno.value.id) {
        msgSuccess = "Aluno atualizado com sucesso!";
        msgError = "Erro ao atualizar aluno, tente novamente!";

        this.alunoService.update(this.formNovoAluno.value).subscribe(
          (success) => {
            this.alertModalService.showAlertSuccess(msgSuccess);
            this.location.back();
          },
          (error) => this.alertModalService.showAlertDanger(msgError)
        );
        this.resetarFormulario();
      } else {
        this.alunoService
          .createAlunoService(this.formNovoAluno.value)
          .subscribe(
            (success) => {
              this.alertModalService.showAlertSuccess(msgSuccess);
              this.location.back();
            },
            (error) => this.alertModalService.showAlertDanger(msgError)
          );
        this.resetarFormulario();
        // this.resetarFormulario();
        //  (error: any) => alert('erro');
      }
    }
    this.verificaValidacoesForm(this.formNovoAluno);
  }

  //atualiza o formulario
  updateForm(aluno) {
    console.log(aluno.endereco.complemento);
    this.formNovoAluno.patchValue({
      id: aluno.id,
      nome: aluno.nome,
      email: aluno.email,
      endereco: {
        cep: aluno.endereco.cep,
        numero: aluno.endereco.numero,
        complemento: aluno.endereco.complemento, // ta bugado o complemento
        rua: aluno.endereco.rua,
        bairro: aluno.endereco.bairro,
        cidade: aluno.endereco.cidade,
        estado: aluno.endereco.estado,
      },
    });
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      console.log(campo);
      const controle = formGroup.get(campo);
      // controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  createAluno(aluno: Aluno) {
    this.formNovoAluno = this.formBuilder.group({
      id: [null],
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(35),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],

      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
    });

    this.formNovoAluno
      .get("endereco.cep")
      .statusChanges.pipe(
        distinctUntilChanged(),
        tap((value) => console.log("status CEP:", value)),
        switchMap((status) =>
          status === "VALID"
            ? this.cepService.consultaCEP(
                this.formNovoAluno.get("endereco.cep").value
              )
            : empty()
        )
      )
      .subscribe((dados) => (dados ? this.populaDadosForm(dados) : {}));

    this.formNovoAluno
      .get("endereco.estado")
      .valueChanges.pipe(
        tap((estado) => console.log("Novo estado: ", estado)),
        map((estado) => this.estados.filter((e) => e.sigla === estado)),
        map((estados) =>
          estados && estados.length > 0 ? estados[0].id : empty()
        ),
        switchMap((estadoId: number) =>
          this.dropdownService.getCidades(estadoId)
        ),
        tap(console.log)
      )
      .subscribe((cidades) => (this.cidades = cidades));
  }

  consultaCEP() {
    const cep = this.formNovoAluno.get("endereco.cep").value;
    if (cep != null && cep !== "") {
      this.cepService
        .consultaCEP(cep)
        .subscribe((dados) => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados) {
    this.formNovoAluno.patchValue({
      endereco: {
        rua: dados.logradouro,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  resetarFormulario() {
    this.formNovoAluno.reset();
  }
  verificaValidTouched(campo) {
    return (
      !this.formNovoAluno.get(campo).valid &&
      this.formNovoAluno.get(campo).touched
    );
  }

  verificaEmailInvalido() {
    let campoEmail = this.formNovoAluno.get("email");
    if (campoEmail.errors) {
      return campoEmail.errors["email"] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo) {
    return {
      "has-error": this.verificaValidTouched(campo),
      "has-feedback": this.verificaValidTouched(campo),
    };
  }
}
