"use client";
import { useRef, useState } from "react";

export default function CameraCapture() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [status, setStatus] = useState("");

  const startCamera = async () => {
    if (navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    }
  };

  return (
    <div>
      <video ref={videoRef} autoPlay width={300}></video>
      <button onClick={startCamera}>Start Camera</button>
      <p>{status}</p>
    </div>
  );
}
