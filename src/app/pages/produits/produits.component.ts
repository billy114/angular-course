import {Component, OnInit} from '@angular/core';
import {ProduitService} from '../../core/services/api/produit.service';
import {Produit} from '../../core/models/produit';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-produits',
  standalone: true,
  imports: [
    DecimalPipe
  ],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.scss'
})
export class ProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService : ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(
      response => {
        this.produits = response.products;
      }
    )
  }
}
