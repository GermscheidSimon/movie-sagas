import React, { Component } from 'react'

class MovieItem extends Component{


    render() {

        // creating readable alt tag
        let altInfo = this.props.movieRecord.title + ' Movie poster image'
        return(
           <div className="movieItemWrap" >
               <img src={this.props.movieRecord.poster} alt={altInfo} ></img>
           </div>
        )
    }
}


export default MovieItem;