import React, { Component } from 'react'
import {connect} from 'react-redux'
import './AddMovie.css'
import {router_PushToHistory} from '../../library/navigation'

class AddMovie extends Component{

    state = {
        newMovie: {
            title: '',
            poster: '',
            description: '',
            genre_id: 0
        } 
    }
    componentDidMount = () => {
        this.fetchGenres();
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
    handleSubmit = () => {
        let newMovieSubmission = {
            data: this.state.newMovie,
            nav: this
        }
        this.props.dispatch({
            type: "POST_NEW_MOVIE",
            payload: newMovieSubmission
        })
    }
    redirectToHome = () => {
        router_PushToHistory('/', this)
    }


    render() {
        return(
            <div className="addMovieWrap">
                <div className="addMovieHeader">Add a movie</div>
                <form className="formWrap" onSubmit={this.handleSubmit}>
                    <div className="formInputWrap">
                        <label htmlFor="movieTitleInp">Movie Title:  </label>
                            <input 
                                className="formInput movieTitleInp"
                                required
                                onChange={(event) => this.handleChange('title', event)} 
                                placeholder="'Lord of the Rings...'"
                            />
                    </div>
                    <div className="formInputWrap">
                        <label htmlFor="moviePosterInp">Movie Poster Link:  </label>
                            <input 
                                className="formInput moviePosterInp"
                                required
                                onChange={(event) => this.handleChange('poster', event)} 
                                placeholder="http:// . . ."
                            />
                    </div>
                    <div className="formInputWrap"> 
                        <label htmlFor="movieDescriptionInp">Movie Poster Link:  </label>
                            <textarea 
                                className="formInput movieDescriptionInp"
                                required
                                onChange={(event) => this.handleChange('description', event)} 
                                placeholder="An epic fantasy film . . . "
                            />
                    </div>
                    <div className="formInputWrap">
                        <label  htmlFor="movieGenreSelect">Movie Genre: </label>
                        <select 
                            className="formInput movieGenreSelect"
                            required
                            onChange={(event) => this.handleChange('genre_id', event)}
                        >
                            <option value="">Select a genre</option> 
                            {this.props.reduxState.genres.map( genre => {
                                // return an option for each genre pulled from sql
                                return <option value={genre.id}>{genre.name}</option>
                            })}
                        </select>
                    </div>
                    <div className="formInputWrap">
                        <input className="formInput defaultBtnCss" type="submit" value="Add Movie"/>
                        <button  className="defaultBtnCss cancel" onClick={this.redirectToHome}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})
export default connect(putReduxStateOnProps)(AddMovie);