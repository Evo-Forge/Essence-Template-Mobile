import React from 'react';
import ClassNames from 'classnames';
import ContentBlock from '../components/contentBlock';
import MobileHeader from '../components/header';
import { Block } from 'react-essence';

class MobileContainer extends React.Component {

  render() {
      return (
        <Block>
          <MobileHeader/>
          <ContentBlock>
            {this.props.children}
          </ContentBlock>
        </Block>
      );
  }
}

module.exports = MobileContainer;
