import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Tab, Image, Icon, Divider} from 'react-essence';
import { Link } from 'react-router';

var response = [
  {id: 1, img: 'http://www.seriouseats.com/recipes/assets_c/2011/06/158222-20110623-sunday-supper-lemon-grilled-turkey-breast-thumb-625xauto-168616.jpg', name: 'Grilled Turkey Fillet', price: 9.50},
  {id: 2, img: 'https://s3.amazonaws.com/Menu_Pic/2ed0bfba-f94e-4554-87b8-a3ee6086c409_1_Img47496%20copy.jpg', name: 'Chinese Mix Vegetables with Shrimps', price: 8.50},
  {id: 3, img: 'http://images.edge-generalmills.com/a65edace-d08f-48f9-9971-7e00671a32f4.jpg', name: 'Chicken Fillet with Coriander Cumin Crust and Sweetcorn', price: 11.50},
];

class MobileMenuItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Block>
        <Block>
          <Link to={`/content/details/${this.props.itemId}`}>
            <Image classes={'e-img-rsp'} src={this.props.image} />
          </Link>
        </Block>
        <Block classes={'main-active'}>
          <Block>
           <Text type={'p'} classes={'e-text-left e-title e-text-black'}>{this.props.name}</Text>
           <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>{this.props.price}</Text>
          </Block>
          <Block>
            <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
          </Block>
        </Block>
        <Divider classes={'thinnest e-background-grey-200'} />
       </Block>
    )
  }
}

class MobileMenuItemList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var itemList = this.props.data.map(
      (item) => {
        return (
        <MobileMenuItem image={item.img} itemId={item.id} name={item.name} price={item.price} />
      );
    }
    )
    return (
      <Block>
        {itemList}
      </Block>
    );
  }
}

class MobileMenu extends React.Component {

    render() {
        return (
          <Block className={'mobile-menu'}>
        	   <MobileMenuItemList data={response} />
          </Block>
        );
    }
}

module.exports = MobileMenu;
