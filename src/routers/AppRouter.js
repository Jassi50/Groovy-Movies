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
            <Route path="/" exact><PageHome /></Route>
            <Route path="/about" exact><PageAbout /></Route>
            <Route path="/favorites" exact><PageFavorites /></Route>
            <Route path="/movie/:id" exact><PageSingleMovie /></Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
