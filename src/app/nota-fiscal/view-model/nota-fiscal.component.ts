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
export class ViewModelComponent implements OnInit {
  constructor(
    private notaService: NotaFiscalService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {}
  notasForm!: FormGroup;
  notas$!: NotaFiscal;

  ngOnInit(): void {
    this.notasForm = this.initForm();
  }

  changeRouter(rota: string) {
    this.router.navigateByUrl(rota);
  }

  clearText() {
    this.notasForm.reset();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required]],
      preco: ['', [Validators.required]],
      data: ['', [Validators.required]],
    });
  }

  submitForm() {
    this.notas$ = {
      nome: this.notasForm.value.nome,
      email: this.notasForm.value.email,
      preco: this.notasForm.value.preco,
      data: this.notasForm.value.data,
    };

    this.notaService.createNota(this.notas$);
    // this.router.navigate(['/?']);
  }

  carregarNota(uuid: string) {
    this.notaService.loadNota(uuid).subscribe();
  }

  carregarNotas() {
    this.notaService.loadNotas().subscribe();
  }

  atualizarNota(uuid: string, nota: NotaFiscal) {
    this.notaService.updateNota(uuid, nota).subscribe();
  }

  DeletarNota(uuid: string, nota: NotaFiscal) {
    this.notaService.deleteNota(uuid).subscribe();
  }
}
