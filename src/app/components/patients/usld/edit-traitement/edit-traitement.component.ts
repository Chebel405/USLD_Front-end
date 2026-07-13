import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Traitement } from '../../../../models/traitement.model';
import { TraitementService } from '../../../../services/traitement.service';

@Component({
  selector: 'app-edit-traitement',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-traitement.component.html',
  styleUrl: './edit-traitement.component.css'
})
export class EditTraitementComponent implements OnInit {

  traitement?: Traitement;
  messageErreur = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private traitementService: TraitementService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!id) {
      this.messageErreur = 'Identifiant du traitement invalide.';
      return;
    }

    this.chargerTraitement(id);

  }

  chargerTraitement(id: number): void {
    this.traitementService.getById(id).subscribe({
      next: (traitement) => {
        this.traitement = traitement;
      },
      error: (error) => {
        console.error('Erreur lors du chargement du traitement', error);
        this.messageErreur = 'Impossible de charger le traitement';
      }
    });
  }

  enregistrerModification(): void {
    if (!this.traitement?.id) {
      return;
    }
    this.traitementService
      .update(this.traitement.id, this.traitement)
      .subscribe({
        next: () => {
          this.router.navigate(['/usld/traitements']);
        },
        error: (error) => {
          console.error('Erreur lors de la modification', error);
          this.messageErreur = 'Impossible de modifier le traitement.';
        }
      })
  }


}
