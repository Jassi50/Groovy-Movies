import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageSingleMovie from '../pages/PageSingleMovie';
//import Search from '../components/Search';
//import { useState } from 'react';

function AppRouter() {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Switch>
            {/* the sort prop is what the API uses for grabing movies based on category  the paths must match the paths for the nav links in nav sort*/}
            <Route path="/" exact><PageHome sort='home' /></Route>
            <Route path="/search"><PageHome sort='home' /></Route>
            <Route path="/sort/popular"><PageHome sort='popular' /></Route>
            <Route path="/sort/top-rated"><PageHome sort='top_rated' /></Route>
            <Route path="/sort/in-theatres"><PageHome sort='now_playing' /></Route>
            <Route path="/sort/coming-soon"><PageHome sort='upcoming' /></Route>
            <Route path="/about"><PageAbout /></Route>
            <Route path="/favorites"><PageFavorites /></Route>
            <Route path="/movie/:id"><PageSingleMovie /></Route>
            {/* <Route path={'/search/:query'}><Search /></Route>
            <Route path={'/search'}><Search /></Route> */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
