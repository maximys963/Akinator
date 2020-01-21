/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button, Input } from 'antd';
import styles from './MainScreen.module.css';


function MainScreen() {
  const [inputValues, setInputValues] = useState('');
  const history = useHistory();

  function onChangeInput(e) {
    const text = e.target.value;
    setInputValues(text);
  }

  function onSetUserName() {
    localStorage.setItem('gameUserName', inputValues);
    history.push('/game');
  }

  return (
    <div className={styles.mainScreenContainer}>
      <div className={styles.title}>Welcome to Akinator </div>
      <div className={styles.inputContainer}>
        <Input
          value={inputValues}
          placeholder="Write your name please"
          onChange={(e) => onChangeInput(e)}
          size="large"
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          onClick={onSetUserName}
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
