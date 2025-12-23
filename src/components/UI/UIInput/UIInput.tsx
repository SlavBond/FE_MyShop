import { StUIInput, StUIInputWrapper, StUIInputIcon, StUIInputRightText } from '@/components/UI/UIInput/StUIInput.styled';
import { TextFieldProps } from '@mui/material/TextField';

interface IUIInputProps extends Omit<TextFieldProps, 'variant'> {
  icon?: React.ReactNode;
  rightText?: string;
  onRightTextClick?: () => void;
}

const UIInput = ({ 
  icon,
  rightText,
  onRightTextClick,
  ...props 
}: IUIInputProps) => {
  return (
    <StUIInputWrapper>
      {icon && <StUIInputIcon>{icon}</StUIInputIcon>}
      <StUIInput 
        variant="standard"
        {...props}
      />
      {rightText && (
        <StUIInputRightText onClick={onRightTextClick}>
          {rightText}
        </StUIInputRightText>
      )}
    </StUIInputWrapper>
  );
};

export default UIInput;

