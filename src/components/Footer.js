import React from 'react';
import styled from 'styled-components';

const FooterBackground = styled.div`
  position: relative;
  background-image: url(${require('../assets/img_footer@2x.png')});
  background-size: cover;
  height: 1184px;
  background-position: 0 250px;
`;

const CatImage = styled.img`
  position: absolute;
  left: 60px;
  bottom: 250px;
`;

const RacketImage = styled.img`
  position: absolute;
  right: 314px;
  bottom: 0px;
`;

const Footer = () => (
  <FooterBackground>
    <CatImage src={ require('../assets/img_hexcat.png') }/>
    <RacketImage src={ require('../assets/img_rocket.png') } />
  </FooterBackground>
);

export default Footer;