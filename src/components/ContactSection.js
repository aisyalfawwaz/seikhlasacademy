import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

const SocialButton = ({ href, icon: Icon, label, bgColor }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center px-6 py-3 ${bgColor} text-white text-lg font-semibold rounded-md shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1`}
  >
    <Icon className="w-6 h-6 mr-2" />
    {label}
  </a>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-yellow-100 via-yellow-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Hubungi Kami</h2>
        <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          Punya pertanyaan atau ingin memesan? Jangan ragu untuk menghubungi kami melalui WhatsApp atau ikuti kami di Instagram untuk informasi terbaru!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <SocialButton
            href="https://wa.me/088102818897"
            icon={MessageCircle}
            label="Hubungi via WhatsApp"
            bgColor="bg-green-500 hover:bg-green-600"
          />
          <SocialButton
            href="https://www.instagram.com/seikhlas_academy"
            icon={Instagram}
            label="Ikuti kami di Instagram"
            bgColor="bg-pink-500 hover:bg-pink-600"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;