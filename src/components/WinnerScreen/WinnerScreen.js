import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import styles from './WinnerScreen.module.css';

function WinnerScreen(props) {
  const history = useHistory();
  const { winner, setScore } = props;


  function onClickPlayAgain() {
    history.push('/Akinator_Int20h/');
    setScore({
      user: 0,
      akinator: 0,
    });
  }

  return (
    <div className={styles.winnerContainer}>
      {
            winner
              ? (
                <>
                  <div className={styles.congratulations}>Congratulations !!!</div>
                  <div className={styles.winner}>{`Winner is ${winner}`}</div>
                  <Button
                    type="primary"
                    style={{ backgroundColor: '#2ecc71', borderColor: '#2ecc71' }}
                    onClick={onClickPlayAgain}
                  >
                    Play Again
                  </Button>
                </>
              )
              : (
                <>
                  <div className={styles.winner}> Hmm... who will be winner ?</div>
                  <Button
                    type="primary"
                    style={{ backgroundColor: '#2ecc71', borderColor: '#2ecc71' }}
                    onClick={onClickPlayAgain}
                  >
                      Back
                  </Button>
                </>
              )
        }

    </div>
  );
}

WinnerScreen.propTypes = {
  winner: PropTypes.oneOf([null, PropTypes.string]),
  setScore: PropTypes.func.isRequired,
};

WinnerScreen.defaultProps = {
  winner: null,
};

export default WinnerScreen;
