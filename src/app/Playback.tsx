'use client';

import { useEffect } from "react";
import { getSystemErrorName } from "util";

async function getStream() {
    const devices = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
    } as MediaStreamConstraints);
    return devices;
}

export default function Playback() {

    useEffect(() => {
        getStream().then(stream => {
            const videoElement = document.getElementById('localCam')! as HTMLVideoElement;
            if (videoElement.srcObject === null) {
                videoElement.srcObject = stream; 
            }
        })
        
    }, [])

    return (
        <div>
            <video id="localCam" autoPlay />
        </div>
    )
}