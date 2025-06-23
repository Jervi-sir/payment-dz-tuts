import { useEffect, useState } from 'react';
import './App.css'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './components/ui/carousel';
import { AspectRatio } from './components/ui/aspect-ratio';
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert';
import { AlertCircleIcon, CheckCircle2Icon } from 'lucide-react';
import axios from 'axios';

const productImages = [
  'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
  'https://images.unsplash.com/photo-1557683316-973673baf926?w=800&dpr=2&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&dpr=2&q=80',
];
// Hardcoded product data
const product = {
  id: 1,
  name: 'Lacoste Language',
  description: 'Learn advanced programming concepts with our comprehensive course.',
  price: 9999, // in DZD (Algerian Dinar) cents
  currency: 'dzd',
};

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full space-y-6">
        <CarouselSection />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">
          {product.price / 100} {product.currency.toUpperCase()}
        </p>
        <PurchaseButton
          productId={product.id}
          price={product.price}
        />
      </div>
    </div>
  )
}

export default App


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
              <img
                src={src}
                alt={`${product.name} image ${index + 1}`}
                className="object-cover"
              />
            </AspectRatio>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="text-center mt-2 text-sm text-gray-500">
        Image {current} of {count}
      </div>
    </Carousel>
  )
}


const PurchaseButton = ({ productId, price }: any) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handlePurchase = async () => {
    setLoading(true);
    setAlert(null);
    const payload = {
      amount: 9999,
      currency: 'dzd',
      success_url: import.meta.env.VITE_SUCCESS_URL,
      metadata: {
        username: 'testuser',
        email: 'customer@example.com',
        course_id: productId,
      },
    };
    const baseUrl = 'https://pay.chargily.net/test/api/v2/checkouts';
    const response = await axios.post(baseUrl, payload, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_CHARGILY_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('response.data: ', response.data);
    const { checkout_url } = response.data;
    if (!checkout_url) {
      throw new Error('Checkout URL not found in response');
    }
    setAlert({ type: 'success', message: 'Redirecting to payment...' });
    setTimeout(() => {
      window.location.href = checkout_url;
    }, 1500);

  }

  return (
    <div className="space-y-4 dark">
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
  )

}

