import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  redirectToGitHub(): void {
    window.location.href = 'https://github.com/ramiro-cornejo/productApi'; 
  }
}
