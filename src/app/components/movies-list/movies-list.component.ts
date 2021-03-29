import { Component, OnInit } from '@angular/core';
import { Movies } from "../../modal/movies";
import data from "../data/movies.json";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  moviesList: Movies[];

  constructor() { }

  ngOnInit(): void {
    this.moviesList = data;
  }

  onSearchFilter(e: any) {
    this.moviesList = data;
    this.moviesList = this.moviesList.filter(res => res.name.toLocaleLowerCase().match(e.target.value.toLocaleLowerCase()))

  }

}
