import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mylib4Component } from '@ngdaydemo/mylib-4';

@Component({
  selector: 'lib-mylib-1',
  standalone: true,
  imports: [CommonModule, Mylib4Component],
  templateUrl: './mylib-1.component.html',
  styleUrl: './mylib-1.component.css',
})
export class Mylib1Component {}
