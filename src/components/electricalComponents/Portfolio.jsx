import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Luxury Villa Indoor Lighting",
      desc: "Premium LED lighting setup with automation in a high-end villa.",
      
      year: "2024",
      image: "https://hips.hearstapps.com/hmg-prod/images/sarah-ward-1525111997.jpg?crop=1.00xw:0.752xh;0,0.0120xh&resize=640:*",
    },
    {
      title: "AC System – Commercial Tower",
      desc: "Central AC installation in a 10-story commercial complex.",
   
      year: "2023",
      image: "https://image.made-in-china.com/202f0j00JGbRInthYiul/Central-Air-Conditioning-System-Cooling-Tower.webp",
    },
    {
      title: "Highway Roadside Lighting",
      desc: "LED street lighting across a 12 km NHAI highway.",
     
      year: "2024",
      image: "https://www.defa.com/content/uploads/Images/Lighting/700x500/well-lit-highway-700-500.jpg",
    },
    {
      title: "School Electrical Fittings",
      desc: "Complete electrical work including fittings and wiring.",
    
      year: "2022",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/8/TU/MV/OM/2347921/hospital-building-wire-fitting-services-500x500.jpg",
    },
    {
      title: " Electrical Substation Supply",
      desc: " Provided supply for a 110kV electrical substation to enhance power distribution efficiency and reliability for industrial operations.",
      year: "2023",
      image: "https://5.imimg.com/data5/BC/AS/AJ/SELLER-20903467/substation-structure-500x500.jpg",
    },
    {
      title: "Solar Panel Installation for Commercial Facility",
      desc: " Installed a rooftop solar power system for a commercial facility, promoting sustainable energy use and reducing operational costs.",
      year: "2024",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzrJzPkcT2DjKw4mmZ7EEPe5Qi3PDvg6girg&s",
    },
  ];

  return (
    <div className="bg-[#FDF0D5] text-[#003049] min-h-screen w-full px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#780000] mb-2">Our Project Portfolio</h2>
        <p className="text-lg text-[#C1121F]">
          A Showcase of Excellence in Electrical Works
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-base">
          From indoor lighting to large-scale infrastructure, Zikon Enterprises has successfully delivered a wide range of electrical projects. Explore a glimpse of our completed works below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#003049]">
                {project.title}
              </h3>
              <p className="text-sm text-[#669BBC] mb-2 italic">{project.year}</p>
              <p className="text-sm text-[#003049]">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-[#780000]">
          Ready to Power Up Your Next Project?
        </h3>
        <p className="mt-2 text-[#003049]">
          Connect with our team to discuss how Zikon Enterprises can electrify your space with unmatched quality and precision.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
