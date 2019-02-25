import React from 'react'
import './Navigation.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {Header} from './Header';
import {Homepage} from './Homepage';
import {Dailyhabit} from './Dailyhabit';
import {Navigationmobile} from './navigation_mobile';




const Home = () => (
  <Homepage />
)

const DailyhabitM = () => (
  <Dailyhabit />
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.path}/:topicId`} component={Topic}/>
    <Route exact path={match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)


const Navigation = () => (
  <div>
  
    <Header />
    <Navigationmobile />
      <div id="navigation">
        <Router>
          <navigation className="navigation">
            <ul id="navMenu" style={{border: '5px solid white', display: 'block'}}>
              <li><Link to="/">Ηome</Link></li>
              <li><Link to="/dailyhabitM">Make meditation a daily habit</Link></li>
              <li><Link to="/">Get started</Link>
              <ul className="firstdrpd">
                  <li style={{minWidth: '300px'}}><a href="/">Stage 1 - Cultivating Relaxation</a></li>
                  <li style={{minWidth: '300px'}}><a href="/">Stage 2 - Directing your Attention</a></li>
                </ul>
              </li>
              <li><Link to="/topics">Meditation essentials</Link></li>
              <li style={{float: 'right', marginTop: '-1.5%'}}><Link to="/topics">About me</Link></li>
              <li style={{float: 'right', marginTop: '-1.5%'}}><Link to="/topics">Blog</Link></li>
              <li style={{float: 'right', marginTop: '-1.5%'}}><Link to="/topics">Reviews</Link></li>
            </ul>

  

            <Route exact path="/" component={Home}/>
            <Route path="/dailyhabitM" component={DailyhabitM}/>
            <Route path="/topics" component={Topics}/>
          </navigation>
        </Router>
      </div>


    </div>
)
export default Navigation;