/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import styles from './GameScreen.module.css';


function GameScreen() {
  const { TextArea } = Input;
  const [lyrics, setLyrics] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
      const name = localStorage.getItem('gameUserName')
      setUserName(name)
  }, []);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.contentContainer}>
          <div className={styles.title}>
              {`Hello ${userName}, let's play `}
          </div>
          <div className={styles.textArea}>
        <TextArea />
          </div>
          <Button
              type="primary"
          >
              Guess
          </Button>
      </div>
    </div>
  );
}

GameScreen.propTypes = {

};

export default GameScreen;
