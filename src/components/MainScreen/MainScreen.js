import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from './MainScreen.module.css';


function MainScreen() {
  return (
    <div className={styles.mainScreenContainer}>
            Hello World
      <Button type="primary">Click</Button>
    </div>
  );
}

MainScreen.propTypes = {

};

export default MainScreen;
