
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WineDataService } from '../wine-data.service'; 
import { Wines } from '../wines-list/Wines';

@Component({
  selector: 'app-wine-detail',
  standalone: false,
  templateUrl: './wine-detail.component.html',
  styleUrl: './wine-detail.component.scss'
})

export class WineDetailComponent implements OnInit {
  wineId!: string;
  wine!: Wines | null;

  constructor(
    private route: ActivatedRoute,
    private wineService: WineDataService
  ) {}

  ngOnInit(): void {
    this.wineId = this.route.snapshot.paramMap.get('id')!;
    this.wineService.getById(this.wineId).subscribe((wine) => {
      this.wine = wine;
    });
  }
}