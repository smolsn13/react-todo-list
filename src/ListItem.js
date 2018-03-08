import React, { Component } from 'react';
import './App.css';

const ListItem = props => (
  <div>
    <li>
      {props.doThis}
      <button onClick={props.deleteItem}>X</button>
    </li>
  </div>
)

export default ListItem;
