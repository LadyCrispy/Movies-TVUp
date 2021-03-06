import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import MoviesList from './components/movies_list'
import MovieDetails from './components/movie_details'
import { NavBar } from './components/NavBar';

function App() {
  return (
     <main>
       <NavBar/>
        <Switch>

          <Route exact path="/" component={MoviesList}></Route>
          <Route exact path="/movies/:id" component={MovieDetails} />
          
        </Switch>     

     </main>
  );
}

export default App;
