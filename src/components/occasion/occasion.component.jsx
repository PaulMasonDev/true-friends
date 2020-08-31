import React from 'react'

import AddOccasion from '../add-occasion/add-occasion.component';
import DisplayOccasion from '../display-occasion/display-occasion.component';

import './occasion.styles.scss';

const Occasion = () => (
  <div className="occasion">
    <AddOccasion />
    <DisplayOccasion />
  </div>
);

export default Occasion;

