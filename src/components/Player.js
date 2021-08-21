import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const Player = ({reciterDetial,chapterDetial}) => {
  const audioLink = (reciter,number) =>{
    return reciter + '/' + ('00'+number).slice(-3)+'.mp3'
  }
    return (
        <div className='h-100 shadow-lg p-3 bg-red'>
        <h1 className='fs-5 fw-bold text-center'>Player</h1> <hr />
          {reciterDetial!==null&&chapterDetial!==null?(
            
            <ul className='list-group text-end'>
            <div>
              <li
                className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
              >
                <span className='fw-bold'>Reciter : </span>{' '}
                <span>{reciterDetial.name}</span>
              </li>
              <hr />
              <li
                className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
              >
                <span className='fw-bold'>chapter in ar:  </span>{' '}
                <span>{chapterDetial.name_arabic}</span>
              </li>
              <hr />
  
              <li
                className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
              >
                <span className='fw-bold'>Chapter In En: </span>{' '}
                <span>{chapterDetial.name_complex}</span>
              </li>
              <hr />
              <li
                className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
              >
                <span className='fw-bold'>Revelation Place: </span>{' '}
                <span>{chapterDetial.revelation_place}</span>
              </li>
              <hr />
              <li
                className={`list-group-item bg-transparent border-0 text-light py-0 d-flex justify-content-between`}
              >
                <span className='fw-bold'>translated_name </span>{' '}
                <span>{chapterDetial.translated_name.name}</span>
              </li>
              <hr />
  
              <div className='div '>
               
                <AudioPlayer
                autoPlay
                src={audioLink(reciterDetial.Server,chapterDetial.id)}
                
                />
              </div>
            </div>
          </ul>
          ):(

            <div className='text-center'>
            <span className='spinner-border'></span>
          </div>
            )}
      </div>
    )
}

export default Player
