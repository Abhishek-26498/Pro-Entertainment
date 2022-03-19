import { useState, useEffect } from "react";

const useAudioPlayer=() =>{
    const[duration, setDuration] = useState();
    const[curtime, setCurtime] = useState();
    const[playing, setPlaying] = useState(false);
    const[clickedTime, setClickedTime] = useState();

    useEffect(()=>{
        const audio = document.getElementById("audio");

        const setAudioData = () =>{
            setDuration(audio.duration);
            setCurtime(audio.currentTime);
        }

        const setAudioTime = () => setCurtime(audio.currentTime);

        audio.addEventListener("loadeddata",setAudioData );

        audio.addEventListener("timeupdate",setAudioTime );

        playing ? audio.play() : audio.pause();

        if (clickedTime && clickedTime !== curtime) {
            audio.currentTime = clickedTime;
            setClickedTime(null);
        }

        return()=>{
            audio.removeEventListener("loadeddata",setAudioData);
            audio.removeEventListener("timeupdate", setAudioData);
        }

    });



    return{
            curtime,
            duration,
            playing,
            setPlaying,
            setClickedTime

    }
}
export default useAudioPlayer