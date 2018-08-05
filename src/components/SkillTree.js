import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import SkillButton from './SkillButton';

import skills from '../skills.json';

const SkillTreeWrapper = styled.div`
  position: relative;
  height: 600px;
`;

class SkillTree extends Component {
  constructor(props) {
    super(props);

    this.state = skills.reduce((tempState, skill) => ({
      [skill.id]: 'locked',
      ...tempState
    }), {
      'blade-1': 'empty',
      shield: 'empty'
    });    
  }

  componentDidMount() {
    const matched = this.props.location.search.match(/[&?]k=(.+)(&|$)/);
    if (matched) {
      const [, selectedString] = matched;
      const selectedSkills = selectedString.split(',');
      this.setState(selectedSkills.reduce((tempState, id) => ({
        ...tempState,
        [id]: 'selected'
      }), {}), this.updateSkills);
    }    
  }

  toggle = ({id}) => {
    if (this.state[id] === 'locked') return;

    this.setState({ 
      [id]: 'selected' 
    }, this.updateSkills);
  };

  updateSkills = () => {
    const newState = skills.reduce((tempState, skill) => {
      if ( this.state[skill.id] === 'locked' && 
        skill.prev.every(prevID => this.state[prevID] === 'selected')
      ) {
        return {
          ...tempState,
          [skill.id]: 'empty'
        }
      } 
      return tempState;
    }, {});

    this.setState(newState);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      const selectedSkills = Object.keys(this.state).filter(
        key => this.state[key] === 'selected'
      );      
      this.props.history.replace(`/?k=${selectedSkills.join(',')}`);      
    }
  }

  render() {
    return (
      <SkillTreeWrapper>
        {
          skills.map(skill => (
            <SkillButton 
              {...skill}
              key={skill.id}
              onClick={() => this.toggle(skill)}
              onMouseEnter={() => this.props.onInfoChange(skill)}
              status={this.state[skill.id]}
            />
          ))
        }
      </SkillTreeWrapper>
    )
  }
}

export default withRouter(SkillTree);

