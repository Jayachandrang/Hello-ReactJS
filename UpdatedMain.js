import React from 'react';
import ReactDOM from 'react-dom';
import MenuExample from './MenuExample';

import './menu.css';

ReactDOM.render(<MenuExample items={ ['Dashboard', 'Services', 'Reports', 'Applications'] }/>, document.getElementById('container'));
