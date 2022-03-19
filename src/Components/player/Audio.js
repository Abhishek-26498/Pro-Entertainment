import React from 'react'
import Song from './Song'
import Play from './Play'
import Pause from './Pause'
import Bar from './Bar'
import SongsData from '../SongsData'
import './Player.css'
import useAudioPlayer from './useAudioPlayer'


const Audio = () => {
    const { curTime, duration, playing, setPlaying, setClickedTime } = useAudioPlayer();

    return (
        <>
            <div className='player'>


                <audio id="audio" >
                    <source src='feelings.mp3'type='audio'/>
                
                    Your browser does not support the element.
                </audio>
                <Song songName='Hath Chumee' />





                <div className="controls">
                    {playing ?
                        <Pause handleClick={() => setPlaying(false)} /> :
                        <Play handleClick={() => setPlaying(true)} />
                    }
                    <Bar curTime={curTime} duration={duration} onTimeUpdate={(time) => setClickedTime(time)} />
                </div>
            </div>
        </>

    )
}

export default Audio