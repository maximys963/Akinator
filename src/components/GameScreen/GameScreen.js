/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import { Input, Button } from 'antd';
import { config } from "../../etc/config.js";
import styles from './GameScreen.module.css';

const { audDApiToken } = config;

function GameScreen() {
  const { TextArea } = Input;
  const [lyrics, setLyrics] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
      const name = localStorage.getItem('gameUserName');
      setUserName(name)
  }, []);

  const onLyricsChange = useCallback( (e) => {
      const text = e.target.value;
      setLyrics(text)
  }, []);

  const onSubmitLyrics = useCallback(async () => {
      try{
          const data = JSON.stringify({
              q: lyrics,
              api_token: audDApiToken
          });

          const response = await fetch('https://api.audd.io/findLyrics/?jsonp=?', {
              method: 'POST',
              body: data
          });

          const respTest = await response.text();
          const cutResponse = JSON.parse(respTest.slice(2, respTest.length -1));
          console.log('cutResponse');
          console.log(cutResponse);
      } catch (err) {
          console.error(err)
      }
  }, [lyrics]);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.contentContainer}>
          <div className={styles.title}>
              {`Hello ${userName}, let's play `}
          </div>
          <div className={styles.textArea}>
        <TextArea
            onChange={(e) => onLyricsChange(e)}
        />
          </div>
          <Button
              type="primary"
              onClick={onSubmitLyrics}
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
