import React from 'react'

import Occasion from '../occasion/occasion.component';
import DisplayOccasionItems from '../display-occasion-items/display-occasion-items.component';

import './display.styles.scss';

const Display = () => (
  <div className="display">
      <Occasion />
      <DisplayOccasionItems />
  </div>
)

export default Display;