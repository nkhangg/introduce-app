import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/img/bg.jpg';
import { Button } from '../component';
import { useSpeechSynthesis } from 'react-speech-kit';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { RxSpeakerOff, RxSpeakerLoud } from 'react-icons/rx';
import { useState } from 'react';

const Home = () => {
    const ref = useRef();

    const [speaker, setSpeaker] = useState(false);

    const { speak, voices, cancel } = useSpeechSynthesis();

    const handleSpeaker = () => {
        setSpeaker((prev) => !prev);
        if (!speaker) {
            speak({ text: ref.current.innerText, voice: voices[3] });
        } else {
            cancel();
        }
    };
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
            }}
            className="w-full h-screen flex flex-col items-center justify-center bg-center overflow-hidden"
        >
            <section className="w-2/4 flex flex-col items-center gap-7 justify-center">
                <motion.div
                    initial={{
                        y: -300,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.4,
                    }}
                    className="flex flex-col justify-center items-center gap-2"
                >
                    <h1 className="text-5xl font-bold">Giới Thiệu Phần Mềm</h1>
                    <span className="font-bold">Software Introduction</span>
                </motion.div>
                <motion.p
                    className="flex flex-col gap-4"
                    ref={ref}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 0.6,
                    }}
                >
                    Polypro là dự án mẫu. Mục tiêu chính là huấn luyện sinh viên qui trinh thực hiện dự án.
                    <p>
                        Mục tiêu của dự án này là để rèn luyện kỹ năng IO (CDIO) tức yêu cầu sinh viên không phải thu
                        thập phân tích mà chỉ thực hiện và vận hành một phần mềm chuẩn bị cho các dự án sau này. Các kỹ
                        năng CD (trong CDIO) sẽ được huấn luyện ở dự án 1 và dự án 2
                    </p>
                    <span>Yêu cầu môi trường</span>
                    <ol>
                        <li>1. Hệ điều hành bất kì</li>
                        <li>2. JDK 1.8 trở lên</li>
                        <li>3. SQL Server 2008 trở lên</li>
                    </ol>
                </motion.p>

                <motion.div
                    initial={{
                        y: 200,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.8,
                    }}
                >
                    <div className="flex gap-4">
                        <Link to={'/guide/guide-login'}>
                            <Button>Hướng Dẫn Sử Dụng</Button>
                        </Link>
                        <Button onClick={(e) => handleSpeaker(e)}>
                            <span className="text-xl">{speaker ? <RxSpeakerOff /> : <RxSpeakerLoud />}</span>
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
