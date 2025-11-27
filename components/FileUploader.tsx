"use client";
import { useState } from "react";

export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    const res = await fetch("/api/upload-documents", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ files }),
    });
    const data = await res.json();
    setStatus(data.success ? "Uploaded successfully" : data.error);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) =>
          setFiles(Array.from(e.target.files ?? []))
        }
      />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
}
