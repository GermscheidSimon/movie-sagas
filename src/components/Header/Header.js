import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import './Header.css'

class Header extends Component {

    render() {

        return(
            <div className="headerWrap">
                <div className="titleWrap">
                    <p>Simon's Movie List</p>
                </div>
                <div className="navBar">
                    <Link to="/" className="linkButton" >Movie List</Link>
                    <Link to="/details"className="linkButton"  >Add a movie</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);