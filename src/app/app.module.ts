import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NotaFiscalModule } from './nota-fiscal/nota-fiscal.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NotaFiscalComponent } from './nota-fiscal/view-model/nota-fiscal.component';
import { HeaderModule } from './header/header.module';
import { MainComponent } from './main/view-model/main.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'notas', component: NotaFiscalComponent },
];

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NotaFiscalModule,
    HeaderModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
