import React, { Component } from 'react'
import {connect} from 'react-redux'
import {router_PushToHistory} from '../../library/navigation'

import './MovieDetails.css'

/**
    movieDetails reducer JSON structure~~~~

   
     */

class MovieDetails extends Component{

    componentDidMount = () => {
        this.getMovieDetials()
    }

    handleClick = () => {
        router_PushToHistory('/', this)
    }
    getMovieDetials = () => {    
        this.props.dispatch({
            type: "FETCH_MOVIE_DETAILS",
            payload: this.props.match.params
        })
    }


    render(){

        const movieDetailsData = this.props.reduxState.movieDetails


        return(
            <div className="movieDetailsWrap">
                <div className="detailTopOfPage">
                    <div className="titleWrap">
                        <p className="movieTitle">{movieDetailsData.movieDetails.title}</p>
                        <ul>
                            {movieDetailsData.movieGenres.map(genre => {
                                return <li>{genre.name}</li>
                            })}
                        </ul>
                    </div>
                    <button className="defaultBtnCss" onClick={this.handleClick}> Return To Movie List...</button>
                </div>
                <img className="moviePoster" src={movieDetailsData.movieDetails.poster} alt={movieDetailsData.movieDetails.title}/> 
                <p className="description">{movieDetailsData.movieDetails.description}</p>
                
                
            </div>
        )
    }
}

const addReduxStateToProps = (reduxState) => ({reduxState})
export default connect(addReduxStateToProps)(MovieDetails);