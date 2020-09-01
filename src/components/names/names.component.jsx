import React from 'react';

import NameSearch from '../name-search/name-search.component';
import NameList from '../name-list/name-list.component';

import './names.styles.scss';

const Names = (props) => (
  <div className="names">
    <NameSearch data={props.data}/>
  </div>
)

export default Names;