import { Car, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import Cab from "../../assets/contact.png";
import Form from '../Form/Form';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white dark:from-gray-900 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-300 dark:bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-400 dark:bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 dark:bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-32 animate-bounce animation-delay-3000">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-80" />
        </div>
      </div>

      <div className="relative z-9 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl border border-white/50 dark:border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">

              {/* Left Content Section */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/40 rounded-full px-4 py-2">
                    <Car className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400 font-medium">Contact Us</span>
                  </div>

                  <h1 className="text-5xl lg:text-6xl font-bold text-black dark:text-white leading-tight">
                    Book Your Ride, Hassle-Free.
                    <span className="block text-yellow-400">Taxi Business Forward</span>
                  </h1>

                  <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                    Launch your taxi service with confidence. We provide the technology, support, and partnership you need to connect riders with reliable transportation.
                  </p>
                </div>

                {/* Feature Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: CheckCircle, text: "24/7 Dispatch" },
                    { icon: Sparkles, text: "Smart Routing" },
                    { icon: Car, text: "Driver Support" },
                    { icon: ArrowRight, text: "Quick Setup" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group hover:scale-105 transition-transform duration-300">
                      <div className="p-2 bg-yellow-400/20 rounded-lg group-hover:bg-yellow-400/30 transition-colors border border-yellow-400/20">
                        <feature.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <span className="text-gray-800 dark:text-gray-300 font-medium">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Form Section */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 px-4 my-10">
            
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img 
                src={Cab} 
                alt="Taxi Service Illustration"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>

            {/* Form Card */}
            <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white mb-2">
                  Your Cab is Ready
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Bas apne safar ko enjoy karo, smooth aur safe journey humari guarantee..
                </p>
              </div>
              <Form />
            </div>
          </div>

        </div>
      </div>
      {/* Tailwind Animation Delay Fix */}
      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Contact;