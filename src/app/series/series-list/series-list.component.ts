import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';


@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html'
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit() {
    this.seriesService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
    });
    
  }

  get averageSeasons(): number {
    return this.series.reduce((total, serie) => total + serie.seasons, 0) / this.series.length;
  }
}

