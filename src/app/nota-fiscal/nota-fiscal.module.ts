import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModelComponent } from './view-model/nota-fiscal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewModelComponent],
  imports: [CommonModule, FormsModule],
  exports: [ViewModelComponent],
})
export class NotaFiscalModule {}
