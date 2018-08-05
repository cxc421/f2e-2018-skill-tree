import React from 'react';
import styled from 'styled-components';

const DialogWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 1012px;
  height: 388px;
  width: 100%;
  ${'' /* background: pink; */}
  ${'' /* opacity: .5; */}
`;

const CatImage = styled.img`
  position: absolute;
  left: 20px;
  top: 0px;
  z-index: 10;
`;

const DialogArea = styled.div`
  position: absolute;
  top: 49px;
  left: 192px;
  ${'' /* width: 1231px; */}
  border: solid 10px #0093ff;
  border-radius: 65px;
  padding: 39px 69px 39px 55px;
  background: white;
  display: flex;
  align-items: flex-start;
`;

const DialogLeft = styled.div`
  width: 154px;
  height: 154px;
  ${'' /* background: skyblue;   */}
  position: relative;
`;

const DialogRight = styled.div`
  margin-left: 34px;
  ${'' /* background: pink; */}
`;

const DialogTitle = styled.h3`
  font-family: Noto Sans CJK TC;
  font-size: 35px;
  line-height: 59px;
  color: #505050;
  font-weight: bold;
`;

const DialogContent = styled.p`
  font-family: Noto Sans CJK TC;
  font-size: 35px;
  color: #7b7b7b;
  line-height: 59px;
  width: 898px;
`;

const DialogImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
`;

const Dialog = ({
  id,
  label = "安安",
  content = "我是Mono喵，接下來將讓你領略UI的變換。喵。"
}) => (
  <DialogWrapper>
    <CatImage src={require('../assets/img_monocat.png')} />
    <DialogArea>
      <DialogLeft>
        { id && <DialogImage src={require(`../assets/img_${id}@2x.png`)} /> }
      </DialogLeft>
      <DialogRight>
        <DialogTitle>{ label }</DialogTitle>
        <DialogContent>{ content }</DialogContent>
      </DialogRight>
    </DialogArea>
  </DialogWrapper>
);

export default Dialog;