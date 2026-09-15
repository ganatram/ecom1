import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'admin-comp',
  templateUrl: 'admin.component.html',
  standalone: false,
})
export class AdminComponent {
  constructor(private router: Router) {}

  logout() {
    this.router.navigateByUrl('/'); // switches to the default path
  }
}
