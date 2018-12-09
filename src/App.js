import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Main from './Main';

import Content1 from './Contents/Content1';
import Content2 from './Contents/Content2';
import Content3 from './Contents/Content3';
import Content4 from './Contents/Content4';
import Content5 from './Contents/Content5';
import Content6 from './Contents/Content6';
import Footer from './Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faAlignCenter, faAngleRight, faAngleDoubleRight, faMobileAlt, faCog, faPencilAlt, faAngleDoubleUp,
  faDesktop, faBolt, faLock, faBullhorn
} from '@fortawesome/free-solid-svg-icons';


library.add(fab, faAlignCenter, faAngleRight, faAngleDoubleRight, faMobileAlt, faCog, faPencilAlt, faDesktop, faBolt, faLock, faBullhorn, faAngleDoubleUp);

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path='/' component={Main} />
            <Route component={Content1} />
            <Route component={Content2} />
            <Route component={Content3} />
            <Route component={Content4} />
            <Route component={Content5} />
            <Route component={Content6} />
            <Route component={Footer} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
