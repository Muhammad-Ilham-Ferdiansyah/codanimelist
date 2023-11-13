'use client'

import { useState } from "react";

const { default: YouTube } = require("react-youtube")

const VideoPlayer = ({ youtubeID }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleVideoPlayer = () => {
        setIsOpen((prevState)=> !prevState);
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button 
                onClick={handleVideoPlayer}
                className="text-white float-right bg-slate-800 px-3 mb-1">
                    X
                </button>
                <YouTube 
                videoId={youtubeID} 
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Video is broken, please try another.")}
                />
            </div>
        )
    }

    const ButtonTrailer = () => {
        return (
            <button
            onClick={handleVideoPlayer} 
            className="rounded fixed bottom-5 right-5 w-32 bg-white text-slate-950 text-xl hover:bg-slate-200 transition-all shadow-xl">
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <Player/> : <ButtonTrailer/>
}

export default VideoPlayer