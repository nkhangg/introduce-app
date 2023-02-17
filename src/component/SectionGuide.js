import React, { useRef, useState } from 'react';
import { RxSpeakerOff, RxSpeakerLoud } from 'react-icons/rx';
import { useSpeechSynthesis } from 'react-speech-kit';

const SectionGuide = ({ title, children, icon }) => {
    const [speaker, setSpeaker] = useState(false);
    const ref = useRef();

    const { speak, voices, cancel } = useSpeechSynthesis();

    const handleSpeaker = (e) => {
        setSpeaker((prev) => !prev);
        if (!speaker) {
            cancel();
            speak({ text: ref.current.innerText, voice: voices[3] });
        } else {
            cancel();
        }
    };

    return (
        <div ref={ref} className="flex flex-col gap-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
                {icon ? <span>{icon}</span> : ''}
                <span>{title}</span>
                <span className="cursor-pointer select-none" onClick={(e) => handleSpeaker(e)}>
                    {speaker ? <RxSpeakerOff /> : <RxSpeakerLoud />}
                </span>
            </h2>
            {children}
        </div>
    );
};

export default SectionGuide;
