//Dependecies
import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
//Components
import MovieList from '../MovieList/MovieList'
import MovieDetails from '../MovieDetails/MovieDetails'
import Header from '../Header/Header'
//misc
import './App.css';


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
        <Header/>
         
        
          <Route exact path="/" component={MovieList}/>
          <Route path="/details" component={MovieDetails}/>
        </Router>
      </div>
    );
  }
}


export default App;
