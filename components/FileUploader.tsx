"use client";

import { useState } from "react";

export default function FileUploader({ onChange }: { onChange: any }) {
  const [files, setFiles] = useState<File[]>([]);

  function handleFiles(e: any) {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    onChange(selected);
  }

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFiles}
        className="border p-3 rounded-lg w-full"
      />

      {files.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium mb-2">Selected Files:</h3>
          <ul>
            {files.map((file, idx) => (
              <li key={idx}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
