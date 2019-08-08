import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import MoviesList from './components/movies_list'
import MovieDetails from './components/movie_details'

function App() {
  return (
     <main>
        <Switch>

          <Route exact path="/" component={MoviesList}></Route>
          <Route exact path="/movies/:id" component={MovieDetails} />
          
        </Switch>     

     </main>
  );
}

export default App;
