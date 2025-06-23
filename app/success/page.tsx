'use client'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2Icon } from "lucide-react";

export default function Success() {

  const handleBackToHome = () => {
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="max-w-lg w-full shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Payment Successful!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Alert variant="default" className="border-green-500 bg-green-50">
            <CheckCircle2Icon className="h-6 w-6 text-green-500" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
             
              <br />
              Thank you for your order. You’ll receive a confirmation email soon.
            </AlertDescription>
          </Alert>
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Your course access will be available shortly. Check your email for further instructions.
            </p>
            <Button
              onClick={handleBackToHome}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Back to Home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}