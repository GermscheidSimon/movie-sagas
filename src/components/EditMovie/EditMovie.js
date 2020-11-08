import React, { Component } from 'react'
import {connect} from 'react-redux'
import './EditMovie.css'
import {router_PushToHistory} from '../../library/navigation'

class AddMovie extends Component{

    state = {
        newMovie: {
            title: 'test',
            poster: 'test',
            description: 'test',
            genres: [{
                id: 0,
                genres_id: '',
                name: ''
            }]
        }
    }
    componentDidMount = () => {
        this.fetchGenres();
        this.fetchMovieData();
    }

    fetchMovieData = () => {
        this.props.dispatch({
            type: "FETCH_MOVIE_DETAILS",
            payload: this.props.match.params
        })
        let movieData = this.props.reduxState.movieDetails.movieDetails
        let genreData = this.props.reduxState.movieDetails.movieGenres
        this.setState({
            newMovie: {
                title: movieData.title,
                poster: movieData.poster,
                description: movieData.description,
                genres: genreData
            }
        })
    }

    fetchGenres = () => {
        this.props.dispatch({
            type: "FETCH_GENRES"
        });
    }
    handleChange = (keyname, event) => {        
        this.setState({
            newMovie:{
                ...this.state.newMovie,
                [keyname]: event.target.value
            }
        });
        console.log(this.state.newMovie);
    }
    // handleSubmit = () => {
    //     let newMovieSubmission = {
    //         data: this.state.newMovie,
    //         nav: this
    //     }
    //     this.props.dispatch({
    //         type: "POST_NEW_MOVIE",
    //         payload: newMovieSubmission
    //     })

    // }
    redirectToHome = () => {
        router_PushToHistory('/', this)
    }
    submit = () => {
        console.log(this.state);
        
    }

    render() {
        return(
            <div className="addMovieWrap">
                <div className="addMovieHeader">Add a movie</div>
                <form className="formWrap" onSubmit={this.submit}>
                    <div className="formInputWrap">
                        <label htmlFor="movieTitleInp">Movie Title:  </label>
                            <input 
                                className="formInput movieTitleInp"
                                required
                                onChange={(event) => this.handleChange('title', event)} 
                                placeholder="'Lord of the Rings...'"
                                value={this.state.newMovie.title}
                            />
                    </div>
                    <div className="formInputWrap">
                        <label htmlFor="moviePosterInp">Movie Poster Link:  </label>
                            <input 
                                className="formInput moviePosterInp"
                                required
                                onChange={(event) => this.handleChange('poster', event)} 
                                placeholder="http:// . . ."
                                value={this.state.newMovie.poster}
                            />
                    </div>
                    <div className="formInputWrap"> 
                        <label htmlFor="movieDescriptionInp">Movie description:  </label>
                            <textarea 
                                className="formInput movieDescriptionInp"
                                required
                                onChange={(event) => this.handleChange('description', event)} 
                                placeholder="An epic fantasy film . . . "
                                value={this.state.newMovie.description}
                            />
                    </div>
                    <div className="formInputWrap">
                        <label  htmlFor="movieGenreSelect">Movie Genre: </label>
                        <select 
                            className="formInput movieGenreSelect"
                            required
                            onChange={(event) => this.handleChange('genre_id', event)}
                        >
                            <option key="0" value={this.state.newMovie.genre_id}>{this.state.newMovie.id}</option> 
                            {this.props.reduxState.genres.map( genre => {
                                
                                // return an option for each genre pulled from sql
                                return <option key={genre.id} value={genre.id}>{genre.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="formInputWrap">
                        <input className="formInput defaultBtnCss" type="submit" value="Save"/>
                        <button  className="defaultBtnCss cancel" onClick={this.redirectToHome}>Cancel</button>
                    </div>
                </form>
                <button onClick={this.submit}>test</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})
export default connect(putReduxStateOnProps)(AddMovie);