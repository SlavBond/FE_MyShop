import { StUIButton, StUIButtonOutlined } from '@/components/UI/UIButton/StUIButton.styled';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

interface IUIButtonProps extends Omit<MuiButtonProps, 'variant'> {
  title?: string;
  variant?: 'filled' | 'outlined';
  borderRadius?: 'pill' | 'rounded';
  children?: React.ReactNode;
}

const UIButton = ({ 
  title, 
  variant = 'filled',
  borderRadius = 'pill',
  children,
  ...props 
}: IUIButtonProps) => {
  const ButtonComponent = variant === 'outlined' ? StUIButtonOutlined : StUIButton;
  
  return (
    <ButtonComponent $borderRadius={borderRadius} {...props}>
      {children || title}
    </ButtonComponent>
  );
};

export default UIButton;
