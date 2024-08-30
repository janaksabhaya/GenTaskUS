import React, { useState, useEffect, useRef } from 'react';

const CallRecordingPlayer = ({audioUrl, onPlayPause}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState('00:00');
    const [duration, setDuration] = useState('03:34');
    const audioRef = useRef(null);


    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            onPlayPause(true);
        } else {
            audioRef.current.pause();
            onPlayPause(false);
        }
    }, [isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const updateProgress = () => {
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(progress);

        const minutes = Math.floor(audioRef.current.currentTime / 60);
        const seconds = Math.floor(audioRef.current.currentTime % 60);
        setCurrentTime(`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
    };

    return (
        <div className="flex items-center w-full gap-3">
            <button onClick={togglePlayPause} className='cursor-pointer flex items-center'>{!isPlaying ? <i className="bi bi-play-circle text-[20px] text-[#0D6EFD]"></i> : <i className="bi bi-pause-circle text-[20px] text-[#0D6EFD]"></i>} <span className='font-bold ms-3 mr-2'>Call Recording</span></button>
            <div className="relative h-5 bg-[#DCE8FF] rounded-full flex-grow">
                <div className="bg-[#0D6EFD] h-full rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <span className="text-sm text-[#333]">{currentTime}/{duration}</span>
            <audio
                ref={audioRef}
                src={audioUrl}
                onTimeUpdate={updateProgress}
                onLoadedMetadata={() => setDuration('03:34')}
            />
        </div>
    );
};

export default CallRecordingPlayer;
