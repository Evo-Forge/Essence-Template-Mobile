import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router';

import { Btn, AppBar, Block, Image,  Input, Navigation, Tab, Text, Utils, Menu, List, ListItem} from 'react-essence';

var tabs = {
 'header': [
   { 'context': (<Text>SIGN UP</Text>) },
   { 'context': (<Text>SIGN IN</Text>) }
  ],
  'rows': [
(<Block>
  <Block classes={'relative e-no-margin div-height e-row align-top'}>
    <Block classes={'brick brick-12 adjust-height-input'}>
      <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>FULL NAME</Text>
      <Input type={'text'} name={'name'} />
    </Block>
    <Block classes={'brick brick-12 adjust-height-input'}>
      <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>EMAIL</Text>
      <Input type={'email'} name={'email'} />
    </Block>
    <Block classes={'brick brick-12 adjust-height-input'}>
      <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>PASSWORD</Text>
      <Input type={'text'} name={'label'} />
    </Block>
    <Block classes={'brick brick-12 adjust-height-input'}>
      <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>TELEPHONE NUMBER</Text>
      <Input type={'text'} name={'label'} />
    </Block>
    <Text className={'e-text-grey-700 e-text-center e-margin-top-25'}>
      By creating your account, you agree with our Terms and Conditions.
    </Text>

    <Block className={'e-no-margin button-div fixed-bottom'}>
      <Link to={'/content/menu'}>
        <Btn label={'Create Account'} ripple={true} className={'flat e-background-teal-A700 adjust-button e-no-margin e-text-white'} />
      </Link>
    </Block>
  </Block>
 </Block>
 )
,
( <Block>
    <Block classes={'e-row relative e-no-margin div-height  align-center'}>
      <Block classes={'brick brick-12'}>
        <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>USERNAME</Text>
        <Input type={'text'} name={'label'} />
      </Block>
      <Block classes={'brick brick-12'}>
        <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>PASSWORD</Text>
        <Input type={'email'} name={'label'} />
      </Block>
      <Text className={'e-text-grey-400 absolute-text'}>
         Dont have an Account<Text type={'a'} className={'e-text-grey-800'}> Sign Up</Text>
      </Text>
    </Block>
    <Block className={'e-no-margin button-div fixed-bottom'}>
      <Link to={'/content/menu'} >
        <Btn label={'Sign In'} ripple={true} className={'flat e-background-teal-A700 adjust-button e-no-margin e-text-white'} />
     </Link>
    </Block>
 </Block>
)
 ]
};


class MobileSignup extends React.Component {

    render() {
        return (
          <Block classes={'SignUp-container'}>
            <Block className={'header-signup'}>
              <Image src={'../assets/img/SignUp-header-1.jpg'} />
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
