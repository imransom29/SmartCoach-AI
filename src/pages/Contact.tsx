import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white pt-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80")',
          filter: 'brightness(0.2)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl md:text-4xl font-montserrat font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Get in Touch
        </h1>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-slate-800/50 backdrop-blur-md border-slate-700 p-8 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">8949489399</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">rahulvinayak82@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">RCB Arena, Ranka Colony (BTM)</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="mt-8 text-center text-gray-400">
            <p>Contact us to book your slot or for any inquiries.</p>
            <p className="mt-2">Available on WhatsApp for quick responses.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;