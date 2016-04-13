import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Icon, Image, Text, Utils} from 'react-essence';
import { Link } from 'react-router';

var cartData = [
  {id: 1, name: "Grilled Turkey Fillet", price: 9.50, pieceNumber: 2},
  {id: 2, name: "Chinese Mix Vegetables with Shrimps", price: 12.50, pieceNumber: 1},
  {id: 3, name: "Chicken Fillet with Coriander Cumin Crust and Sweetcorn", price: 8.80, pieceNumber: 1}
];

class MobileCartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pieceNumber : this.props.pieceNumber,
      totalItemsPrice : this.props.pieceNumber * this.props.price
    };
  }

  addItem() {
    this.setState(
      {
      pieceNumber : this.state.pieceNumber + 1,
      totalItemsPrice : this.state.totalItemsPrice + this.props.price
      }
  );
    this.props.addSubtotal(this.props.price);
  }

  removeItem() {
    /* TODO test: we can't have negative pieceNumber & delete item from cart list if pieceNumber is 0 ?!  */
    this.setState(
      {
        pieceNumber : this.state.pieceNumber - 1,
        totalItemsPrice : this.state.totalItemsPrice - this.props.price
      }
    );
    this.props.addSubtotal(-this.props.price);
  }

  render() {
    return (
      <Block className={'cart-item edit-view'}>
        <Block className={'left-col'}>
          <Block className={'img-container'}>
            <Image src={'assets/img/food-square.jpg'} className={'e-img-rsp'}/>
          </Block>
          <Btn icon={'action-delete'} ripple={true} type={'button'} className={'flat e-text-white e-background-red-300 del-item'} />
        </Block>
        <Block className={'right-col'}>
          <Block className={'text-container'}>
            <Text type={'p'} classes={'e-text-left e-no-margin'}>
              {this.props.name}
            </Text>
            <Text type={'p'} classes={'e-text-left e-text-grey-500 price'}>
              <Icon name={"editor-attach-money"} className={'no-min-size'} />
              <Text>{this.props.price.toFixed(2)}</Text>
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
    var addSubtotal = this.props.addSubtotal;
    var cartItems = this.props.data.map(function(item) {
      return (
        <MobileCartItem addSubtotal={addSubtotal} key={item.id} name={item.name} price={item.price} pieceNumber={item.pieceNumber} />
      );
    }
  );
    return (
      <Block>
        {cartItems}
      </Block>
    );
  }
}



class MobileCart extends React.Component {
  constructor(props) {
    super(props);
    var subtotal = 0;
    cartData.map(function(item) {
      return (item.price * item.pieceNumber);
    }).forEach(function(el) {
      subtotal += el;
    });

    console.log('subtotal', subtotal);
    this.state = {
      subtotal: subtotal
    };
  }

  addSubtotal(price) {
    this.setState({subtotal: this.state.subtotal + price});
  }
    render() {
        return (
          <Block className={'e-container e-padding-top-15 mobilecart'}>
            <MobileCartItemList data={cartData} addSubtotal={this.addSubtotal.bind(this)} />
            <Block className={'cart-item e-v-center e-padding-top-15'}>
              <Text type={'p'} classes={'e-button e-text-grey-500'}>subtotal</Text>
              <Text type={'p'} classes={' e-text-uppercase e-display-1'}>
                <Icon name={"editor-attach-money"} className={'no-min-size'} />
                {this.state.subtotal.toFixed(2)}
              </Text>
            </Block>
            <Link to={'/content/confirmation'}>
              <Btn label={'Place Order'} ripple={true} type={'button'} className={'flat e-background-teal-A700 e-text-white e-no-margin e-no-padding no-min-size order-btn'} />
            </Link>

          </Block>
        );
    }
}

module.exports = MobileCart;
