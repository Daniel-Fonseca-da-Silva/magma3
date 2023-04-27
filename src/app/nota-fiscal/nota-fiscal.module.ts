import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotaFiscalComponent } from './view-model/nota-fiscal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [NotaFiscalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule,
  ],
  exports: [NotaFiscalComponent],
})
export class NotaFiscalModule {}
