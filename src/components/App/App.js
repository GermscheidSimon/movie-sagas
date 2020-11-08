//Dependecies
import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
//Components
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import Header from '../Header/Header'
//misc
import './App.css';
import AddMovie from '../AddMovie/AddMovie';
import EditMovie from '../EditMovie/EditMovie'


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
        <Header/>
         
          <Route exact path="/" component={MovieList}/>
          <Route path="/details/:id" component={MovieDetails}/>
          <Route path="/edit/:id" component={EditMovie}/>
          <Route path="/addMovie" component={AddMovie}/>
        </Router>
      </div>
    );
  }
}


export default App;
