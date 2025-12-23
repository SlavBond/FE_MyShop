import {StHeader} from './StHeader.styled';
import TabsMain from '@/components/TabsMain';

const Header = () => {
  console.log('SERVER HEADER');
  return (
    <StHeader>
      <TabsMain />
    </StHeader>
  )
}

export default Header;
