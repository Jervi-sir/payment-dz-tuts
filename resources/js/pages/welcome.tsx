import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { resourceUsage } from 'process';
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { router } from '@inertiajs/react';

export default function Welcome({ product }: any) {
  // const { auth } = usePage<SharedData>().props;



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full space-y-6">
        <CarouselSection product={product} />
        <h1 className="text-3xl font-bold mb-2 text-black">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4 text-black">
          {product.price} {product.currency.toUpperCase()}
        </p>

        <PurchaseButton
          productId={product.id}
          price={product.price}
        />
      </div>
    </div>
  );
}

const CarouselSection = ({ product }: any) => {
  const [api, setApi]: any = useState(null);
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
    <>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {product.images.map((src, index) => (
            <CarouselItem key={index}>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt={`${product.name} image ${index + 1}`}
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="text-center mt-2 text-sm text-gray-500">
          Image {current} of {count}
        </div>
      </Carousel>
    </>
  )
}


const PurchaseButton = ({ productId, price }: any) => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert]: any = useState(null);

  const handlePurchase = async () => {
    setLoading(true);
    setAlert(null);

    router.post(route('initiate-payment'), {
      product_id: productId,
    }, {
      onSuccess: (page) => {
        const { checkout_url } = page.props;
        if (checkout_url) {
          setAlert({ type: 'success', message: 'Redirecting to payment...' });
          setTimeout(() => {
            window.location.href = checkout_url;
          }, 1500);
        }
      },
      onError: (errors) => {
        setAlert({ type: 'error', message: errors.error || 'Failed to initiate payment' });
        setLoading(false);
      },
    });
  }

  return (
    <div className="space-y-4">
      {alert && (
        <Alert variant={alert.type === 'error' ? 'destructive' : 'default'}>
          {alert.type === 'success' ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
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

}