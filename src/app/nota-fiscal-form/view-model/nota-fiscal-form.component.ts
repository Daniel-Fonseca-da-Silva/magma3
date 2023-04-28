import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotaFiscal } from '../model/nota-fiscal';
import { NotaFiscalFormService } from '../service/nota-fiscal-form.service';

@Component({
  selector: 'app-nota-fiscal-form',
  templateUrl: '../view/nota-fiscal-form.component.html',
  styleUrls: ['../view/nota-fiscal-form.component.css'],
})
export class NotaFiscalFormComponent implements OnInit {
  constructor(
    private notaFiscalFormService: NotaFiscalFormService,
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

    this.notaFiscalFormService.createNota(this.notas$);
    this.router.navigate(['/']);
  }
}
