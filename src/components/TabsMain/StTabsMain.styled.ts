import styled from 'styled-components';
import Link from 'next/link';

export const StContainerTabsMain = styled.div`
    display: flex;
    gap: 30px;
`;

export const StItemLinkTabMain = styled(Link)<{$isActive: boolean}>`
    color: ${({$isActive}) => ($isActive ? 'var(--neutral-7)' : 'var(--neutral-4)')};
    cursor: pointer;
    &:hover {
        color: var(--neutral-7);
    }
`;