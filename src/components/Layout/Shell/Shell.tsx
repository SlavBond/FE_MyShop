'use client'

import { StShellBody, StShellContent, StShellWrapper } from './StShell.styled';
import Header from '../Header';

const Shell = ({ children }: { children: React.ReactNode }) => {
  return (
    <StShellWrapper>
      <StShellBody>
        <Header/>
        <StShellContent>
          {children}
        </StShellContent>
      </StShellBody>
    </StShellWrapper>
  )
};

export default Shell;
