import React from 'react';
import ClassNames from 'classnames';

import { AppBar, Block, Btn, Dialog, DialogHeader, DialogContent, DialogFooter, Divider, Icon, Image, Navigation, Text, Utils, Menu, List, ListItem,Switch } from 'react-essence';


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
      <Navigation visible={this.state.open}>
         <Block classes={'e-navigation-wrapper'} id={'navigationMenu'}>
          <Block type={'header'} className={'e-nav-header'} style={{lineHeight: '52px'}}>
           <Text type={'a'} href={'#home'}>
            <Image width={'40px'} height={'40px'} style={{verticalAlign: 'middle'}} src={'http://getessence.io/assets/img/essence_icon.png'} />
           </Text>
           <Text type={'h2'} classes={'e-text-indigo-400 e-right'} style={{width: '74%', lineHeight: '45px'}}>
            <Text>essence</Text>
           </Text>
          </Block>
          <List type={'navigation'} classes={'e-background-white'}>
           <ListItem key={'about'}>
            <Text type={'a'} href={'#about'}>
             <Block classes={'content e-left'}>
              <Text type={'small'}>About</Text>
             </Block>
            </Text>
           </ListItem>
           <ListItem key={'get-started'}>
            <Text type={'a'} href={'#get-started'}>
             <Block classes={'content e-left'}>
              <Text type={'small'}>Get Started</Text>
             </Block>
            </Text>
           </ListItem>
           <ListItem key={'contact'}>
            <Text type={'a'} href={'#contact'}>
             <Block classes={'content e-left'}>
              <Text type={'small'}>Contact</Text>
             </Block>
            </Text>
           </ListItem>
          </List>
         </Block>
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
     dialog: true
    });
  }

  showNavigation() {
    this.setState({
     navigation: true
    });
  }

  hideDialog() {
    this.setState({
      dialog: false,
      navigation: false
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
                 <Icon name={"action-shopping-cart"}  />
               </ListItem>
               <ListItem>
                  <Btn icon={"content-filter-list"} className={"e-text-teal-A700 btn-bkg-color"} onClick={this.showDialog.bind(this)} />
               </ListItem>
             </List>
          </AppBar>
          <MobileDialog visible={this.state.dialog} onClose={this.hideDialog.bind(this)} />
          <MobileNavigation visible={this.state.navigation} />
        </Block>

      );
  }
}

module.exports = MobileHeader;
