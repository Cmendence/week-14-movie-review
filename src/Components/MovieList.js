import React, {Component} from 'react';
import Movie from './Movie';

//•	MovieList: a container for all the Movie components and their data.


export default class MovieList extends Component {

    render() {
        
              let movies = [
                  {
                     "id": 0,
                    "Title": "The Lion King",
                    "Year": "2019",
                    "Description": "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
                    "Runtime": "118 min",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
                  },
                  {
                     "id": 1,
                    "Title": "Mowgli: Legend of the Jungle",
                    "Year": "2018",
                    "Description": "A human child raised by wolves must face off against a menacing tiger named Shere Khan, as well as his own origins.",
                    "Runtime": "104 min",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
                  },
                  {
                     "id": 2,
                    "Title": "Doctor Strange",
                    "Year": "2016",
                    "Description": "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
                    "Runtime": "115 min",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
                  },
                  {
                     "id": 3,
                    "Title": "John Wick",
                    "Year": "2014",
                    "Description": "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.",
                    "Runtime": "101 min",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
                  },
                  {
                     "id": 4,
                    "Title": "The Notebook",
                    "Year": "2004",
                    "Description": "A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom. However, social differences soon get in the way.",
                    "Runtime": "123 min",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_SX300.jpg"
            
                  }
                ]
              
        
return (
    <div>
        {movies.map((movie, index) => (
            <Movie
               key={index}
               title={movie.Title}
               year={movie.Year}
               description={movie.Description}
               runtime={movie.Runtime}
               image={movie.Poster}
               />
        ))}
    </div>
)
        
    }


}