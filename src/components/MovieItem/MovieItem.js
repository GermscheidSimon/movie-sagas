import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import {router_PushToHistory} from '../../library/navigation'
import {connect} from 'react-redux'
import './MovieItem.css'

class MovieItem extends Component{

    handleItemCardSelect = () => {
        router_PushToHistory(`/details/${this.props.movieRecord.id}`, this)
    }
    
    
    render() {

        // creating readable alt tag
        let altInfo = this.props.movieRecord.title + ' Movie poster image'
        // max char to display
        let maxDescriptionLength = this.props.movieRecord.description.substring(0,150);
        return(
           <div className="movieItemWrap" onClick={this.handleItemCardSelect}>
                <img src={this.props.movieRecord.poster} alt={altInfo} ></img>
                <p className="title">{this.props.movieRecord.title}</p>
                <p className="description">{maxDescriptionLength} <span className ="endDescText"> . . . click to continue Reading</span> </p>
           </div>
        )
    }
}

export default withRouter(connect()(MovieItem));