import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mylib3Component } from '@ngdaydemo/mylib-3';

@Component({
  selector: 'lib-mylib-2',
  standalone: true,
  imports: [CommonModule, Mylib3Component],
  templateUrl: './mylib-2.component.html',
  styleUrl: './mylib-2.component.css',
})
export class Mylib2Component {
  title = 'mylib2';
}
