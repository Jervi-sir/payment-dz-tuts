<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $product = [
            'id' => 1,
            'name' => 'Test Product',
            'description' => 'A high-quality product for testing payment integration.',
            'price' => 100,
            'currency' => 'dzd',
            'images' => [
                'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80',
                'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
            ],
        ];

        return Inertia::render('welcome', [
            'product' => $product,
        ]);
    }

    public function initiatePayment(Request $request)
    {
        $request->validate([
            'product_id' => 'required|integer',
        ]);

        // Hardcoded product to maintain state
        $product = [
            'id' => $request->product_id,
            'name' => 'Test Product',
            'description' => 'A high-quality product for testing payment integration.',
            'price' => 9999,
            'currency' => 'dzd',
            'images' => [
                'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&q=80',
                'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&q=80',
                'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
            ],
        ];

        $payload = [
            'amount' => $product['price'],
            'currency' => 'dzd',
            'success_url' => env('CHARGILY_SUCCESS_URL'),
            'metadata' => [
                'username' => 'testuser',
                'email' => 'customer@example.com',
                'course_id' => $product['id'],
            ],
        ];

        $apiKey = env('CHARGILY_API_KEY');
        $baseUrl = 'https://pay.chargily.net/test/api/v2/checkouts';

        $response = Http::withHeaders([
            'Authorization' => "Bearer $apiKey",
            'Content-Type' => 'application/json',
        ])->post($baseUrl, $payload);

        if ($response->failed()) {
            return Inertia::render('welcome', [
                'product' => $product,
                'errors' => ['error' => $response->json('message', 'Failed to initiate payment')],
            ]);
        }

        $data = $response->json();

        if (!isset($data['checkout_url'])) {
            return Inertia::render('welcome', [
                'product' => $product,
                'errors' => ['error' => 'Checkout URL not found in response'],
            ]);
        }

        return Inertia::render('welcome', [
            'product' => $product,
            'checkout_url' => $data['checkout_url'],
        ]);
    }
}
