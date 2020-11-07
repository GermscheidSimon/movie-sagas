import React, { Component } from 'react'
import {connect} from 'react-redux'

class MovieDetails extends Component{


    render(){
        return(
            <div>
                details page!
                {JSON.stringify(this.props.reduxState.details)}
            </div>
        )
    }
}

const addReduxStateToProps = (reduxState) => ({reduxState})
export default connect(addReduxStateToProps)(MovieDetails);