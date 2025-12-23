import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const StUIInputWrapper = styled('div')`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const StUIInputIcon = styled('div')`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  pointer-events: none;
  z-index: 1;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const StUIInputRightText = styled('div')`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 16px;
  font-weight: 400;
  color: #999;
  pointer-events: auto;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    color: #000;
  }
`;

export const StUIInput = styled(TextField)`
  width: 100%;
  
  .MuiInput-root {
    font-size: 16px;
    font-weight: 400;
    padding-left: 40px;
    
    &:before {
      border-bottom: 1px solid #E5E5E5;
    }
    
    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid #B8B8B8;
    }
    
    &:after {
      border-bottom: 1px solid #000;
    }
    
    input {
      padding: 8px 0;
      color: #000;
      
      &::placeholder {
        color: #999;
        opacity: 1;
      }
    }
  }
`;

