import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-resource',
  styleUrl: './resource.css',
  templateUrl: './resource.html',
})
export class Resource {
    canLeave(): boolean {
    return confirm('Are you sure you want to leave this page?');
  }
}
