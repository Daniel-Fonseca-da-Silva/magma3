import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModelComponent } from './view-model/nota-fiscal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ViewModelComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [ViewModelComponent],
})
export class NotaFiscalModule {}
