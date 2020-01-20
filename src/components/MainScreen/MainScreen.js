import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import styles from './MainScreen.module.css';


function MainScreen() {
  return (
    <div className={styles.mainScreenContainer}>
      <div className={styles.title}>Welcome to Akinator </div>
      <div className={styles.inputContainer}>
        <Input
          placeholder="Write your name please"
          size="large"
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          type="primary"
          block
        >
            Play :)
        </Button>
      </div>
    </div>
  );
}

MainScreen.propTypes = {

};

export default MainScreen;
