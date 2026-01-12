import styled from 'styled-components';

export const StBurgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  width: 24px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StBurgerOverlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'all' : 'none')};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const StBurgerMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;  
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background: var(--neutral-1);
    padding: 80px 30px 30px;
    z-index: 1000;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    transition: transform 0.3s ease;
    box-shadow: ${({ $isOpen }) => ($isOpen ? '-2px 0 10px rgba(0, 0, 0, 0.1)' : 'none')};
      
    span {
        padding: 5px;
        position: absolute;
        top: 29px;
        right: 29px;
        cursor: pointer;
    }  

    .burger-menu {
        & > div {
            flex-direction: column;
            gap: 10px;
            width: 100%;
            a {
                font-size: 18px;
                padding: 10px 0;
                border-bottom: 1px solid var(--neutral-3);
            }
        }
    }
  }
`;

export const StBurgerMenuBottom = styled.div`
    display: flex;
    flex-direction: column;
`;


