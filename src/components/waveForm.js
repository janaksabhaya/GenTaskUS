import React, { useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js'
import 'tailwindcss/tailwind.css';

const Waveform = ({ audioUrl, isPlaying }) => {
    const waveformRef = useRef(null);
    const waveSurfer = useRef(null);
    const regions = RegionsPlugin.create();

    useEffect(() => {
        if (waveformRef.current) {
            waveSurfer.current = WaveSurfer.create({
                container: waveformRef?.current,
                waveColor: '#FF0074',
                progressColor: '#A44AFF',
                cursorColor: '#1C64F2',
                barWidth: 4,
                barGap: 2,
                barHeight: 1,
                barRadius: 3,
                height: 300,
                width: 400,
                responsive: true,
                backgroundColor: '#F8F9FB',
                fillParent: true,
                showTime: true,
                plugins: [regions],
            });

            waveSurfer.current.load(audioUrl);

            const random = (min, max) => Math.random() * (max - min) + min
            const randomColor = () => `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.5)`

            waveSurfer.current.on('decode', () => {
                regions.addRegion({
                    start: 6,
                    end: 10,
                    content: 'H',
                    color: '#DEE2E6',
                })
                regions.addRegion({
                    start: 15,
                    end: 16,
                    content: 'H',
                    color: '#DEE2E6',
                })
                regions.addRegion({
                    id:'f-content',
                    start: 20,
                    end: 24,
                    content: 'F',
                    color: '#FD7E14',
                    
                })
                regions.addRegion({
                    start: 32,
                    end: 36,
                    content: 'H',
                    color: '#DEE2E6',
                })
            })

            return () => {
                if (waveSurfer.current) {
                    waveSurfer.current?.destroy()
                };
            }
        }
    }, [audioUrl]);

    useEffect(() => {
        if (waveSurfer.current) {
            if (isPlaying) {
                waveSurfer.current.play();
            } else {
                waveSurfer.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <div className='relative'>
            <div className="waveform-container absolute  rotate-90 p-4 top-[40px] -left-[54px]">
                <div ref={waveformRef} className="waveform" />
            </div>
            
        </div>
    );
};

export default Waveform;