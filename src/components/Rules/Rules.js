import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import styles from './Rules.module.css';

function Rules() {
  const history = useHistory();
  function onBack() {
    history.push('/Akinator_Int20h/game');
  }
  return (
    <div className={styles.rulesContainer}>
      <div className={styles.title}>Rules:</div>
      <ul className={styles.list}>
        <ol>1. You are writing text of your favourite song</ol>
        <ol>2. I'm trying to guess</ol>
        <ol>3. If I guess your song - game point will be mine, no - yours :)</ol>
        <ol>4. Who have got 5 points - winner (hope it's me)</ol>
        <ol>5. Happy (not hunger but) Games! And may the odds be ever in your favor</ol>
      </ul>
      <Button onClick={onBack}>
          Back
      </Button>
    </div>
  );
}

export default Rules;
