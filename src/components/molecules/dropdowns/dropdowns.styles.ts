import styled from "styled-components"

interface DropdownProps {
    warning?: boolean,
    disabled?: boolean,
    color?: string,
    borderRadius?: string,
    width?: string,
}

export const DropDown = styled('select')<DropdownProps>`
  height: 56px;
  width: 100%;
  border:${props => props.warning ? '1px solid #ed1c24' : '1px solid #dbdbdb'};
  border-radius: ${props => props.borderRadius ? props.borderRadius : '6px'};
  color:${props => props.warning ? '#ed1c24': '#333'};
  padding: 0 0 0 20px;
  font-size: 1pc;
  position: relative;
  -webkit-appearance: none;
  -moz-appearance: none;  
  appearance: none;
  position: relative;
  font-size: 14px;
  background-color:#fff;
  outline:none;
  &:focus{
    outline:none;
  }
`;

export const SelectWrapper = styled('div')<DropdownProps>`
  position:relative;
  text-align:center;
  width: ${props => props.width ? props.width : '100%'};
  padding:0;
  border:none;
  margin:0;
  &:focus{
    outline:none;
  }
  > svg {
    position: absolute;
    right: 10px;
    top:0;
    bottom:0;
    margin: auto;
    z-index: 100;
  }
`;

export const LoaderWrapper = styled('div')<DropdownProps>`
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  display:flex;
  justify-content:center;
  align-items:center;
  z-index:100;
  background-color:#fff;
  border: 1px solid #dbdbdb;
  border-radius: ${props => props.borderRadius ? props.borderRadius : '6px'};
`;

export const Loader = styled.div`
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #007cc2;
  width: 20px;
  height: 20px;
  display:block;
  margin:auto;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg);}
  }
`;