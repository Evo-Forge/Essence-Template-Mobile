import React from 'react';
import ClassNames from 'classnames';
import { AppBar, Block, Btn, Dialog, DialogHeader, DialogContent, DialogFooter, Divider, Icon, Image, Navigation, Text, Utils, Menu, List, ListItem,Switch } from 'react-essence';
import { Link } from 'react-router';


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

  candSeInchide() {
    if (this.props.onClose) {
      return this.props.onClose();
    }
  }

  render() {
    return (
      <Dialog className={'full'} visible={this.state.open} onClose={this.candSeInchide.bind(this)} >
       <DialogHeader className={'e-text-center relative'}>
        <Text className={' e-text-teal-A700 adjust-filter-text'}>Filters</Text>
        <Btn icon={'navigation-close'} onClick={this.hideDialog.bind(this)} className={'flat e-background-white e-text-teal-A700 adjust-filter-close'} />
       </DialogHeader>

       <DialogContent>
         <List type={'navigation'} className={'filter-ul'}>
           <ListItem>
            <Text type={'a'}>
             <Switch type={'checkbox'} classes={'content e-left'} name={'switch-uncheckbox'} text={'Mains'}/>
            </Text>
           </ListItem>
           <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
           <Switch type={'checkbox'} classes={'content e-left'} name={'switch-uncheckbox'} text={'Sides'}/>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
           <Switch type={'checkbox'} classes={'content e-left'} name={'switch-uncheckbox'} text={'Dairy-free'}/>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
           <Switch type={'checkbox'} classes={'content e-left'} name={'switch-uncheckbox'} text={'Gluten-free'}/>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
           <Switch type={'checkbox'} classes={'content e-left'} name={'switch-uncheckbox'} text={'Vegetarian'}/>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
           <Switch type={'checkbox'} classes={'content e-left'} name={'switch-uncheckbox'} text={'Vegan'}/>
           </Text>
          </ListItem>
          <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
          <ListItem>
           <Text type={'a'}>
           <Switch type={'checkbox'} classes={'content e-left'} name={'switch-uncheckbox'} text={'Spicy'}/>
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

class MobileNavigation extends React.Component {
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

  render() {
    return (
      <Navigation className={'e-background-teal-A700'}visible={this.state.open}>
      <Block className={'padding-left-20 e-margin-top-25 e-margin-bottom-25'}>
        <Text className={'e-text-white e-title'}>
          Caterit
        </Text>
      </Block>
			<List type={'navigation'} className={'nav-ul e-body1'}>
				<ListItem>
				 <Text type={'a'}>
					<Block classes={'content e-left e-text-white'}>MY ORDERS</Block>
				 </Text>
				</ListItem>
				<Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>ORDER HISTORY</Block>
				</Text>
			 </ListItem>
			 <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>PAYMENT DETAILS</Block>
				</Text>
			 </ListItem>
			 <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>DELIVERY ADDRESSES</Block>
				</Text>
			 </ListItem>
			 <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>ABOUT</Block>
				</Text>
			 </ListItem>
			 <Divider classes={'thin e-background-grey-200 e-text-center adjust-divider'} />
			 <ListItem>
				<Text type={'a'}>
				 <Block classes={'content e-left e-text-white'}>LOG OUT</Block>
				</Text>
			 </ListItem>
		 </List>
       </Navigation>
    );
  }
}

class MobileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
      navigation: false
    };
  }

  showDialog() {
    this.setState({
     dialog: true,
     navigation: false
    });
  }

  showNavigation() {
    this.setState({
    dialog: false,
     navigation: true
    });
  }



  render() {
      return (
        <Block>
          <AppBar className={'e-text-teal-A700 e-text-center'}>
            <Btn icon={"navigation-menu"} className={"e-left e-text-teal-A700 btn-bkg-color"} onClick={this.showNavigation.bind(this)} />

            <Text className={'e-text-center'}>Todayss Menu</Text>

             <List type={'inline'} className={'e-right'}>
               <ListItem>
                 <Link to={'content/cart'}>
                   <Icon name={"action-shopping-cart"}  />
                 </Link>

               </ListItem>
               <ListItem>
                  <Btn icon={"content-filter-list"} className={"e-text-teal-A700 btn-bkg-color"} onClick={this.showDialog.bind(this)} />
               </ListItem>
             </List>
          </AppBar>
          <MobileDialog visible={this.state.dialog}/>
          <MobileNavigation visible={this.state.navigation} />
        </Block>

      );
  }
}

module.exports = MobileHeader;
