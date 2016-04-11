import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Tab, Image, Icon, Divider} from 'react-essence';

var menuitems = [
  {id: 1, img: 'http://www.seriouseats.com/recipes/assets_c/2011/06/158222-20110623-sunday-supper-lemon-grilled-turkey-breast-thumb-625xauto-168616.jpg', name: 'Grilled Turkey Fillet', price: 9.50},
  {id: 2, img: 'https://s3.amazonaws.com/Menu_Pic/2ed0bfba-f94e-4554-87b8-a3ee6086c409_1_Img47496%20copy.jpg', name: 'Chinese Mix Vegetables with Shrimps', price: 8.50},
  {id: 3, img: 'http://images.edge-generalmills.com/a65edace-d08f-48f9-9971-7e00671a32f4.jpg', name: 'Chicken Fillet with Coriander Cumin Crust and Sweetcorn', price: 11.50},
];

var tabs = {
 'header': [
   { 'context': (<Text classes={'e-text-black e-body2'}>main dishes</Text>) },
   { 'context': (<Text classes={'e-text-black e-body2'}>siders</Text>) },
   { 'context': (<Text classes={'e-text-black e-body2'}>desserts</Text>) }
  ],
  'rows': [
   (<Block>

      <Block>
        <Block>
         <Image classes={'e-img-rsp'} src={'http://www.seriouseats.com/recipes/assets_c/2011/06/158222-20110623-sunday-supper-lemon-grilled-turkey-breast-thumb-625xauto-168616.jpg'} />
        </Block>
        <Block classes={'main-active'}>
          <Block>
           <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Grilled Turkey Fillet</Text>
           <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$9.50</Text>
          </Block>
          <Block>
            <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
          </Block>
        </Block>
        <Divider classes={'thinnest e-background-grey-200'} />
       </Block>

       <Block>
         <Block>
          <Image classes={'e-img-rsp'} src={'https://s3.amazonaws.com/Menu_Pic/2ed0bfba-f94e-4554-87b8-a3ee6086c409_1_Img47496%20copy.jpg'} />
         </Block>
         <Block classes={'main-active'}>
           <Block>
            <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chinese Mix Vegetables with Shrimps</Text>
            <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$7.50</Text>
           </Block>
           <Block>
             <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
           </Block>
         </Block>
         <Divider classes={'thinnest e-background-grey-200'} />
        </Block>
        <Block>
          <Block>
           <Image classes={'e-img-rsp'} src={'http://images.edge-generalmills.com/a65edace-d08f-48f9-9971-7e00671a32f4.jpg'} />
          </Block>
          <Block classes={'main-active'}>
            <Block>
             <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chicken Fillet with Coriander Cumin Crust and Sweetcorn</Text>
             <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$8.50</Text>
            </Block>
            <Block>
              <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
            </Block>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
         </Block>
   </Block>),
   (<Block>
      <Block>
        <Block>
         <Image classes={'e-img-rsp'} src={'http://www.seriouseats.com/recipes/assets_c/2011/06/158222-20110623-sunday-supper-lemon-grilled-turkey-breast-thumb-625xauto-168616.jpg'} />
        </Block>
        <Block classes={'main-active'}>
          <Block>
           <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Grilled Turkey Fillet</Text>
           <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$9.50</Text>
          </Block>
          <Block>
            <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
          </Block>
        </Block>
        <Divider classes={'thinnest e-background-grey-200'} />
       </Block>
       <Block>
         <Block>
          <Image classes={'e-img-rsp'} src={'https://s3.amazonaws.com/Menu_Pic/2ed0bfba-f94e-4554-87b8-a3ee6086c409_1_Img47496%20copy.jpg'} />
         </Block>
         <Block classes={'main-active'}>
           <Block>
            <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chinese Mix Vegetables with Shrimps</Text>
            <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$7.50</Text>
           </Block>
           <Block>
             <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
           </Block>
         </Block>
         <Divider classes={'thinnest e-background-grey-200'} />
        </Block>
        <Block>
          <Block>
           <Image classes={'e-img-rsp'} src={'http://images.edge-generalmills.com/a65edace-d08f-48f9-9971-7e00671a32f4.jpg'} />
          </Block>
          <Block classes={'main-active'}>
            <Block>
             <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chicken Fillet with Coriander Cumin Crust and Sweetcorn</Text>
             <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$8.50</Text>
            </Block>
            <Block>
              <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
            </Block>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
         </Block>
   </Block>),
   (<Block>
      <Block>
        <Block>
         <Image classes={'e-img-rsp'} src={'http://www.orlandocakes.com/wp-content/gallery/desserts/desserts2.jpg'} />
        </Block>
        <Block classes={'main-active'}>
          <Block>
           <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Lava Cake</Text>
           <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$9.50</Text>
          </Block>
          <Block>
            <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
          </Block>
        </Block>
        <Divider classes={'thinnest e-background-grey-200'} />
       </Block>
       <Block>
         <Block>
          <Image classes={'e-img-rsp'} src={'http://restaurant-atlantic.com/en/wp-content/uploads/2015/04/dessert.jpg'} />
         </Block>
         <Block classes={'main-active'}>
           <Block>
            <Text type={'p'} classes={'e-text-left e-title e-text-black'}>"Atlantic" Dessert</Text>
            <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$7.50</Text>
           </Block>
           <Block>
             <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
           </Block>
         </Block>
         <Divider classes={'thinnest e-background-grey-200'} />
        </Block>
        <Block>
          <Block>
           <Image classes={'e-img-rsp'} src={'http://thesweetspot.com.my/wp-content/uploads/2013/07/Oreo-Extreme-Cheesecake.jpg'} />
          </Block>
          <Block classes={'main-active'}>
            <Block>
             <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Oreo Extreme Cheesecake</Text>
             <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$8.50</Text>
            </Block>
            <Block>
              <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
            </Block>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
         </Block>
   </Block>)
 ]
};
var tabs2 = {
 'header': [
   { 'context': (<Icon name={"action-view-agenda"} className={"e-text-grey-500"} />) },
   { 'context': (<Icon name={"action-view-module"} className={"e-text-grey-500"} />) }
  ],
  'rows': [
   (<Block>
      <Block>
        <Block>
         <Image classes={'e-img-rsp'} src={'http://www.seriouseats.com/recipes/assets_c/2011/06/158222-20110623-sunday-supper-lemon-grilled-turkey-breast-thumb-625xauto-168616.jpg'} />
        </Block>
        <Block classes={'main-active'}>
          <Block>
           <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Grilled Turkey Fillet</Text>
           <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$9.50</Text>
          </Block>
          <Block>
            <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
          </Block>
        </Block>
        <Divider classes={'thinnest e-background-grey-200'} />
       </Block>
       <Block>
         <Block>
          <Image classes={'e-img-rsp'} src={'https://s3.amazonaws.com/Menu_Pic/2ed0bfba-f94e-4554-87b8-a3ee6086c409_1_Img47496%20copy.jpg'} />
         </Block>
         <Block classes={'main-active'}>
           <Block>
            <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chinese Mix Vegetables with Shrimps</Text>
            <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$7.50</Text>
           </Block>
           <Block>
             <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
           </Block>
         </Block>
         <Divider classes={'thinnest e-background-grey-200'} />
        </Block>
        <Block>
          <Block>
           <Image classes={'e-img-rsp'} src={'http://images.edge-generalmills.com/a65edace-d08f-48f9-9971-7e00671a32f4.jpg'} />
          </Block>
          <Block classes={'main-active'}>
            <Block>
             <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chicken Fillet with Coriander Cumin Crust and Sweetcorn</Text>
             <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$8.50</Text>
            </Block>
            <Block>
              <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
            </Block>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
         </Block>
   </Block>),
   (<Block classes={'grid-view-container'}>
      <Block classes={'grid-view'}>
        <Block>
         <Image classes={'e-img-rsp'} src={'http://www.seriouseats.com/recipes/assets_c/2011/06/158222-20110623-sunday-supper-lemon-grilled-turkey-breast-thumb-625xauto-168616.jpg'} />
        </Block>
        <Block classes={'main-active'}>
          <Block>
           <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Grilled Turkey Fillet</Text>
           <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$9.50</Text>
          </Block>
          <Block>
            <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
          </Block>
        </Block>
        <Divider classes={'thinnest e-background-grey-200'} />
       </Block>
       <Block classes={'grid-view'}>
         <Block>
          <Image classes={'e-img-rsp'} src={'https://s3.amazonaws.com/Menu_Pic/2ed0bfba-f94e-4554-87b8-a3ee6086c409_1_Img47496%20copy.jpg'} />
         </Block>
         <Block classes={'main-active'}>
           <Block>
            <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chinese Mix Vegetables with Shrimps</Text>
            <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$7.50</Text>
           </Block>
           <Block>
             <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
           </Block>
         </Block>
         <Divider classes={'thinnest e-background-grey-200'} />
        </Block>
        <Block classes={'grid-view'}>
          <Block>
           <Image classes={'e-img-rsp'} src={'http://images.edge-generalmills.com/a65edace-d08f-48f9-9971-7e00671a32f4.jpg'} />
          </Block>
          <Block classes={'main-active'}>
            <Block>
             <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chicken Fillet with Coriander Cumin Crust and Sweetcorn</Text>
             <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$8.50</Text>
            </Block>
            <Block>
              <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
            </Block>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
         </Block>
        <Block classes={'grid-view'}>
          <Block>
           <Image classes={'e-img-rsp'} src={'http://images.edge-generalmills.com/a65edace-d08f-48f9-9971-7e00671a32f4.jpg'} />
          </Block>
          <Block classes={'main-active'}>
            <Block>
             <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Chicken Fillet with Coriander Cumin Crust and Sweetcorn</Text>
             <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>$8.50</Text>
            </Block>
            <Block>
              <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
            </Block>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
         </Block>
   </Block>),
 ]
};

class MenuItem extends React.Component {
  constructor() {
    super(props);
  }
  render() {
    return(
      <Block>
        <Block>
         <Image classes={'e-img-rsp'} src={this.props.img} />
        </Block>
        <Block classes={'main-active'}>
          <Block>
           <Text type={'p'} classes={'e-text-left e-title e-text-black'}>{this.props.name}</Text>
           <Text type={'p'} classes={'e-text-left e-title e-text-grey-500'}>${this.props.price}</Text>
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

class MenuList extends React.Component {
  constructor() {
    super(props);
  }

  render() {

    return(
      {menuList}
    )
  }
}

class MobileMenu extends React.Component {

    render() {
        return (
        	<MenuList data={menuItems} />
        );
    }
}

module.exports = MobileMenu;
