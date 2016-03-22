import React from 'react';
import ClassNames from 'classnames';

import { AppBar, Block, Icon, Text, Utils, Menu, List, ListItem} from 'react-essence';

class MobileHeader extends React.Component {

    render() {
        return (
          <AppBar className={'e-text-teal-A700 e-text-center'}>
            <Icon name={"navigation-menu"} className={"e-left"} />

            <Text className={'e-text-center'}>Todayss Menu</Text>

             <List type={'inline'} className={'e-right'}>
               <ListItem>
                 <Icon name={"action-shopping-cart"}  />
               </ListItem>
               <ListItem>
                 <Icon name={"content-filter-list"} />
               </ListItem>
             </List>

          </AppBar>
        );
    }
}

module.exports = MobileHeader;
