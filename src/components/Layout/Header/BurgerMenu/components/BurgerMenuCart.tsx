import {StFlex, StParagraph} from "@/styles/styledComponents/blocks.styled";
import {useTranslation} from "react-i18next";
import NotifyBag from "@/components/NotifyBag";

const BurgerMenuCart = () => {
    const {t} = useTranslation()
    return (
        <StFlex $justifyContent="space-between">
            <StParagraph>
                { t('ui.cart') }
            </StParagraph>
            <NotifyBag />
        </StFlex>
    )
}

export default BurgerMenuCart;
