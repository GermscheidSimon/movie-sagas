import React, { Component } from 'react'
import './MovieItem.css'

class MovieItem extends Component{

    handleItemCardSelect = () => {
        console.log(this.props);
        
    }
    render() {

        // creating readable alt tag
        let altInfo = this.props.movieRecord.title + ' Movie poster image'
        // max char to display
        let maxDescriptionLength = this.props.movieRecord.description.substring(0,150);
        return(
           <div className="movieItemWrap" onClick={this.handleItemCardSelect}>
                <img src={this.props.movieRecord.poster} alt={altInfo} ></img>
                <p className="title">{this.props.movieRecord.title}</p>
                <p className="description">{maxDescriptionLength} <span className ="endDescText"> . . . click to continue Reading</span> </p>
           </div>
        )
    }
}


export default MovieItem;