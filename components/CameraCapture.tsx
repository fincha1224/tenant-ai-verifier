"use client";

import { useRef, useState } from "react";

export default function CameraCapture({ onCapture }: { onCapture: any }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [streaming, setStreaming] = useState(false);

  async function startCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoRef.current!.srcObject = stream;
    setStreaming(true);
  }

  async function captureImage() {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current!.videoWidth;
    canvas.height = videoRef.current!.videoHeight;
    canvas.getContext("2d")!.drawImage(videoRef.current!, 0, 0);
    canvas.toBlob((blob) => {
      if (blob) onCapture(blob);
    });
  }

  return (
    <div>
      {!streaming ? (
        <button
          onClick={startCamera}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          Start Camera
        </button>
      ) : (
        <>
          <video autoPlay ref={videoRef} className="w-full rounded-xl"></video>
          <button
            onClick={captureImage}
            className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Capture
          </button>
        </>
      )}
    </div>
  );
}
