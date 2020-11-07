import React, { Component } from 'react'
import './AddMovie.css'

class AddMovie extends Component{


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
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddMovie;