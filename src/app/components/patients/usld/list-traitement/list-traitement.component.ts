import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Traitement } from '../../../../models/traitement.model';
import { TraitementService } from '../../../../services/traitement.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-traitement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-traitement.component.html',
  styleUrl: './list-traitement.component.css'
})
export class ListTraitementComponent implements OnInit {

  traitements: Traitement[] = [];

  messageErreur = '';

  constructor(private traitementService: TraitementService,
    private router: Router) { }

  ngOnInit(): void {
    this.chargerTraitements();
  }
  chargerTraitements(): void {
    this.traitementService.findAll().subscribe({
      next: (traitements) => {
        this.traitements = traitements;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des traitements ', error);
        this.messageErreur = 'Impossible de charger les traitements';

      }
    });
  }
  modifierTraitement(id: number): void {
    this.router.navigate(['/usld/traitements/modifier', id]);
  }

}
