import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Menu.module.css';

function Menu() {
  const history = useHistory();

  function onChangePlayer() {
    localStorage.removeItem('gameUserName');
    history.push('/Akinator_Int20h/');
  }

  function redirectToRules() {
    history.push('/Akinator_Int20h/rules');
  }


  return (
    <div className={styles.menuContainer}>
      <div
        className={styles.link}
        onClick={redirectToRules}
      >
                Rules
      </div>
      <div
        className={styles.link}
        onClick={onChangePlayer}
      >
                Change player
      </div>
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
