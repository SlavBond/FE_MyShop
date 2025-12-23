import {ITabsMain} from '../tabsMain.types';
import {useTranslation} from 'react-i18next';
import {StItemLinkTabMain} from '../StTabsMain.styled';

interface IItemTabMain {
  tab: ITabsMain
}

const ItemTabMain = ({ tab }: IItemTabMain) => {

  const {t} = useTranslation()
  return (
    <StItemLinkTabMain href={tab.page} $isActive={false}>{t(tab.title)}</StItemLinkTabMain>
  );
};

export default ItemTabMain;
