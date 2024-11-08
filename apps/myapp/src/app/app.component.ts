import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Mylib1Component } from '@ngdaydemo/mylib-1';
import { Mylib2Component } from '@ngdaydemo/mylib-2';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, Mylib1Component, Mylib2Component],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myapp';
}
