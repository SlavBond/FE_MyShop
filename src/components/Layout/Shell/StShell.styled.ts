import styled from 'styled-components';

export const StShellWrapper = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export const StShellBody = styled.div`
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
`;

export const StShellContent = styled.main`
  flex: 1 1 auto;
  min-width: 0;
  min-height: 0;
  overflow: auto;
`;