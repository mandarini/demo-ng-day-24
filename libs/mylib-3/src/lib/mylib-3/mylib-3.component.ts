import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-mylib-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mylib-3.component.html',
  styleUrl: './mylib-3.component.css',
})
export class Mylib3Component {
  title = 'Mylib3';
}
