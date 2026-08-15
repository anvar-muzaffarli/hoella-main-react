import React from 'react';
import { Home, ArrowLeft, AlertTriangle } from 'lucide-react'; // İkonları ehtiyacınıza uyğun dəyişə bilərsiniz

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center relative">
        
        {/* İkon */}
        <div className="flex justify-center">
          <div className="p-4 bg-red-100 rounded-full">
            <AlertTriangle className="h-12 w-12 text-red-600" aria-hidden="true" />
          </div>
        </div>

        {/* Başlıq və Mətn */}
        <div>
          <h1 className="text-9xl font-extrabold text-gray-900 tracking-tight">404</h1>
          <p className="mt-4 text-2xl font-semibold text-gray-900 sm:text-3xl">
            Səhifə tapılmadı
          </p>
          <p className="mt-4 text-base text-gray-600">
            Axtardığınız səhifə silinmiş, adı dəyişdirilmiş və ya müvəqqəti olaraq əlçatmaz ola bilər. URL-i düzgün yazdığınızdan əmin olun.
          </p>
        </div>

        {/* Düymələr */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-all duration-200"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Geriyə qayıt
          </button>
          
          {/* Next.js istifadə edirsinizsə <a> əvəzinə <Link> teqindən istifadə edin */}
          <a 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
          >
            <Home className="mr-2 h-5 w-5" />
            Ana səhifəyə get
          </a>
        </div>

      </div>
    </div>
  );
}