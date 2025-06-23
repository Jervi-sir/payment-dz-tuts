'use client'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';
import Image from "next/image";
import { useEffect, useState } from 'react';

// Sample images (replace with your product images)
const productImages = [
  'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
  'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&dpr=2&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&dpr=2&q=80',
];

// Hardcoded product data
const product = {
  id: 1,
  name: 'Premium Course',
  description: 'Learn advanced programming concepts with our comprehensive course.',
  price: 9999, // in DZD (Algerian Dinar) cents
  currency: 'dzd',
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full space-y-6">
        <CarouselSection />
        <PurchaseButton productId={product.id} price={product.price} />

      </div>
    </div>
  );
}


const CarouselSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full">
      <CarouselContent>
        {productImages.map((src, index) => (
          <CarouselItem key={index}>
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`${product.name} image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0} // Optimize for first image
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="text-center mt-2 text-sm text-gray-500">
        {count > 0 ? `Image ${current} of ${count}` : 'Loading images...'}
      </div>
    </Carousel>
  );
};


const PurchaseButton = ({ productId, price }: { productId: number; price: number }) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handlePurchase = async () => {
    setLoading(true);
    setAlert(null);
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId,
        username: 'testuser', // Replace with actual user data
        email: 'customer@example.com', // Replace with actual user data
      }),
    });
    const data = await response.json();
    const { checkout_url } = data;
    setAlert({ type: 'success', message: 'Redirecting to payment...' });
    setTimeout(() => {
      window.location.href = checkout_url;
    }, 1500);

  }

  return (
    <div className="space-y-4">
      {alert && (
        <Alert variant={alert.type === 'error' ? 'destructive' : 'default'}>
          {alert.type === 'success' ? <CheckCircle2Icon /> : <AlertCircleIcon />}
          <AlertTitle>{alert.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
          <AlertDescription>{alert.message}</AlertDescription>
        </Alert>
      )}
      <button
        onClick={handlePurchase}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
      >
        {loading ? 'Processing...' : 'Purchase Now'}
      </button>
    </div>
  );
};
