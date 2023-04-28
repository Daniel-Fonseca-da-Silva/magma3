import { Component, OnInit } from '@angular/core';
import { NotaFiscal } from '../model/nota-fiscal';
import { NotaFiscalService } from '../service/nota-fiscal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota-form',
  templateUrl: '../view/nota-fiscal.html',
  styleUrls: ['../view/nota-fiscal.css'],
})
export class NotaFiscalComponent implements OnInit {
  constructor(
    private notaService: NotaFiscalService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}
  NotasToUpdate$!: NotaFiscal;
  notas$!: NotaFiscal;
  showPanelEdit: boolean = false;
  displayStyle = 'none';
  searchForm!: FormGroup;
  notasFormList!: FormGroup;

  ngOnInit(): void {
    this.searchForm = this.initForm();
  }

  changeRouter(rota: string) {
    this.router.navigateByUrl(rota);
  }

  clearText(): void {
    this.searchForm.reset();
    this.displayStyle = 'none';
    this.showPanelEdit = false;
  }

  initForm(): FormGroup {
    return this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  onDelete(): void {
    this.notaService.deleteNota(this.notas$.id!).subscribe();
    this.displayStyle = 'none';
  }

  callFormUpdate(): void {
    this.showPanelEdit = true;
    this.notasFormList = this.initFormNotas();
  }

  initFormNotas(): FormGroup {
    return this.fb.group({
      nome: [this.notas$.nome, [Validators.required]],
      email: [this.notas$.email, [Validators.required]],
      preco: [this.notas$.preco, [Validators.required]],
      data: [this.notas$.data, [Validators.required]],
    });
  }

  onSubmit(): NotaFiscal {
    this.notas$ = this.notaService
      .loadNota(this.searchForm.value.nome)
      .subscribe((dado: NotaFiscal) => (this.notas$ = dado));
    this.showPanelEdit = false;
    return this.notas$;
  }

  onSubmitUpdate(): void {
    this.NotasToUpdate$ = {
      nome: this.notasFormList.value.nome,
      email: this.notasFormList.value.email,
      preco: this.notasFormList.value.preco,
      data: this.notasFormList.value.data,
    };
    this.notaService
      .updateNota(this.notas$.id!, this.NotasToUpdate$)
      .subscribe();
    this.showPanelEdit = false;
  }

  clearTextUpdate(): void {
    this.notasFormList.reset();
  }

  openPopup(): void {
    this.displayStyle = 'block';
  }
  closePopup(): void {
    this.displayStyle = 'none';
  }

  carregarNotas() {
    this.notaService.loadNotas().subscribe();
  }

  atualizarNota(uuid: number, nota: NotaFiscal) {
    this.notaService.updateNota(uuid, nota).subscribe();
  }

  DeletarNota(uuid: number, nota: NotaFiscal) {
    this.notaService.deleteNota(uuid).subscribe();
  }
}
