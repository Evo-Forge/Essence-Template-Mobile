import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Image, Icon, Input, Navigation, Tab, Text, Utils, Menu, List, ListItem} from 'react-essence';

var tabs = {
 'header': [
   { 'context': (<Text className={'e-text-grey-600'}>CREDIT CARD</Text>) },
   { 'context': (<Text className={'e-text-grey-600'}>PAYPAL</Text>) }
  ],
  'rows': [
   ( <Block className={'e-no-padding'}>
       <Block classes={'mobile-cart'}>
          <Block className={'cart-item'}>
            <Block className={'e-background-grey-100'}>
              <Text type={'p'} classes={'e-text-center e-button'} className={'e-no-margin'}>total</Text>
              <Text type={'h1'} classes={'e-text-center e-headline e-no-margin'}>
                <Icon name={"editor-attach-money"} />
                22.00
              </Text>
            </Block>
            <Block classes={'relative e-no-margin div-height e-row align-top'}>
             <Block classes={'brick brick-6 adjust-height-input'}>
               <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>FULL NAME</Text>
               <Input type={'text'} name={'label'} label={'Input with label'} />
             </Block>
             <Block classes={'brick brick-6 adjust-height-input'}>
               <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>EMAIL</Text>
               <Input type={'email'} name={'label'} label={'Email input'} />
             </Block>
             <Block classes={'brick brick-8 adjust-height-input'}>
               <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>PASSWORD</Text>
               <Input type={'text'} name={'label'} label={'Input with label'} />
             </Block>
             <Block classes={'brick brick-5 adjust-height-input'}>
               <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>TELEPHONE NUMBER</Text>
               <Input type={'text'} name={'label'} label={'Input with label'} />
             </Block>
             <Block classes={'brick brick-6 adjust-height-input'}>
               <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>FULL NAME</Text>
               <Input type={'text'} name={'label'} label={'Input with label'} />
             </Block>
             <Block classes={'brick brick-6 adjust-height-input'}>
               <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-400'}>EMAIL</Text>
               <Input type={'email'} name={'label'} label={'Email input'} />
             </Block>
            </Block>
          </Block>
       </Block>
       <Block className={'e-no-margin button-div fixed-bottom'}>
        <Btn label={'Place Order'} ripple={true} className={'flat e-background-teal-A700 adjust-button e-no-margin e-text-white'} />
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
     <Btn label={'Place Order'} ripple={true} className={'flat e-background-teal-A700 adjust-button e-no-margin e-text-white'} />
   </Block>
 </Block>
 </Block>
 )
 ]
};


class MobilePayment extends React.Component {

    render() {
        return (
          <Block>
            <Tab
              data={tabs}
              classes={'background-adjust e-text-grey-50'}
              indicator={'e-background-teal-A700'}/>

          </Block>
        );
    }
}

module.exports = MobilePayment;
