/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import styles from './GuessForm.module.css';

const { TextArea } = Input;

function GuessForm(props) {
  const { userName, onLyricsChange, onSubmitLyrics } = props;
  return (
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
  );
}

GuessForm.propTypes = {
  userName: PropTypes.string.isRequired,
  onLyricsChange: PropTypes.func.isRequired,
  onSubmitLyrics: PropTypes.func.isRequired,
};

export default GuessForm;
