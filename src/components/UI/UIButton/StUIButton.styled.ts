import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface StyledButtonProps {
  $borderRadius?: 'pill' | 'rounded';
}

export const StUIButton = styled(Button)<StyledButtonProps>`
  border-radius: ${props => props.$borderRadius === 'rounded' ? '8px' : '80px'};
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 400;
  text-transform: none;
  background-color: var(--neutral-7);
  color: #fff;
  border: 1px solid #000;

  &:hover {
    background-color: #333;
  }
`;

export const StUIButtonOutlined = styled(Button)<StyledButtonProps>`
  border-radius: ${props => props.$borderRadius === 'rounded' ? '8px' : '80px'};
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 400;
  text-transform: none;
  background-color: transparent;
  color: #000;
  border: 1px solid #000;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;