import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 84px;
`;

const Moon = styled.img`
  margin-left: 140px;
`;

const Title = styled.h1`
  font-size: 79px;
  font-weight: bold;
  font-family: Yuanti TC;
  line-height: 111px;
  text-shadow: 0px 3px 7px #0093ff;
  color: white;
`;

const SubTitle = styled.h2`
  font-size: 69px;
  font-weight: normal;
  font-family: Silom;
  line-height: 88px;
  text-shadow: 0px 4px 4px #0093ff;
  color: white;  
`;

const TitleWrapper = styled.div`
  cursor: pointer;
`;

const Header = props => (
  <HeaderWrapper>
    <Moon src={ require('../assets/img_planet.png') }/>
    <TitleWrapper onClick={() => {
      props.history.replace(`/`);
      window.location.reload();
    }}>
      <Title>介面設計師轉職之路</Title>
      <SubTitle>UI Designer Road Map</SubTitle>
    </TitleWrapper>
  </HeaderWrapper>
);

export default withRouter(Header);
