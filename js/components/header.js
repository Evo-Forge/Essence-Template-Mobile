import React from 'react';
import ClassNames from 'classnames';

import { AppBar, Block, Btn, Dialog, DialogHeader, DialogContent, DialogFooter, Divider, Icon, Navigation, Text, Utils, Menu, List, ListItem,Switch } from 'react-essence';


class MobileDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.visible || false
    };
  }

  componentWillReceiveProps(nextProps) {
    let states = this.state;
    states.open = nextProps.visible;

    this.setState(states);
  }

  showDialog() {
    this.setState({
     open: true
    });
  }

  hideDialog() {
    this.setState({
     open: false
    });
  }

  render() {
    return (
      <Dialog className={'full'} dismissible={false} visible={this.state.open}>
       <DialogHeader className={'e-text-center relative'}>
        <Text className={' e-text-teal-A700 adjust-filter-text'}>Filters</Text>
        <Btn icon={'navigation-close'} onClick={this.hideDialog.bind(this)} className={'flat e-background-white e-text-teal-A700 adjust-filter-close'} />
       </DialogHeader>

       <DialogContent>
         <List type={'navigation'} className={'filter-ul'}>
           <ListItem>
            <Text type={'a'}>
             <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
             <Block classes={'content e-left'}>Mains</Block>
            </Text>
           </ListItem>
           <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
            <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
            <Block classes={'content e-left'}>Sides</Block>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
            <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
            <Block classes={'content e-left'}>Dairy-Free</Block>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
            <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
            <Block classes={'content e-left'}>Gluten-Free</Block>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
            <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
            <Block classes={'content e-left'}>Vegetarian</Block>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
            <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
            <Block classes={'content e-left'}>Vegan</Block>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
            <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
            <Block classes={'content e-left'}>Spicy</Block>
           </Text>
          </ListItem>
        </List>
      </DialogContent>

       <DialogFooter>
       </DialogFooter>
      </Dialog>
    );
  }
}

class MobileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  showDialog() {
    this.setState({
     open: true
    });
  }

  render() {
      return (
        <Block>
          <AppBar className={'e-text-teal-A700 e-text-center'}>
            <Icon name={"navigation-menu"} className={"e-left"} />

            <Text className={'e-text-center'}>Todayss Menu</Text>

             <List type={'inline'} className={'e-right'}>
               <ListItem>
                 <Icon name={"action-shopping-cart"}  />
               </ListItem>
               <ListItem>
                  <Btn icon={"content-filter-list"} className={"e-text-teal-A700 btn-bkg-color"} onClick={this.showDialog.bind(this)} />
               </ListItem>
             </List>
          </AppBar>

          <MobileDialog visible={this.state.open} />
        </Block>
      );
  }
    render() {
        return (
        	<AppBar classes={'e-background-indigo-800'}>
        		<Block className={'e-container '}>
        			<Block className={'brick-12 e-no-margin'}>
						<List type={'inline'}>
							<ListItem>
								<Text type={'a'} href={'#Home'} className={'e-text-uppercase e-text-white'}>Mobile</Text>
							</ListItem>
						</List>
					</Block>
				</Block>
			</AppBar>
        );
    }
}

module.exports = MobileHeader;
