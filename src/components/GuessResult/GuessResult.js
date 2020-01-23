/* eslint-disable react/forbid-prop-types,
react/jsx-one-expression-per-line,react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import ReactPlayer from 'react-player';

import styles from './GuessResult.module.css';

function GuessResult(props) {
  const {
    preview,
    userName,
    score,
    round,
    onSetRound,
    onSetScore,
    guessedData,
    setIsGuessFormOpen,
  } = props;


  function onClickGuessedRight() {
    onSetScore({ ...score, akinator: score.akinator + 1 });
    onSetRound(round + 1);
    setIsGuessFormOpen(true);
  }

  function onClickGuessedWrong() {
    onSetScore({ ...score, user: score.user + 1 });
    onSetRound(round + 1);
    setIsGuessFormOpen(true);
  }

  return (
    <div className={styles.resultContainer}>
      <div>Round {round}</div>
      <div>{`${userName} score: ${score.user}`}</div>
      <div>{`Akinator score: ${score.akinator}`}</div>
      <div>{`${guessedData.artist} ${guessedData.title}`}</div>
      <ReactPlayer
        url={preview}
        playing
        controls
        volume
        playIcon
        height="50px"
      />
      <div className={styles.buttonContainer}>
        <Button
          type="primary"
          onClick={onClickGuessedRight}
          style={{ backgroundColor: '#2ecc71', borderColor: '#2ecc71' }}
        >
          Guess Right
        </Button>
        <Button
          type="danger"
          onClick={onClickGuessedWrong}
        >
          Guess Wrong
        </Button>
      </div>
    </div>
  );
}


GuessResult.propTypes = {
  preview: PropTypes.string,
  guessedData: PropTypes.object.isRequired,
  onSetScore: PropTypes.func.isRequired,
  onSetRound: PropTypes.func.isRequired,
  round: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  setIsGuessFormOpen: PropTypes.func.isRequired,

};

GuessResult.defaultProps = {
  preview: '',
};

export default GuessResult;
