import React from 'react'

import AddItem from '../add-item/add-item.component';
import ItemList from '../item-list/item-list.component';

const DisplayOccasionItems = () => (
  <div className="display-occasion-items">
    <AddItem /> 
    <ItemList />
  </div>
);

export default DisplayOccasionItems;