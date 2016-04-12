import React from 'react';
import ClassNames from 'classnames';

import { Btn, AppBar, Block, Text, Utils, Menu, List, ListItem, Tab, Image, Icon, Divider} from 'react-essence';

var tabs = {
 'header': [
   { 'context': (<Text classes={'e-text-black e-body2'}>details</Text>) },
   { 'context': (<Text classes={'e-text-black e-body2'}>review</Text>) }
  ],
  'rows': [
   (<Block classes={'e-background-grey-100 details-main'}>
      <Block classes={'details-content'}>
        <Block classes={'content-padding'}>
         <Image classes={'e-img-rsp'} src={'http://www.seriouseats.com/recipes/assets_c/2011/06/158222-20110623-sunday-supper-lemon-grilled-turkey-breast-thumb-625xauto-168616.jpg'} />
        </Block>
        <Block classes={'main-active content-padding'}>
          <Block>
           <Text type={'p'} classes={'e-text-left e-headline e-text-black'}>$9.50</Text>
          </Block>
          <Block classes={'quantity'}>
            <Btn icon={'content-remove'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
            <Text type={'p'} classes={'e-title e-background-teal-400 e-text-white quantity-label e-v-center e-h-center'}>2</Text>
            <Btn icon={'content-add'} ripple={true} type={'success'} classes={'flat e-background-teal-A700 e-text-white'} />
          </Block>
        </Block>
        <Block classes={'e-background-white content-padding'}>
          <Text type={'p'} classes={'e-text-left e-subhead e-text-teal-A700'}>Description</Text>
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          </Text>
        </Block>
        <Block classes={'e-background-white content-padding'}>
          <Text type={'p'} classes={'e-text-left e-subhead e-text-teal-A700'}>Ingredients</Text>
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            About 1/2 kg boneless and skinless turkey breast fillets
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            1 small red onion finely chopped
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            1 clove garlic smashed and chopped
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            1/2 tsp ground cinnamon
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            1 tsp ground ginger
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            1/4 tsp ground cloves
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            2 tbsp white vinegar
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            1/2 tsp brown sugar
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            2 tbsp olive oil
          </Text>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            salt and pepper to taste
          </Text>
        </Block>
        <Block classes={'e-background-white content-padding'}>
          <Text type={'p'} classes={'e-text-left e-subhead e-text-teal-A700'}>Nutritional facts</Text>
          <Block classes={'nutrition-content'}>
            <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-500'}>Calories</Text>
            <Text type={'span'} classes={'e-text-right e-body1 e-text-grey-500'}>120</Text>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Block classes={'nutrition-content'}>
            <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-500'}>Fats</Text>
            <Text type={'span'} classes={'e-text-right e-body1 e-text-grey-500'}>15%</Text>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Block classes={'nutrition-content'}>
            <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-500'}>Proteins</Text>
            <Text type={'span'} classes={'e-text-right e-body1 e-text-grey-500'}>17%</Text>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
          <Block classes={'nutrition-content'}>
            <Text type={'span'} classes={'e-text-left e-body1 e-text-grey-500'}>Carbohydrates</Text>
            <Text type={'span'} classes={'e-text-right e-body1 e-text-grey-500'}>43%</Text>
          </Block>
          <Divider classes={'thinnest e-background-grey-200'} />
        </Block>
        <Block classes={'e-background-white content-padding'}>
          <Text type={'p'} classes={'e-text-left e-subhead e-text-teal-A700'}>Delivery Information</Text>
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            06:00 PM until 10:00 PM
          </Text>
        </Block>
       </Block>
       <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-teal-A700'} />
   </Block>),
   (<Block classes={'e-background-grey-100'}>
      <Block classes={'review-main'}>
        <Block classes={'review-card'}>
          <Block classes={'rating'}>
            <Block classes={'rating-stars e-headline'}>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9734;</Text>
              <Text type={'span'} classes={'e-text-left e-caption e-text-grey-500'}>&nbsp;&nbsp;&nbsp;4</Text>
            </Block>
          </Block>
        </Block>
        <Block classes={'review-card e-background-white'}>
          <Block classes={'rating'}>
            <Text type={'span'} classes={'e-text-center e-caption e-text-grey-500'}>Samantha Dorri</Text>
            <Text type={'span'} classes={'e-text-left e-caption e-text-grey-300'}>January 15, 2016</Text>
            <Block classes={'rating-stars e-headline'}>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9734;</Text>
            </Block>
          </Block>
          <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Great food!</Text>
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </Block>
      </Block>
      <Block classes={'review-main'}>
        <Block classes={'review-card e-background-white'}>
          <Block classes={'rating'}>
            <Text type={'span'} classes={'e-text-center e-caption e-text-grey-500'}>Adam Smith</Text>
            <Text type={'span'} classes={'e-text-center e-caption e-text-grey-300'}>December 20, 2015</Text>
            <Block classes={'rating-stars e-headline'}>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
            </Block>
          </Block>
          <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Awesome service</Text>
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </Text>
        </Block>
      </Block>
      <Block classes={'review-main'}>
        <Block classes={'review-card e-background-white'}>
          <Block classes={'rating'}>
            <Text type={'span'} classes={'e-text-center e-caption e-text-grey-500'}>David Tomelty</Text>
            <Text type={'span'} classes={'e-text-center e-caption e-text-grey-300'}>December 05, 2015</Text>
            <Block classes={'rating-stars e-headline'}>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9734;</Text>
            </Block>
          </Block>
          <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Just order and enjoy!</Text>
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </Block>
      </Block>
      <Block classes={'review-main'}>
        <Block classes={'review-card e-background-white'}>
          <Block classes={'rating'}>
            <Text type={'span'} classes={'e-text-center e-caption e-text-grey-500'}>Jennifer Kanaan</Text>
            <Text type={'span'} classes={'e-text-center e-caption e-text-grey-300'}>November 9, 2015</Text>
            <Block classes={'rating-stars e-headline'}>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9733;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9734;</Text>
              <Text type={'span'} classes={'e-text-center e-title e-text-orange-400'}>&#9734;</Text>
            </Block>
          </Block>
          <Text type={'p'} classes={'e-text-left e-title e-text-black'}>No regret :)</Text>
          <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </Text>
        </Block>
      </Block>
   </Block>),
 ]
};


class MobileDetails extends React.Component {
    render() {
      console.log(this.props.params);
        return (
        	<Block classes={'mobile-details'}>
            <Tab
              data={tabs}
              classes={'e-text-black'}
              indicator={'e-background-teal-A700'}/>
			    </Block>
        );
    }
}

module.exports = MobileDetails;
