import styled from 'styled-components';
import {sizeHeader} from "@/styles/sizeStyle.constants";

export const StHeader = styled.header`
    height: ${sizeHeader};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StHeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const StDesktopMenu = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 768px) {
        display: none;
    }
`;
