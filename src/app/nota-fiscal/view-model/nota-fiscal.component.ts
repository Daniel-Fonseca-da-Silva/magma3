import { Component } from '@angular/core';
import { NotaFiscal } from '../model/nota-fiscal';
import { NotaFiscalService } from '../service/nota-fiscal.service';

@Component({
  selector: 'app-nota-form',
  templateUrl: '../view/nota-fiscal.html',
  styleUrls: ['../view/nota-fiscal.css'],
})
export class ViewModelComponent {
  constructor(private notaService: NotaFiscalService) {}
  nota!: NotaFiscal;

  save() {
    console.log('nota: ' + this.nota);
  }

  carregarNota(uuid: string) {
    this.notaService.loadNota(uuid).subscribe();
  }

  carregarNotas() {
    this.notaService.loadNotas().subscribe();
  }

  CriarNota(nota: NotaFiscal) {
    this.notaService.createNota(nota);
  }

  atualizarNota(uuid: string, nota: NotaFiscal) {
    this.notaService.updateNota(uuid, nota).subscribe();
  }

  DeletarNota(uuid: string, nota: NotaFiscal) {
    this.notaService.deleteNota(uuid).subscribe();
  }
}
