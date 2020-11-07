import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux'
import './MovieItem.css'

class MovieItem extends Component{

    handleItemCardSelect = () => {
        this.prepareData()
    }
    prepareData = () => {

        let movieInfoAndNav = {
            movieRecord: this.props.movieRecord,
            srcComp: this // want to pass up 'this' to index so that it can route on successful details load
        }
        console.log(this.props.movieRecord.id);
        this.props.dispatch({
            type: "FETCH_MOVIE_DETAILS",
            payload: movieInfoAndNav
        })
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

export default withRouter(connect()(MovieItem));