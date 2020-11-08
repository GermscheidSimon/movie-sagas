import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {put, takeEvery} from 'redux-saga/effects'
import Axios from 'axios';

import {router_PushToHistory} from './library/navigation'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery("FETCH_MOVIE_LIST", fetchMoviesList)
    yield takeEvery("FETCH_MOVIE_DETAILS", fetchMovieDetails)
    yield takeEvery("FETCH_GENRES", fetchGenres)
    yield takeEvery("POST_NEW_MOVIE", postNewMovie)
}
function* fetchMoviesList() {
    try {
        const movieList = yield Axios.get('/api/movie')
        yield put({
            type: "SET_MOVIES",
            payload: movieList.data
        })
    } catch (error) {
        console.log(error);
    }
}
function* fetchMovieDetails(action) {
    let movieId = action.payload.movieRecord.id
    try {
        // movie details will contain the data that the details page will use to display things. 
        const movieDetails = {
            genres: yield Axios.get(`/api/movie/${movieId}`),
            details: action.payload.movieRecord
        }
        // add the movie details (full data) to redux state
        yield put({
            type: "SET_DETAILS",
            payload: movieDetails
        })
        // if this all succeeded, push to the details page. 
        router_PushToHistory('/details', action.payload.srcComp)
    } catch (error) {
        console.log(error);
    }
}
function* fetchGenres() {
    try {
        const genresList = yield Axios.get('/api/genre') // get list of genres
        yield put({          // add data from get request to genres reducer
            type: "SET_GENRES",
            payload: genresList.data
        })
    } catch (error) {
        console.log(error);
    }
}

function* postNewMovie(action) {
    try {
        yield Axios.post('/api/movie', action.payload.data) // post new movie 
        yield alert("Movie added to list! Returning to Home page")  // give the user some sort of confirmation the form was submitted 
        yield router_PushToHistory('/', action.payload.nav) // upon successful post, return user to movie list
    } catch (error) {
        alert('Failed to add movie. Please try again. ') // let the user know if submission failed
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const detailState = { // detail state represents the JSON structure of the movie details reducer.
    details: {        // The detail page is looking for this data when it is called. 
        id: 0,
        title: 'Movie Title',
        description: 'description',
        poster: 'image path'
        },
    genres: {
        data: [
            {
                id: 0,
                movies_id: 0,
                genres_id: 0,
                name: 'genre name'
            }
        ]
        }
}

const movieDetails = (state = detailState, action) => {
    switch (action.type) {
        case "SET_DETAILS":
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movieDetails,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
