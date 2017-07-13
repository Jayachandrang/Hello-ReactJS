import React from 'react';
import ReactDOM from 'react-dom';
import MenuBar from './MenuBar';

import './menu.css';

ReactDOM.render(<MenuBar items={ ['Dashboard', 'Services', 'Reports', 'Applications'] }/>, document.getElementById('container'));
