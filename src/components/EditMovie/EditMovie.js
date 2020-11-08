import React, { Component } from 'react'
import {connect} from 'react-redux'
import './EditMovie.css'
import {router_PushToHistory} from '../../library/navigation'


// when 'edit movie' is selected from the details page it works just fine, but if the page is refreshed
// it doesn't work. I don't understand why.
// in an attempt to get the page to pull in data after refresshing....
// I tried creating a generator function to procedurally add data to the state.
function* fetchMovieData(src) {
    yield src.props.dispatch({
        type: "FETCH_MOVIE_DETAILS",
        payload: src.props.match.params
    })
    let movieData = src.props.reduxState.movieDetails.movieDetails
    yield src.setState({
        newMovie: {
            title: movieData.title,
            poster: movieData.poster,
            description: movieData.description,
            id: movieData.id
        }
    })
}



class AddMovie extends Component{
    
    state = {
        newMovie: {
            title: 'Movie Title',
            poster: 'poster path',
            description: 'descirption',
            id: 0
        }, 
        datafetch: fetchMovieData(this) // this somehow works but not on page refresh
    }
    componentDidMount = () => {
        this.fetchGenres();
        this.state.datafetch.next()
        this.state.datafetch.next()
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
       console.log(this.state);
    }
    redirectToHome = () => {
        router_PushToHistory('/', this)
    }
    submit = () => {
        this.props.dispatch({
            type: 'UPDATE_MOVIE',
            payload: {
                data: this.state.newMovie,
                nav: this
            }
        })
        
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
                        <input className="formInput defaultBtnCss" type="submit" value="Save"/>
                        <button  className="defaultBtnCss cancel" onClick={this.redirectToHome}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({reduxState})
export default connect(putReduxStateOnProps)(AddMovie);