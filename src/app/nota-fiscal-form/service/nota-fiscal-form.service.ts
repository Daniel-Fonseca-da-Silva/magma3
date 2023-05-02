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
  apiURL = 'https://localhost:7076/api/Nota';
  
  createNota(nota: NotaFiscal) {
    return this._httpClient.post(this.apiURL, nota).subscribe();
  }
}
