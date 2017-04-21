import React, { Component } from 'react';
import styles from './page-header.less';

export default class Header extends Component {
  render () {
    return (
      <div className={styles.header}>
        <h1>Todos Manager</h1>
      </div>
    );
  }
}
