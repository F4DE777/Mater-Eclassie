import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import NotFound from './components/pages/NotFound';
import About from './components/pages/About';
import Academics from './components/pages/Academics';
import Learn from './components/pages/Learning';
import School from './components/pages/School';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Contact from "./components/pages/sub_pages/About/Contact";
import History from "./components/pages/sub_pages/About/History";
import HumanResources from "./components/pages/sub_pages/About/HumanResources";
import PrincipalsDesk from "./components/pages/sub_pages/About/PrincipalsDesk";
import Apply from "./components/pages/sub_pages/Academics/Apply";
import AgeCons from "./components/pages/sub_pages/Academics/AgeCons";
import Result from "./components/pages/sub_pages/Academics/Result";
import Eyfs from "./components/pages/sub_pages/Learning/Eyfs";
import Nursery from "./components/pages/sub_pages/Learning/Nursery";
import Curriculum from "./components/pages/sub_pages/School/Curriculum";
import Gallery from "./components/pages/Gallery";
import News from "./components/pages/News";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch>
                  <Route path="/" component={HeroSection} exact />
                  <Route path={"/about"} component={About} />
                  <Route path={"/academics"} component={Academics} />
                  <Route path={"/learn"} component={Learn} />
                  <Route path={"/school"} component={School} />
                  <Route path={"/contact"} component={Contact} />
                  <Route path={"/gallery"} component={Gallery} />
                  <Route path={"/history"} component={History} />
                  <Route path={"/message"} component={HumanResources} />
                  <Route path={"/principal"} component={PrincipalsDesk} />
                  <Route path={"/apply"} component={Apply} />
                  <Route path={"/fees"} component={AgeCons} />
                  <Route path={"/transfer"} component={Result} />
                  <Route path={"/senior"} component={Eyfs} />
                  <Route path={"/junior"} component={Nursery} />
                  <Route path={"/school"} component={Curriculum} />
                  <Route path={"/News"} component={News} />

                  <Route path="*" component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

        <Footer />
      </Router>
    </>
  );
}

export default App;
