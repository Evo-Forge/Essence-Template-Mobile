import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Icon, Image, Text, Utils} from 'react-essence';
import Input from 'essence-input';



class MobileConfirmation extends React.Component {

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
              <Text type={'h2'} className={"e-button e-text-teal-A700 e-no-margin line-height-15"}>your order</Text>
              <Text type={'p'} className={"e-body1 e-text-capitalize e-no-margin line-height-15"}>edit</Text>
            </Block>


            <Block className={'cart-item e-background-white'}>
              <Block className={'left-col'}>
                <Block className={'img-container'}>
                  <Image src={'assets/img/food-square.jpg'} className={'e-img-rsp'}/>
                </Block>
                <Btn icon={'action-delete'} ripple={true} type={'button'} className={'flat e-text-white e-background-red-300 del-item'} />
              </Block>
              <Block className={'right-col'}>
                <Block className={'text-container clean-look'}>
                  <Text type={'p'} classes={'e-text-left e-no-margin'}>
                    Grilled Turkey Fillet
                  </Text>
                  <Text type={'p'} classes={'e-text-left e-text-grey-500'}>
                    <Icon name={"editor-attach-money"} className={'no-min-size'} />
                    9.50
                  </Text>
                </Block>
              </Block>
            </Block>

            <Block className={'cart-item e-background-white'}>
              <Block className={'left-col'}>
                <Block className={'img-container'}>
                  <Image src={'assets/img/food-square.jpg'} className={'e-img-rsp'}/>
                </Block>
                <Btn icon={'action-delete'} ripple={true} type={'button'} className={'flat e-text-white e-background-red-300 del-item'} />
              </Block>
              <Block className={'right-col'}>
                <Block className={'text-container clean-look'}>
                  <Text type={'p'} classes={'e-text-left e-no-margin'}>
                    Grilled Turkey Fillet
                  </Text>
                  <Text type={'p'} classes={'e-text-left e-text-grey-500'}>
                    <Icon name={"editor-attach-money"} className={'no-min-size'} />
                    9.50
                  </Text>
                </Block>
              </Block>
            </Block>

            <Block className={'cart-item e-background-white justify-center'}>
              <Input type={'text'} name={'Promo Code'} placeholder={'Enter Promo Code (optional)'}/>
            </Block>

            <Block className={'cart-item e-background-white e-margin-top-15'}>
              <Text type={'h2'} className={"e-button e-text-teal-A700 e-no-margin line-height-15"}>delivery information</Text>
              <Text type={'p'} className={"e-body1 e-text-capitalize e-no-margin line-height-15"}>edit</Text>
            </Block>

            <Block className={'cart-item e-background-white'}>
              <Text type={'p'} className={"e-body1 e-no-margin line-height-15"}>
                1065 High Street Thursdays Vendt VMN 3145, New York
              </Text>
            </Block>

            <Block className={'cart-item e-background-white e-margin-top-15'}>
              <Text type={'h2'} className={"e-button e-text-teal-A700 e-no-margin line-height-15"}>payment information</Text>
              <Text type={'p'} className={"e-body1 e-text-capitalize e-no-margin line-height-15"}>edit</Text>
            </Block>

            <Block className={'cart-item e-background-white e-v-end e-margin-bottom-15'}>
              <Block>
                <Image src={'assets/img/visa.png'} className={'e-img-rsp'} width={'50px'} />
                <Text type={'p'} classes={'e-text-left e-body1 e-no-margin e-text-uppercase e-text-grey-400'}>card number</Text>
                <Text type={'p'} classes={'e-text-left e-body1 e-no-margin'}>1234 5678 9123 4567</Text>
              </Block>

              <Block>
                <Text type={'p'} classes={'e-text-left e-body1 e-no-margin e-text-uppercase e-text-grey-400'}>expiration date</Text>
                <Text type={'p'} classes={'e-text-left e-body1 e-no-margin'}>06/17</Text>
              </Block>

              <Block>
                <Text type={'p'} classes={'e-text-left e-body1 e-no-margin e-text-uppercase e-text-grey-400'}>CVC</Text>
                <Text type={'p'} classes={'e-text-left e-body1 e-no-margin'}>444</Text>
              </Block>

            </Block>

            <Btn label={'Place Order'} ripple={true} type={'button'} className={'flat e-background-teal-A700 e-text-white e-no-margin e-no-padding no-min-size order-btn'} />

          </Block>
        );
    }
}

module.exports = MobileConfirmation;
