import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(public authService: AuthService, private router: Router) { }

    logout(): void {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    ngOnInit() {
        console.log("Connecté ?", this.authService.isLoggedIn());
    }

}
