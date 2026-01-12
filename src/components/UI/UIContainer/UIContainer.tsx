import {StUIContainer} from "./StUIContainer.styled";
import {ReactNode} from "react";

interface IUIContainerProps {
    children: ReactNode
}
const UIContainer = ({ children }: IUIContainerProps) => {
    return (
        <StUIContainer>
            {children}
        </StUIContainer>
    )
}

export default UIContainer;
