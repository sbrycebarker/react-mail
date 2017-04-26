import React from 'react';
import {render} from 'react-dom';
import {Router, Router, browserHistory} from "react-router";

import App from "./component/App";
import Inbox from "./component/Inbox";
import Message from ".component/Message";
import Draft from "./components/Draft";
import Contacts from "./component/Contacts";

document.addEventListener( "DOMContentLoaded", () => {
	const reactNode = document.getElementById( "root" );

	if ( reactNode ) {
		ReactDOM.render(
			<Router history={ browserHistory }>
				<Route path="/" component={ App }>
					<Route path="draft" component={ Draft } />
					<Route path="contacts" component={ Contacts } />
					<Route path="inbox" component={ Inbox }>
						<Route path="/inbox/:messageId" component={ Message } />
					</Route>
				</Route>
			</Router>
		, reactNode )
	}
} );

render(
  <h1>Webpack is running! Edit index.js to continue...</h1>,
  document.getElementById('root')
)
