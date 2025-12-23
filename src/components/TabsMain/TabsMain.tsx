import { menuTabs } from './tabsMain.constants';
import {StContainerTabsMain} from './StTabsMain.styled';
import ItemTabMain from './components/ItemTabMain';

const TabsMain = () => {
  return (
    <StContainerTabsMain>
      {menuTabs.map((t) => (
        <ItemTabMain key={t.id} tab={t}/>
      ))}
    </StContainerTabsMain>
  );
}

export default TabsMain;
