import React from 'react';
import ClassNames from 'classnames';
import { Link } from 'react-router';

import { Btn, Block, Image, Icon, Input, Text, Utils } from 'react-essence';

class MobilePayment extends React.Component {

    render() {
        return (
          <Block className={'e-container e-padding-top-15 e-background-grey-100 mobilecart confirmation'}>

                 <Block>
                   <Text type={'p'} classes={'e-text-center e-button'} className={'e-no-margin'}>total</Text>
                   <Text type={'h1'} classes={'e-text-center e-headline e-no-margin'}>
                     <Icon name={"editor-attach-money"} />
                     22.00
                   </Text>
                 </Block>

                 <Block className={'cart-item e-background-white'}>
                   <Text type={'p'} className={"e-body1 e-text-capitalize e-no-margin e-text-grey-500 line-height-15"}>first name</Text>
                   <Text type={'p'} className={"e-body1 e-text-capitalize e-no-margin e-text-grey-500 line-height-15"}>last name</Text>
                 </Block>
                 <Block className={'cart-item e-background-white'}>
                   <Text type={'p'} className={"e-body1 e-text-capitalize e-no-margin e-text-grey-500 line-height-15"}>card number</Text>
                   <Text type={'p'} className={"e-body1 e-text-capitalize e-no-margin e-text-grey-500 line-height-15"}>
                       <Image src={'../assets/img/visa.png'} width={'50px'} className={'e-img-rsp'} />
                   </Text>
                 </Block>
                 <Block className={'cart-item e-background-white'}>
                   <Text type={'p'} className={"e-body1 e-text-uppercase e-no-margin e-text-grey-500 line-height-15"}>ccv</Text>
                   <Text type={'p'} className={"e-body1 e-text-capitalize e-no-margin e-text-grey-500 line-height-15"}>exp. date</Text>
                 </Block>

                 <Block className={'cart-item e-background-white justify-center'}>
                   <Input type={'text'} name={'Promo Code'} placeholder={'Enter Promo Code (optional)'}/>
                 </Block>

                 <Link to={'/content/history'}>
                   <Btn label={'Payment'} ripple={true} type={'button'} className={'flat e-background-teal-A700 e-text-white e-no-margin e-no-padding no-min-size order-btn'} />
                 </Link>

               </Block>
        );
    }
}

module.exports = MobilePayment;
