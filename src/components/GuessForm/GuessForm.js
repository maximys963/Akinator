/* eslint-disable react/jsx-filename-extension,react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import styles from './GuessForm.module.css';

const { TextArea } = Input;

function GuessForm(props) {
  const {
    userName,
    onLyricsChange,
    onSubmitLyrics,
    score,
    round,
  } = props;

  return (
    <div className={styles.contentContainer}>
      <div className={styles.round}>{`Round ${round}`}</div>
      <div className={styles.players}>{`${userName} score: ${score.user}`}</div>
      <div className={styles.players}>{`Akinator score: ${score.akinator}`}</div>

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
  score: PropTypes.object.isRequired,
  round: PropTypes.number.isRequired,
};

export default GuessForm;
