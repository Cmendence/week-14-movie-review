import React, {Component} from 'react';
import ReviewForm from './ReviewForm';


//props passed in from MovieList 

export default class Movie extends Component {
   
   render() {
        return(
            <div className='container-fluid'>
               <div className='card bg-dark text-light'>
                  <div className='row'>
                     <div className='col-6-sm'>
                        <img src={this.props.image} 
                           alt="movie poster"
                           className='img-thumbnail mb-3 mt-3 bg-warning'
                        />
                     </div>
                     <div className='col-6-sm'>
                        <h1>{this.props.title}</h1>
                        <p className='ms-5 me-5'>{this.props.description}
                        </p>
                        <p>Year Released: {this.props.year}
                        </p>
                        <p>Runtime: {this.props.runtime}
                        </p>
                     </div>
                     <ReviewForm />
                  </div>
               </div>
            </div>

        )
    }


}