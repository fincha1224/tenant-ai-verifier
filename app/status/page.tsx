"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function StatusPage() {
  const params = useSearchParams();
  const jobId = params.get("jobId");

  const [status, setStatus] = useState("Processing...");
  const [decision, setDecision] = useState(null);

  async function fetchStatus() {
    const res = await fetch(`/api/status?jobId=${jobId}`);
    const data = await res.json();

    setStatus(data.status);

    if (data.status === "completed") {
      setDecision(data.decision);
    }
  }

  useEffect(() => {
    const interval = setInterval(fetchStatus, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-3">Verification Status</h1>

      <p className="text-lg">{status}</p>

      {decision && (
        <div className="mt-6 p-4 bg-white rounded-xl shadow">
          <h2 className="text-xl font-bold mb-2">Final Decision</h2>
          <pre className="bg-gray-100 p-3 rounded">
            {JSON.stringify(decision, null, 2)}
          : </pre>
        </div>
      )}
    </main>
  );
}
