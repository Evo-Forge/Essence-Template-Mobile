import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import MobileHeader from './components/header';
import MobileCart from './components/cart';
import MobileConfirmation from './components/confirmation';
import MobilePayment from './components/payment';
import MobileFooter from './components/footer';


class Mobile extends React.Component {
	render() {
        return(
        	<Block>
        		<MobileHeader />
						<MobilePayment />
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
