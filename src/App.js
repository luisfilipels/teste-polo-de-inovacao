import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import ListCourses from "./views/ListCourses/";
import NotFound from "./views/NotFound";
import ViewCourse from "./views/ViewCourse";

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/curso/:id">
                <ViewCourse/>
            </Route>
            <Route exact path="/cursos/concluidos">
                <ListCourses type="concluidos"/>
            </Route>
            <Route exact path="/cursos/nao-concluidos">
                <ListCourses type="nao-concluidos"/>
            </Route>
            <Redirect exact from="/" to="/cursos/concluidos"/>
            <Redirect exact from="/cursos" to="/cursos/concluidos"/>
            <Route path="/404">
                <NotFound/>
            </Route>
            <Redirect from="/*" to="/404"/>
        </Switch>
    </Router>
  );
}

export default App;
