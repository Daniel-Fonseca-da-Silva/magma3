import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotaFiscal } from '../model/nota-fiscal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotaFiscalFormService {
  constructor(private readonly _httpClient: HttpClient) {}

  // API endpoint/
  apiURL = 'http://localhost:7076/api/notas';

  loadNota(uuid: string) {
    return this._httpClient.get(this.apiURL + '/' + uuid);
  }

  loadNotas() {
    return this._httpClient.get(this.apiURL);
  }

  createNota(nota: NotaFiscal) {
    return this._httpClient.post(this.apiURL, nota).subscribe();
  }

  updateNota(uuid: string, nota: NotaFiscal): Observable<NotaFiscal> {
    return this._httpClient.patch<NotaFiscal>(this.apiURL + uuid, nota);
  }

  deleteNota(uuid: string): Observable<any> {
    return this._httpClient.delete(this.apiURL + uuid);
  }
}
