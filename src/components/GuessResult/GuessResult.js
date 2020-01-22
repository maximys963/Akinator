import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import ReactPlayer from 'react-player';

import styles from './GuessResult.module.css';

function GuessResult(props) {
  const { artist, song, preview } = props;
  return (
    <div className={styles.resultContainer}>
      <div>{`${artist} ${song}`}</div>
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
          style={{ backgroundColor: '#2ecc71', borderColor: '#2ecc71' }}
          type="primary"
        >
          Guessed
        </Button>
        <Button
          type="danger"
        >
            Guessed Wrong
        </Button>
      </div>
    </div>
  );
}


GuessResult.propTypes = {
  artist: PropTypes.string,
  song: PropTypes.string,
  preview: PropTypes.string
};

GuessResult.defaultProps = {
  artist: 'Adele',
  song: 'Hello',
  preview: '',
};

export default GuessResult;
