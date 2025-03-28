import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ashna AI</h3>
            <p className="mb-4">Empowering the next generation of AI leaders through our Campus Ambassador Program.</p>
            <div className="flex items-center mb-2">
              <MapPin className="w-12 h-12 mr-2 text-blue-400" />
              <p>P-19, Knowledge Park 2, Institutional Area, Greater Noida 201306 Uttar Pradesh India</p>
            </div>
            <div className="flex items-center mb-2">
              <Phone className="w-5 h-5 mr-2 text-blue-400" />
              <p>+91 73930 28872</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-blue-400" />
              <p>campusambassador@ashna.ai</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4"></h3>
            <ul className="space-y-2">
              {/* <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Our Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li> */}
            </ul>
          </div>

          {/* Program Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4"></h3>
            <ul className="space-y-2">
              {/* <li><a href="#" className="hover:text-blue-400 transition-colors">Benefits</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li> */}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/ashna-ai/" className="hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/ashna_ai" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/ashna.ai/" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              {/* <a href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" className="hover:text-blue-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </a> */}
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Ashna AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;