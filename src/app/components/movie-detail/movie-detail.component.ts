import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movies } from 'src/app/modal/movies';
import data from "../data/movies.json";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  moviesList: Movies[];
  movie: Movies;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.moviesList = data;
    let movi = this.moviesList.filter(res => res.id === parseInt(id));
    this.movie = movi[0];
  }

}
