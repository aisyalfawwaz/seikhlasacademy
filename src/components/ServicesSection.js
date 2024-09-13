import React from 'react';
import { GraduationCap, ClipboardList, CheckCircle, BookOpen, Code } from 'lucide-react';

const services = [
  { id: 1, title: 'Joki Tugas', description: 'Membantu kamu menyelesaikan tugas dengan cepat dan tepat.', icon: GraduationCap },
  { id: 2, title: 'Konsultasi Makalah', description: 'Diskusi mendalam untuk meningkatkan kualitas makalah.', icon: ClipboardList },
  { id: 3, title: 'Cek Turnitin', description: 'Cek plagiasi dengan akurat untuk hasil yang lebih baik.', icon: CheckCircle },
  { id: 4, title: 'Akses Chegg', description: 'Dapatkan akses ke sumber belajar premium dari Chegg.', icon: BookOpen },
  { id: 5, title: 'Coding (ML, Flutter, Kotlin)', description: 'Solusi pengembangan dengan teknologi terkini.', icon: Code }
];

const ServiceCard = ({ title, description, Icon }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="p-8">
      <div className="flex justify-center mb-6">
        <Icon className="h-16 w-16 text-yellow-500 group-hover:text-yellow-600 transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-yellow-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
    <div className="bg-yellow-500 group-hover:bg-yellow-600 transition-colors duration-300 p-4">
      <button className="w-full text-white font-semibold py-2 px-4 rounded-lg bg-yellow-600 group-hover:bg-yellow-700 transition-colors duration-300">
        Pelajari Lebih Lanjut
      </button>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan untuk membantu Anda mencapai kesuksesan akademik
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;