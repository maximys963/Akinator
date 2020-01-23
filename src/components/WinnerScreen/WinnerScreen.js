import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd'
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
    <div>
      {
            winner
              ? (
                <>
                  <div>Congratulations !!!</div>
                  <div>{`Winner is ${winner}`}</div>
                  <Button
                      onClick={onClickPlayAgain}
                  >
                    Play Again
                  </Button>
                </>
              )
              : (<div> Hmm... who will be winner ?</div>)
        }

    </div>
  );
}

WinnerScreen.propTypes = {
  winner: PropTypes.oneOf([null, PropTypes.string]),
  setScore : PropTypes.func.isRequired
};

WinnerScreen.defaultProps = {
  winner: null,
};

export default WinnerScreen;
