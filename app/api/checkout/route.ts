import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { productId, username, email } = await request.json();
    if (!productId || !username || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    const payload = {
      amount: 9999,
      currency: 'dzd',
      success_url: process.env.NEXT_PUBLIC_SUCCESS_URL,
      metadata: {
        username,
        email,
        course_id: productId,
      },
    };
    const baseUrl = 'https://pay.chargily.net/test/api/v2/checkouts';
    const response = await axios.post(baseUrl, payload, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CHARGILY_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    const { checkout_url } = response.data;
    if (!checkout_url) {
      return NextResponse.json(
        { error: 'Checkout URL not found in response' },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkout_url: checkout_url }, { status: 200 });
}