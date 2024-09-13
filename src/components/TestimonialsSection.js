import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Aldo', feedback: 'Layanannya sangat membantu saya saat deadline!', rating: 5 },
  { id: 2, name: 'Siti', feedback: 'Prosesnya cepat dan bayarnya seikhlasnya, top banget!', rating: 5 },
  { id: 3, name: 'Budi', feedback: 'Kualitas pekerjaan sangat memuaskan. Terima kasih Seikhlas Academy!', rating: 5 },
  { id: 4, name: 'Dewi', feedback: 'Konsultasi makalah sangat bermanfaat. Saya jadi lebih percaya diri dengan tulisan saya.', rating: 4 },
];

const TestimonialCard = ({ name, feedback, rating }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      <div className="relative">
        <Quote className="w-8 h-8 text-yellow-400 opacity-50 absolute top-0 left-0 transform -translate-x-2 -translate-y-2" />
        <p className="text-gray-700 italic pl-6">{feedback}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Apa Kata Mereka?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman mereka yang telah menggunakan layanan kami
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;