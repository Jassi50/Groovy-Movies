import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageFavorites from '../pages/PageFavorites';
import PageSingleMovie from '../pages/PageSingleMovie';
function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main>
          <Switch>
            <Route path="/" exact><PageHome sort='popular' /></Route>
            <Route path="/sort/popular"><PageHome sort='popular' /></Route>
            <Route path="/sort/top-rated"><PageHome sort='top-rated' /></Route>
            <Route path="/sort/in-theatres"><PageHome sort='in-theatres' /></Route>
            <Route path="/sort/comming-soon"><PageHome sort='comming-soon' /></Route>
            <Route path="/about"><PageAbout /></Route>
            <Route path="/favorites"><PageFavorites /></Route>
            <Route path="/movie/:id"><PageSingleMovie /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
