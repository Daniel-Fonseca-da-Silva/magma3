import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: '../view/main.component.html',
  styleUrls: ['../view/main.component.css'],
})
export class MainComponent {
  constructor(private readonly router: Router) {}
  btnClick = () => this.router.navigateByUrl('/notas');
  btnClickCreate = () => this.router.navigateByUrl('/notas-form');
}
