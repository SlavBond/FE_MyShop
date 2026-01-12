import {StNotifyBagContainer, StNotifyBagCounter} from "@/components/NotifyBag/StNotifBag.styled";
import {Icon} from "@/components/UI/UIIcon";

const NotifyBag = () => {
    const count = 2;
    return (
        <StNotifyBagContainer>
            <Icon name='bag' size="20px" style={{color: 'var(--neutral-7)'}}/>
            <StNotifyBagCounter>{count}</StNotifyBagCounter>
        </StNotifyBagContainer>
    )
};

export default NotifyBag;
