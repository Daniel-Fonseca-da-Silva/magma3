import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotaFiscal } from '../model/nota-fiscal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotaFiscalService {
  constructor(private readonly _httpClient: HttpClient) {}

  // API endpoint/
  apiURL = 'http://localhost:7076/api/notas';

  loadNota(id: string): any {
    return this._httpClient.get(this.apiURL + '/' + id);
  }

  loadNotas() {
    return this._httpClient.get(this.apiURL);
  }

  createNota(nota: NotaFiscal) {
    return this._httpClient.post(this.apiURL, nota).subscribe();
  }

  updateNota(id: number, nota: NotaFiscal): Observable<NotaFiscal> {
    return this._httpClient.patch<NotaFiscal>(this.apiURL + id, nota);
  }

  deleteNota(id: number): Observable<any> {
    return this._httpClient.delete(this.apiURL + id);
  }
}
