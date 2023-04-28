import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from '../header/header.module';
import { NotaFiscalFormComponent } from './view-model/nota-fiscal-form.component';

@NgModule({
  declarations: [NotaFiscalFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HeaderModule,
  ],
  exports: [NotaFiscalFormComponent],
})
export class NotaFiscalFormModule {}
