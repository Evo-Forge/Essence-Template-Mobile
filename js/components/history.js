import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Icon, Image, Text, Utils} from 'react-essence';
import Input from 'essence-input';



class MobileHistory extends React.Component {

    render() {
        return (
          <Block className={'e-container e-padding-top-15 e-padding-bottom-50 e-background-grey-100 mobilecart confirmation'}>


            <Block className={'cart-item e-background-white'}>
              <Text type={'h2'} className={"e-button e-text-teal-A700 e-no-margin line-height-15"}>23 march</Text>
            </Block>


            <Block className={'cart-item e-background-white'}>
              <Block className={'left-col'}>
                <Block className={'img-container'}>
                  <Image src={'assets/img/food-square.jpg'} className={'e-img-rsp'}/>
                </Block>
              </Block>
              <Block className={'right-col history-view'}>
                <Block className={'text-container clean-look'}>
                  <Text type={'p'} classes={'e-text-left e-no-margin'}>
                    Grilled Turkey Fillet
                  </Text>
                  <Text type={'p'} classes={'e-text-right e-text-grey-500 price'}>
                    <Icon name={"editor-attach-money"} className={'no-min-size'} />
                    9.50
                  </Text>
                </Block>
                <Btn label={'Reorder'} ripple={true} type={'button'} className={'flat e-background-teal-A700 e-text-white e-no-margin e-no-padding'} />
              </Block>
            </Block>

            <Block className={'cart-item e-background-white'}>
              <Block className={'left-col'}>
                <Block className={'img-container'}>
                  <Image src={'assets/img/food-square.jpg'} className={'e-img-rsp'}/>
                </Block>
              </Block>
              <Block className={'right-col history-view'}>
                <Block className={'text-container clean-look'}>
                  <Text type={'p'} classes={'e-text-left e-no-margin'}>
                    Grilled Turkey Fillet
                  </Text>
                  <Text type={'p'} classes={'e-text-right e-text-grey-500 price'}>
                    <Icon name={"editor-attach-money"} className={'no-min-size'} />
                    9.50
                  </Text>
                </Block>
                <Btn label={'Reorder'} ripple={true} type={'button'} className={'flat e-background-teal-A700 e-text-white e-no-margin e-no-padding'} />
              </Block>
            </Block>
            
          </Block>
        );
    }
}

module.exports = MobileHistory;
