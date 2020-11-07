import React, { Component } from 'react'
import {connect} from 'react-redux'
import './AddMovie.css'

class AddMovie extends Component{

    componentDidMount = () => {
        this.fetchGenres();
    }

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: ''
        } 
    }

    fetchGenres = () => {
        this.props.dispatch({
            type: "FETCH_GENRES"
        });
    }


    render() {
        return(
            <div className="addMovieWrap">
                <div className="addMovieHeader">Add a movie</div>
                <div className="formWrap">
                    <div>
                        <label htmlFor="movieTitleInp">Movie Title:  </label>
                            <input className="movieTitleInp" placeholder="'Lord of the Rings...'"/>
                    </div>
                    <div>
                        <label htmlFor="moviePosterInp">Movie Poster Link:  </label>
                            <input className="moviePosterInp" placeholder="http:// . . ."/>
                    </div>
                    <div>
                        <label htmlFor="movieDescriptionInp">Movie Poster Link:  </label>
                            <textarea className="movieDescriptionInp" placeholder="an epic fantasy film . . . "/>
                    </div>
                    <div>
                        <label  htmlFor="movieGenreSelect">Movie Genre: </label>
                        <select className="movieGenreSelect">
                            {this.props.reduxState.genres.map( genre => {
                                 return <option value={genre.id}>{genre.name}</option>
                            })}
                        </select>
                    </div>
                    <button>Add Movie</button>
                </div>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})
export default connect(putReduxStateOnProps)(AddMovie);