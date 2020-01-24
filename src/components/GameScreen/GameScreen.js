/* eslint-disable */
import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import GuessForm from "../GuessForm/GuessForm";
import GuessResult from '../GuessResult/GuessResult';
import { Spin } from 'antd';
import dotProp from "dot-prop";
import { onNotify} from "../../utils/onNotify";


import { config } from "../../etc/config.js";

import styles from './GameScreen.module.css';
import {useHistory} from "react-router-dom";

const { audDApiToken } = config;

function GameScreen(props) {
    const { setWinner, setScore, score } = props;
    const history = useHistory();

  const [lyrics, setLyrics] = useState('');
  const [userName, setUserName] = useState('');
  const [isGuessFormOpen, setIsGuessFormOpen ] = useState(true);
  const [previewLink, setPreviewLink ] = useState('');
  const [guessedData, setGuessedData] = useState({artist: '', title: ''});
  const [ isLoading, setLoading ] = useState(false);
    const [round, setRound] = useState(0);

    function onSetRound() {
        setRound(round + 1);
    }

    function onSetScore(newScore) {
        setScore(newScore);
    }

    function checkScore () {
        if(score.user === 5 ){
            setWinner(userName);
            history.push('/Akinator_Int20h/winner')
        } else if(score.akinator === 5){
            setWinner('Akinator');
            history.push('/Akinator_Int20h/winner')
        }
    }

  useEffect(() => {
      const name = localStorage.getItem('gameUserName');

      if(!name) {
          history.push('/Akinator_Int20h')
      }

      setUserName(name)
  }, []);

    useEffect( () => {
        checkScore()
    }, [isGuessFormOpen]);

  const onLyricsChange = useCallback( (e) => {
      const text = e.target.value;
      setLyrics(text)
  }, []);

  function renderGuessForm () {
      return (
          <>
              {
                  isLoading
                  ? (
                      <Spin tip="Let me thing" />
                     )
                      : (
                          <GuessForm
                              userName={userName}
                              score={score}
                              round={round}
                              onLyricsChange={onLyricsChange}
                              onSubmitLyrics={onSubmitLyrics}
                          />
                      )
              }

              </>
      )
  }

  const onSubmitLyrics = useCallback(async () => {
      try{
          setLoading(true);

          if(lyrics === ''){
              onNotify(
                  'bottomRight',
                  `Ohh ... Looks like you not write song text:)`,
                  `I can't guess void ) Or can ? ^_^ `
                  );
              setLoading(false);
              return;
          }

          const data = JSON.stringify({
              q: lyrics,
              api_token: audDApiToken
          });

          const response = await fetch('https://api.audd.io/findLyrics/?jsonp=?', {
              method: 'POST',
              origin : 'https://api.audd.io/',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: data
          });

          const respTest = await response.text();

          const cutResponse = JSON.parse(respTest.slice(2, respTest.length -1)).result;


          if(cutResponse.length === 0){
              onNotify(
                  'bottomRight',
                  `Ohh ... Sorry darning, I not found such song :(((`,
                  'Come on, try again )))'
              );
              setLoading(false);
              return;
          }

          const artist = dotProp.get(cutResponse, `0.artist`);
          const title = dotProp.get(cutResponse, `0.title`);

          setGuessedData({artist, title });

         const deezerData = await fetch(` https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=track:"${title.toLowerCase()}" q=artist:"${artist}"`);

         const previewData = await deezerData.json();

         if(previewData.data.length === 0){
             onNotify(
                 'bottomRight',
                 `Ohh ... Sorry darning, I not found such song :(((`,
                 'Come on, try again )))'
             );
             setLoading(false);
             return
         }

         const preview = await dotProp.get(previewData, 'data.0.preview', '');
          setPreviewLink(preview);
          setIsGuessFormOpen(false);
          setLoading(false)

      } catch (err) {
          setLoading(false);
          onNotify(
              'bottomRight',
              `Ohh ... Sorry darning, I not found such song :(((`,
              'Come on, try again )))'
          );
          console.error(err)
      }
  }, [lyrics]);

  return (
    <div className={styles.gameContainer}>
        {
            isGuessFormOpen
            ? (
                renderGuessForm()
                )
                : (
                    <GuessResult
                        userName={userName}
                        setIsGuessFormOpen={setIsGuessFormOpen}
                        guessedData={guessedData}
                        preview={previewLink}
                        onSetRound={onSetRound}
                        onSetScore={onSetScore}
                        score={score}
                        round={round}
                    />
                )
        }

    </div>
  );
}

export default GameScreen;
