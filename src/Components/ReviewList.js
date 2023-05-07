import React, {Component} from 'react';
import ReactStars from "react-stars";

// ReviewList: a container inside of a Movie that houses Review components.

export default class ReviewList extends Component {

   render() {
      return (
       <div className='card bg-dark'>
          <div className='card-body'>
             <p>"{this.props.review}"
             </p>
             <ReactStars
                className='d-flex justify-content-center'
                count={5}
                value={this.props.stars}
                size={40}
                color2={'#ff9100'}
                edit={false}
                half={true}
             />
            
          </div>
       </div>
      )
  }
}