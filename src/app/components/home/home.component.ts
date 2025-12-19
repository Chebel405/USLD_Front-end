import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule]

})
export class HomeComponent implements OnInit {
  role: string = '';
  isAdmin: boolean = false;

  ngOnInit(): void {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      this.role = payload.role;
      this.isAdmin = payload.role === 'ADMIN';
    }
  }
}
