import {StHeader, StDesktopMenu, StHeaderContent} from './StHeader.styled';
import TabsMain from '@/components/TabsMain';
import BurgerMenu from './BurgerMenu';
import UIContainer from "@/components/UI/UIContainer";
import Logo from "@/components/Logo";
import HeaderActions from "@/components/Layout/Header/components/HeaderActions";

const Header = () => {
  console.log('SERVER HEADER');
  return (
    <StHeader>
        <UIContainer>
            <StHeaderContent>
                <StDesktopMenu>
                    <Logo/>
                    <TabsMain />
                    <HeaderActions />
                </StDesktopMenu>
            </StHeaderContent>
            <BurgerMenu />
        </UIContainer>
    </StHeader>
  )
}

export default Header;
