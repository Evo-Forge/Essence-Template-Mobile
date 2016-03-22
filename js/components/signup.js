import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Image,  Input, Navigation, Tab, Text, Utils, Menu, List, ListItem} from 'react-essence';

var tabs = {
 'header': [
   { 'context': (<Text>SIGN UP</Text>) },
   { 'context': (<Text>SIGN IN</Text>) }
  ],
  'rows': [
   ( <Block>
     <Block classes={'e-row relative e-no-margin div-height  align-center'}>
      <Block classes={'brick brick-12'}>
        <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>USERNAME</Text>
        <Input type={'text'} name={'label'} label={'Input with label'} />
      </Block>
      <Block classes={'brick brick-12'}>
        <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>PASSWORD</Text>
        <Input type={'email'} name={'label'} label={'Email input'} />
      </Block>
      <Block classes={'brick brick-12 absolute-text'}>
        <Text className={'e-text-grey-400 brick brick-12'}>
          Dont have an Account<Text type={'a'} className={'e-text-grey-800'}> Sign Up</Text>
        </Text>
      </Block>
    </Block>
    <Block className={'e-no-margin button-div fixed-bottom'}>
      <Btn label={'Sign In'} ripple={true} className={'flat e-background-teal-A700 adjust-button e-no-margin e-text-white'} />
    </Block>
    </Block>
),
(<Block>
  <Block classes={'relative e-no-margin div-height e-row align-top'}>
   <Block classes={'brick brick-12 adjust-height-input'}>
     <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>FULL NAME</Text>
     <Input type={'text'} name={'label'} label={'Input with label'} />
   </Block>
   <Block classes={'brick brick-12 adjust-height-input'}>
     <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>EMAIL</Text>
     <Input type={'email'} name={'label'} label={'Email input'} />
   </Block>
   <Block classes={'brick brick-12 adjust-height-input'}>
     <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>PASSWORD</Text>
     <Input type={'text'} name={'label'} label={'Input with label'} />
   </Block>
   <Block classes={'brick brick-12 adjust-height-input'}>
     <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>TELEPHONE NUMBER</Text>
     <Input type={'text'} name={'label'} label={'Input with label'} />
   </Block>
   <Block classes={'brick brick-7 absolute-text'}>
     <Text className={'e-text-grey-400 brick brick-12'}>
       Be creating your account, you agree with our Terms and Conditions.
     </Text>
   </Block>
   <Block className={'e-no-margin button-div fixed-bottom'}>
     <Btn label={'Create Account'} ripple={true} className={'flat e-background-teal-A700 adjust-button e-no-margin e-text-white'} />
   </Block>
 </Block>
 </Block>
 )
 ]
};


class MobileSignup extends React.Component {

    render() {
        return (
          <Block classes={'SignUp-container'}>
          <Image width={'40px'} height={'40px'} style={{verticalAlign: 'middle'}} src={'http://getessence.io/assets/img/essence_icon.png'} />

          <Navigation>
             <Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
              <Block type={'header'} className={'e-nav-header'} style={{lineHeight: '52px'}}>
               <Text type={'a'} href={'#home'}>
                <Image width={'40px'} height={'40px'} style={{verticalAlign: 'middle'}} src={'http://getessence.io/assets/img/essence_icon.png'} />
               </Text>
               <Text type={'h2'} classes={'e-text-indigo-400 e-right'} style={{width: '74%', lineHeight: '45px'}}>
                <Text>essence</Text>
               </Text>
              </Block>
              <List type={'navigation'} classes={'e-background-white'}>
               <ListItem key={'about'}>
                <Text type={'a'} href={'#about'}>
                 <Block classes={'content e-left'}>
                  <Text type={'small'}>About</Text>
                 </Block>
                </Text>
               </ListItem>
               <ListItem key={'get-started'}>
                <Text type={'a'} href={'#get-started'}>
                 <Block classes={'content e-left'}>
                  <Text type={'small'}>Get Started</Text>
                 </Block>
                </Text>
               </ListItem>
               <ListItem key={'contact'}>
                <Text type={'a'} href={'#contact'}>
                 <Block classes={'content e-left'}>
                  <Text type={'small'}>Contact</Text>
                 </Block>
                </Text>
               </ListItem>
              </List>
             </Block>
            </Navigation>
            <Block className={'header-signup'}>

            </Block>
            <Tab
              data={tabs}
              classes={'background-adjust e-text-grey-50'}
              indicator={'e-background-teal-A700'}/>

          </Block>
        );
    }
}

module.exports = MobileSignup;
