"use strict"


//React
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//REACT ROUTER
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import BooksList from './components/pages/booksList';

import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';

import reducers from './reducers/index';
import {addToCart} from './actions/cartActions';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';
// STEP 1 create the store
const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

const Routes = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={BooksList}/>
        <Route path="/admin" component={BooksForm}/>
        <Route path="/cart" component={Cart}/>
      </Route>
    </Router>
  </Provider>
)

render(
  Routes, document.getElementById('app')
);


/*
// STEP 2 create and dispatch actions
store.dispatch(postBooks(
  [{
    id: 1,
    title:'this is the book title',
    description: 'this is the book description',
    price: 33.33
  },
  {
    id: 2,
    title:'this is the second book title',
    description: 'this is the second book description',
    price: 50
  }]
))

// Delete a book
store.dispatch(deleteBooks(
  {id: 1}

))
// UPDATE a book
store.dispatch(updateBooks(
 {
  id: 2,
  title:'Learn React in 24h'
 }
))

-->CART ACTION<-
// ADD TO CART
store.dispatch(addToCart([{id:1}]))
*/
