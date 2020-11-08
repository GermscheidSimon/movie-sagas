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

    handleClick = (destination) => {
        router_PushToHistory(destination, this)
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
                    <button className="defaultBtnCss" onClick={() => this.handleClick('/')}> Return To Movie List...</button>
                    <button className="defaultBtnCss" onClick={() => this.handleClick(`/edit/${movieDetailsData.movieDetails.id}`)}> Edit Movie </button>

                </div>
                <img className="moviePoster" src={movieDetailsData.movieDetails.poster} alt={movieDetailsData.movieDetails.title}/> 
                <p className="description">{movieDetailsData.movieDetails.description}</p>
                
                
            </div>
        )
    }
}

const addReduxStateToProps = (reduxState) => ({reduxState})
export default connect(addReduxStateToProps)(MovieDetails);