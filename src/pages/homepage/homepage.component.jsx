import React from 'react';

import Names from '../../components/names/names.component';
import Display from '../../components/display/display.component';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Names />
    <Display />
  </div>
)

export default HomePage