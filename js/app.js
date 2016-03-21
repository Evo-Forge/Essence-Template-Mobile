import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import MobileHeader from './components/header';
import MobileFooter from './components/footer';
import MobileSignup from './components/signup';


class Mobile extends React.Component {
	render() {
        return(
        	<Block>
                <MobileSignup />
        	</Block>
        );
    }
}

ReactDOM.render(
	<Block>
		<Mobile />
	</Block>
	,
	document.querySelector('.app')
);
