"use client";

import { useState } from "react";
import FileUploader from "@/components/FileUploader";
import CameraCapture from "@/components/CameraCapture";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function UploadPage() {
  const router = useRouter();

  const [files, setFiles] = useState<File[]>([]);
  const [images, setImages] = useState<Blob[]>([]);

  async function handleSubmit() {
    const form = new FormData();

    files.forEach((file) => form.append("documents", file));
    images.forEach((img) => form.append("documents", img));

    const res = await axios.post("/api/submit", form);

    router.push("/status?jobId=" + res.data.jobId);
  }

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Upload Required Documents</h1>

      <FileUploader onChange={setFiles} />

      <h2 className="text-xl font-semibold mt-6 mb-3">
        Or Capture Using Camera
      </h2>
      <CameraCapture onCapture={(img: Blob) => setImages([...images, img])} />

      <button
        onClick={handleSubmit}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl w-full"
      >
        Submit for Verification
      </button>
    </main>
  );
}
