import React, { Component } from 'react'
import './MovieItem.css'

class MovieItem extends Component{


    render() {

        // creating readable alt tag
        let altInfo = this.props.movieRecord.title + ' Movie poster image'
        return(
           <div className="movieItemWrap" >
                <img src={this.props.movieRecord.poster} alt={altInfo} ></img>
                <p className="title">{this.props.movieRecord.title}</p>
                <p className="description">{this.props.movieRecord.description}</p>
           </div>
        )
    }
}


export default MovieItem;