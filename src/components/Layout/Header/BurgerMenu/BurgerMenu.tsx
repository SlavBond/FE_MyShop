'use client';

import { useState } from 'react';
import { StBurgerButton, StBurgerMenu, StBurgerOverlay } from './StBurgerMenu.styled';
import TabsMain from '@/components/TabsMain';
import {Icon} from "@/components/UI/UIIcon";
import BurgerMenuBottom from "./components/BurgerMenuBottom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <StBurgerButton onClick={toggleMenu} $isOpen={isOpen}>
          <Icon name="burger" size={18} style={{color: 'var(--neutral-7)'}} />
      </StBurgerButton>

      <StBurgerOverlay $isOpen={isOpen} onClick={closeMenu} />
      
      <StBurgerMenu $isOpen={isOpen}>
          <span onClick={closeMenu}>
              <Icon name="cross" size={18} style={{color: 'var(--neutral-4)'}} />
          </span>
          <div className="burger-menu">
              <TabsMain />
          </div>
        <BurgerMenuBottom />
      </StBurgerMenu>
    </>
  );
};

export default BurgerMenu;


