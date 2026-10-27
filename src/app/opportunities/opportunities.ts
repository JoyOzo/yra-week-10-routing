import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-opportunities',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './opportunities.html',
  styleUrl: './opportunities.css',
})
export class Opportunities {
    canLeave(): boolean {
    return confirm('Are you sure you want to leave this page?');
  }
}