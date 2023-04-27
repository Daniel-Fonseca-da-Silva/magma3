import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NotaFiscalModule } from './nota-fiscal/nota-fiscal.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/view-model/header.component';
import { Routes } from '@angular/router';
import { NotaFiscalComponent } from './nota-fiscal/view-model/nota-fiscal.component';
import { HeaderModule } from './header/header.module';

const appRoutes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'notas', component: NotaFiscalComponent },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NotaFiscalModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
