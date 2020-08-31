import React from 'react';

import NameSearch from '../name-search/name-search.component';
import NameList from '../name-list/name-list.component';

import './names.styles.scss';

const Names = () => (
  <div className="names">
    <NameSearch />
    <NameList />
  </div>
)

export default Names;