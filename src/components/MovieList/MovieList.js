import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieItem from '../MovieItem/MovieItem'

import './MovieList.css'

class MovieList extends Component {


    componentDidMount = () => {
        this.getMovieList()
    }

    getMovieList = () => {
        this.props.dispatch({
            type: "FETCH_MOVIE_LIST"
        })
    }

    render(){
        
        return(
            <div className="movieListWrap">
                {this.props.reduxState.movies.map( movieRecord => {
                    return <MovieItem key={movieRecord.id} movieRecord={movieRecord}/>
                })}
            </div>
        )
    }
}

const addReduxStateToProps = (reduxState) => ({reduxState})
export default connect(addReduxStateToProps)(MovieList);