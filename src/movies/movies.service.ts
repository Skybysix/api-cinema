import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {

  findAll() {
    return [
      {
        id: 1,
        title: 'Interstellar',
        year: 2014,
        genre: 'Ciencia ficción',
      },
      {
        id: 2,
        title: 'The Godfather',
        year: 1972,
        genre: 'Drama',
      },
      {
        id: 3,
        title: 'Pulp Fiction',
        year: 1994,
        genre: 'Crimen',
      },
    ];
  }

}
