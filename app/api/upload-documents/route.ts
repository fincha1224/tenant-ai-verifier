import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side secrets
    const n8nWebhook = process.env.N8N_URL!;
    const supabaseUrl = process.env.SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_KEY!;

    // Call N8N webhook
    const n8nRes = await axios.post(n8nWebhook, body);

    // Save document metadata to Supabase
    await axios.post(`${supabaseUrl}/rest/v1/rental_documents`, body, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    });

    return NextResponse.json({ success: true, n8nRes: n8nRes.data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
