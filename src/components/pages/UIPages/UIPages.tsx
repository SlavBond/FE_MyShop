'use client'

import style from './uipages.module.scss'
import UIButton from '@/components/UI/UIButton';
import UIInput from '@/components/UI/UIInput';
import { EmailIcon, LockIcon, UserIcon, SearchIcon } from '@/components/UI/UIInput/icons';
import TabsMain from '@/components/TabsMain/TabsMain';
import {Icon} from "@/components/UI/UIIcon";
import {color} from "@mui/system";

const UIPages = () => {
    return (
      <>
        <div className={style.uiContainer}>
          <UIButton title="Show more"/>
          <UIButton title="Show more" variant="outlined" borderRadius="rounded"/>

          <div style={{marginTop: '40px', maxWidth: '500px'}}>
            <h3>UI Input</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px', marginTop: '20px'}}>
              <UIInput
                placeholder="Email address"
                type="email"
                icon={<EmailIcon/>}
                rightText="Signup"
                onRightTextClick={() => console.log('Signup clicked')}
              />

              <UIInput
                placeholder="Password"
                type="password"
                icon={<LockIcon/>}
              />

              <UIInput
                placeholder="Username"
                type="text"
                icon={<UserIcon/>}
              />

              <UIInput
                placeholder="Search..."
                type="text"
                icon={<Icon name="search" size={15} style={{color: 'red'}} />}
              />
            </div>
          </div>
          <div style={{marginTop: '40px', maxWidth: '500px'}}>
            <h3>Tabs</h3>
            <TabsMain/>
          </div>
          </div>
        </>

        )
        };

        export default UIPages;