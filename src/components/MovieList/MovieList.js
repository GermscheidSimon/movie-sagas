import React, { Component } from 'react'
import {connect} from 'react-redux'

class MovieList extends Component {


    componentDidMount = () => {
        this.getMovieList()
    }

    getMovieList = () => {
        this.props.dispatch({
            type: "FETCH_MOVIE_LIST"
        })
    }
    // {this.props.reduxState.movies.maps( movieObj => {
    //     return <p>{JSON.stringify(movieObj)}</p>
    // })}


    render(){
        return(
            <div className="movieListWrap">
                {JSON.stringify(this.props)}
            </div>
        )
    }
}

const addReduxStateToProps = (reduxState) => ({reduxState})
export default connect(addReduxStateToProps)(MovieList);