
import styled from "styled-components"

interface SolidButtonProps {
  bgColor?: string,
  color?: string,
  hoverBgColor?: string
}

export const SolidButton = styled('button')<SolidButtonProps>`
  border-radius: 50px;
  padding: 13px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  > svg {
    position: absolute;
    right: 18px;
    width: 13px; 
    height: 13px;
  }
  border:none;
  text-align:center;
  transition: background-color ease 0.3s;          
  width:100px;
  background-color: ${props => props.bgColor ? props.bgColor : "#007cc2"};
  color: ${props => props.color ? props.color : "#fff"};
  &:hover{
    cursor: pointer;
    background-color: ${props => props.hoverBgColor ? props.hoverBgColor : "#005b8f"};
  }`
;

