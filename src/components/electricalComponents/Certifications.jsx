import React from 'react';

const certifications = [
  {
    title: 'ISO 9001:2015 Certified',
    description: 'Certified for quality management and continuous improvement.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJatJVa7rHdj5JbVCWTLHsxOhDAw3Mv7pshg&s'
  },
  {
    title: 'MSME Registered',
    description: 'Recognized by the Ministry of Micro, Small and Medium Enterprises.',
    image: 'https://mehtaint.com/wp-content/uploads/2021/07/MSME-LOGO.png'
  },
  {
    title: 'Electrical Contractor License',
    description: 'Licensed and authorized for electrical installations and maintenance.',
    image: 'https://roofingsandiego.com/wp-content/uploads/2018/11/LICENSED-CONTRACTOR-300x218-300x218-300x218.jpg'
  },
  {
    title: 'L&T Registered Vendor',
    description: 'Proudly listed as an approved vendor for L&T government projects.',
    image: 'https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/d1eca6d4ac4f2ae374380aa322eb596c/large.jpg'
  }
];

const Certifications = () => {
  return (
    <div className="w-full bg-[#FDF0D5] py-16 px-4 sm:px-10 lg:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003049] mb-2">
          Our Certifications
        </h2>
        <p className="text-[#780000] text-sm md:text-base">
          Recognized by government bodies and industry giants for quality and trust.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center text-center"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="h-36 w-auto object-contain mb-4 rounded"
            />
            <h3 className="text-xl font-semibold text-[#003049] mb-2">{cert.title}</h3>
            <p className="text-sm text-[#780000]">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
