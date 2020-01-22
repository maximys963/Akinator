/* eslint-disable */
import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import GuessForm from "../GuessForm/GuessForm";
import GuessResult from '../GuessResult/GuessResult';
import { getRandomIndex } from "../../utils/getRandomIndex";
import { config } from "../../etc/config.js";
import styles from './GameScreen.module.css';
import dotProp from "dot-prop";

const { audDApiToken } = config;

function GameScreen() {

  const [lyrics, setLyrics] = useState('');
  const [userName, setUserName] = useState('');
  const [isGuessOpen, setIsGuessOpen ] = useState(true);
  const [previewLink, setPreviewLink ] = useState('');
  const [points, setPoints ] = useState({
      akinator: 0,
      user: 0
  });

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
          const cutResponse = JSON.parse(respTest.slice(2, respTest.length -1)).result;
          // const randomIndex = getRandomIndex(0, cutResponse.length -1);

          console.log('cutResponse');
          console.log(cutResponse);

          const artist = dotProp.get(cutResponse, `0.artist`);
          const title = dotProp.get(cutResponse, `0.title`);



          console.log('artist');
          console.log(artist);

          console.log('title');
          console.log(title)

         // const randomIndex = getRandomIndex(0, 10);

          console.log(`https://api.deezer.com/search?q=track:"${title.toLowerCase()}" q=artist:"${artist}"`);

         const deezerData = await fetch(`https://api.deezer.com/search?q=track:"${title.toLowerCase()}" q=artist:"${artist}"`);
         const previewData = await deezerData.json();

          console.log('previewData');
          console.log(previewData)

         const preview = await dotProp.get(previewData, 'data.0.preview', '');
          setPreviewLink(preview);
          setIsGuessOpen(false);


         console.log('preview');
         console.log(preview);


      } catch (err) {
          console.error(err)
      }
  }, [lyrics]);

  return (
    <div className={styles.gameContainer}>
        {
            isGuessOpen
            ? (
                    <GuessForm
                        userName={userName}
                        onLyricsChange={onLyricsChange}
                        onSubmitLyrics={onSubmitLyrics}
                    />
                )
                : (
                    <GuessResult
                        preview={previewLink}
                    />
                )
        }

    </div>
  );
}

export default GameScreen;
