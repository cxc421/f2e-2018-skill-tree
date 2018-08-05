import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import SkillTree from './SkillTree';
import Header from './Header';
import Footer from './Footer';
import Dialog from './Dialog';

const AppBackground = styled.div`
  background-image: linear-gradient(#10030a, #301a3b);
  width: 1900px;
`;


class App extends React.Component {
  state = {
    info: {}
  };

  onInfoChange = info => this.setState({ info });

  render() {
    return (
      <Router>
        <AppBackground>
          <Header />
          <SkillTree onInfoChange={ this.onInfoChange } />
          <Dialog {...this.state.info} />
          <Footer />
        </AppBackground>
      </Router>
    );
  }
}

export default App;
