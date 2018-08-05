import React from 'react';
import styled from 'styled-components';

const SkillButtonBackground = styled.div`
  position: absolute;
  left: ${ props => props.x }px;
  top: ${ props => props.y}px;
  width: 104px;
  height: 104px;
  background: rgba(0, 147, 255, 0.35);
  box-shadow: 0 3px 6px rgba(0, 147, 255, 0.4);
  border-radius: 39px;
  margin: 1em;
  cursor: pointer;
  border: 12px solid ${props => {
    switch(props.status) {
      case 'locked':
        return 'rgba(92, 92, 92, 0.62)';
      case 'empty':
        return 'rgba(255, 255, 255, 0.62)';
      case 'selected':
      default:
        return 'rgba(87, 145, 255, 0.62)';
    }
  }};
`;
const SkillButtonImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transition: transform 0.3s cubic-bezier(0.54, 1.98, 0.65, 0.53);
  transform: translate(-50%, -50%);
  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const SkillButtonText = styled.div`
  position: absolute;
  left: 50%;
  bottom: -60px;
  font-family: Noto Sans CJK TC;
  font-size: 30px;
  line-height: 45px;
  text-shadow: 0px 1px 4px #0093ff;
  transform: translateX(-50%);
  color: white;
  white-space: nowrap;
`;

const SkillButton = ({ 
  id,
  x,
  y,
  label,
  status,
  onClick,
  onMouseEnter
 }) => (
  <SkillButtonBackground status={status} x={x} y={y} onClick={onClick} onMouseEnter={onMouseEnter}>
    <SkillButtonImage src={require(`../assets/img_${id}.png`)}  />
    <SkillButtonText>{label}</SkillButtonText>
  </SkillButtonBackground>
);
  

export default SkillButton;
