import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Icon, Image, Text, Utils} from 'react-essence';

class MobileCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceNumber : this.props.pieceNumber
    };
  }

  addItem() {
    this.setState({pieceNumber : this.state.pieceNumber + 1})
  }

  removeItem() {
    /* TODO test: we can't have negative pieceNumber  */
    this.setState({pieceNumber : this.state.pieceNumber - 1})
  }

  render() {
    return (
      <Block className={'cart-item'}>
        <Block className={'left-col'}>
          <Block className={'img-container'}>
            <Image src={'assets/img/food-square.jpg'} className={'e-img-rsp'}/>
          </Block>
          <Btn icon={'action-delete'} ripple={true} type={'button'} className={'flat e-text-white e-background-red-300 del-item'} />
        </Block>
        <Block className={'right-col'}>
          <Block className={'text-container'}>
            <Text type={'p'} classes={'e-text-left e-no-margin'}>
              Grilled Turkey Fillet
            </Text>
            <Text type={'p'} classes={'e-text-left e-text-grey-500 price'}>
              <Icon name={"editor-attach-money"} className={'no-min-size'} />
              9.50
            </Text>
          </Block>

          <Block className={'label-container'}>
            <Text type={'p'} classes={'e-text-center e-body2'}>x</Text>
            <Text type={'p'} classes={'e-text-center e-body2'}>{this.state.pieceNumber}</Text>
          </Block>
          <Block className={'btn-container'}>
            <Btn onClick={this.addItem.bind(this)} label={'+'} ripple={true} type={'button'} className={'flat e-background-teal-A700 e-text-white e-no-margin e-no-padding no-min-size'} />
            <Btn label={this.state.pieceNumber} ripple={true} type={'button'} className={'flat e-background-teal-400 e-text-white e-no-margin e-no-padding no-min-size label-btn'} />
            <Btn onClick={this.removeItem.bind(this)} label={'-'} ripple={true} type={'button'} className={'flat e-background-teal-A700 e-text-white e-no-margin e-no-padding no-min-size'} />
          </Block>
        </Block>
      </Block>
    );
  }
}

class MobileCartItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block>
        <MobileCartItem pieceNumber={1} />
        <MobileCartItem pieceNumber={1} />
        <MobileCartItem pieceNumber={1} />
        <MobileCartItem pieceNumber={1} />
      </Block>
    );
  }
}

class MobileCart extends React.Component {

    render() {
        return (
          <Block className={'e-container e-padding-top-15 mobilecart'}>
            <MobileCartItemList />

            <Block className={'cart-item e-v-center e-padding-top-15'}>
              <Text type={'p'} classes={'e-button e-text-grey-500'}>subtotal</Text>
              <Text type={'p'} classes={' e-text-uppercase e-display-1'}>
                <Icon name={"editor-attach-money"} className={'no-min-size'} />
                22.00
              </Text>
            </Block>

            <Btn label={'Place Order'} ripple={true} type={'button'} className={'flat e-background-teal-A700 e-text-white e-no-margin e-no-padding no-min-size order-btn'} />

          </Block>
        );
    }
}

module.exports = MobileCart;
