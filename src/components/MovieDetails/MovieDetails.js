import React, { Component } from 'react'
import {connect} from 'react-redux'
import {router_PushToHistory} from '../../library/navigation'

import './MovieDetails.css'

/**
    movieDetails reducer JSON structure~~~~

    const detailState = { 
    details: {  this data comes from the movie list page when it is clicked. 
        id: 0,
        title: 'Movie Title',
        description: 'description',
        poster: 'image path'
        },
    genres: {          genre's data comes from the GET /api/movie/:id route that pulls in genre data for the given movie ID. 
        data: [
            {
                id: 0,
                movies_id: 0,
                genres_id: 0,
                name: 'genre name'
            }
        ]
        }
    }
     */

class MovieDetails extends Component{

    handleClick = () => {
        router_PushToHistory('/', this)
    }


    render(){

        const movieDetails = this.props.reduxState.movieDetails


        return(
            <div className="movieDetailsWrap">
                <div className="detailTopOfPage">
                    <div className="titleWrap">
                        <p className="movieTitle">{movieDetails.details.title}</p>
                        <ul>
                            {movieDetails.genres.data.map(genre => {
                                return <li>{genre.name}</li>
                            })}
                        </ul>
                    </div>
                    <button onClick={this.handleClick}> Return To Movie List...</button>
                </div>
                <img className="moviePoster" src={movieDetails.details.poster} alt={movieDetails.details.title}/>
                <p className="description">{movieDetails.details.description}</p>
                
                
            </div>
        )
    }
}

const addReduxStateToProps = (reduxState) => ({reduxState})
export default connect(addReduxStateToProps)(MovieDetails);