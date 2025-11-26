import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();

  const n8nRes = await fetch("143.198.139.31:5678/webhook/", {
    method: "POST",
    body: data
  });

  const response = await n8nRes.json();

  return NextResponse.json({
    jobId: response.jobId
  });
}
