import React, { Component } from 'react'
import {connect} from 'react-redux'

import './MovieDetails.css'

class MovieDetails extends Component{


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


    render(){

        const movieDetails = this.props.reduxState.movieDetails


        return(
            <div className="movieDetailsWrap">
                <p className="movieTitle">{movieDetails.details.title}</p>
                <ul>
                    {movieDetails.genres.data.map(genre => {
                        return <li>{genre.name}</li>
                    })}
                </ul>
                <img className="moviePoster" src={movieDetails.details.poster} alt={movieDetails.details.title}/>
                <p>{movieDetails.details.description}</p>
                
                
            </div>
        )
    }
}

const addReduxStateToProps = (reduxState) => ({reduxState})
export default connect(addReduxStateToProps)(MovieDetails);