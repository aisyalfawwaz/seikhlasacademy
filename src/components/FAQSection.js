import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const faqs = [
  { id: 1, question: 'Bagaimana cara pesan?', answer: 'Cukup klik tombol Pesan Sekarang dan isi formulir yang tersedia.' },
  { id: 2, question: 'Apa itu bayar seikhlasnya?', answer: 'Anda bisa membayar sesuai kemampuan tanpa harus memikirkan harga tetap.' }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Pertanyaan yang Sering Diajukan (FAQ)</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <Disclosure key={faq.id}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between items-center w-full px-4 py-4 text-left text-lg font-medium text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                    <span>{faq.question}</span>
                    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-6 h-6 text-yellow-500`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
