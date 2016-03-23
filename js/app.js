import React from 'react';
import ReactDOM from 'react-dom';
import ClassNames from 'classnames';

/* Use of components */

// Essence core
import {Block} from 'react-essence';

// Components
import MobileHeader from './components/header';
import MobileMenu from './components/menu';
import MobileDetails from './components/details';
import MobileCart from './Components/cart'
import MobileCart from './components/cart';
import MobileConfirmation from './components/confirmation';
>>>>>>> cb23fffe2822c6fc98d433147dd22c30c2aeb4da
import MobileFooter from './components/footer';
import MobileSignup from './components/signup';


class Mobile extends React.Component {
	render() {
        return(
        	<Block>
						<MobileHeader />
						<MobileMenu />
						<MobileDetails />
						<MobileCart />
						<MobileCart />
            <MobileSignup />
        		<MobileHeader />
						<MobileConfirmation />
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
