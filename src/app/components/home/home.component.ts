import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]

})
export class HomeComponent implements OnInit {
  role: string = '';
  isAdmin: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.role = payload.role;
      this.isAdmin = payload.role === 'ADMIN';
    }
  }

  goTo(route: string): void {
    this.router.navigate([route]);
  }
}
