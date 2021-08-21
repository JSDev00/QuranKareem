import React, {useState, useEffect} from 'react';
import Chapters from './Chapters';
import Player from './Player';
import Readers from './Readers';
import axios from 'axios';
const HomeScreen = () => {
  const [reciters, setReaders] = useState ([]);
  const [chapters, setChapters] = useState ([]);
  const [reciterDetial, setReciterDetial] = useState (null);
  const [chapterDetial, setChapterDetial] = useState (null);

  // Get All Reciters with Audio
  useEffect (() => {
    async function fetchData () {
      const {data: {reciters}} = await axios.get (
        `https://mp3quran.net/api/_english.php`
      );

      setReaders (reciters);
    }

    fetchData ();
  }, []);
  useEffect (
    () => {
      async function fetchData () {
        const {data: {chapters}} = await axios.get (
          'https://api.quran.com/api/v4/chapters'
        );
        setChapters (chapters);
      }
      reciters && reciters.length > 0 && fetchData ();
    },
    [reciters]
  );
  const reciterHandler = reciter => {
    setReciterDetial (reciter);
  };
  const chapterHandler = chapter => {
    setChapterDetial (chapter);
  };
  return (
    <div className="row p-5 vh-100">
      <div className="col-lg-4 col-sm-12 col-12 col-md-4 scroll bg-all">
        <Readers reciters={reciters} reciterHandler={reciterHandler} />
      </div>
      <div className="col-lg-4 col-sm-12 col-12 col-md-4 scroll bg-all">
        <Chapters chapterHandler={chapterHandler} chapters={chapters} />
      </div>
      <div className="col-lg-4 col-sm-12 col-12 col-md-4 scroll bg-all">
        <Player reciterDetial={reciterDetial}  chapterDetial={chapterDetial} />
      </div>
    </div>
  );
};

export default HomeScreen;
