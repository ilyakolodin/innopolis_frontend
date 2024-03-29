import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom' 

import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
)
root.render(
	<BrowserRouter>
        <App />
	</BrowserRouter>
)
