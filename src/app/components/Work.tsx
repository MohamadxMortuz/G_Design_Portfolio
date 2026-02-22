import { ProjectCard } from './ProjectCard';
import { useState } from 'react';

export function Work() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const jewelryProjects = [
    {
      title: 'Elegant Ring Design',
      description: 'Premium gold ring with intricate geometric patterns and precision-cut diamond setting.',
      tools: ['Fusion 360', '3D Modeling', 'Rendering'],
      imageSrc: '/src/assets/R2.png',
    },
    {
      title: 'Modern Earrings',
      description: 'Contemporary earring design featuring minimalist aesthetics and refined metalwork.',
      tools: ['Fusion 360', 'Product Design'],
      imageSrc: '/src/assets/E1.PNG',
    },
    {
      title: 'Pendant',
      description: 'Bold pendant design combining traditional craftsmanship with modern design principles.',
      tools: ['Fusion 360', 'Jewelry Design'],
      imageSrc: '/src/assets/P1.PNG',
    },
    {
      title: 'Designer Bracelet',
      description: 'Sophisticated bracelet showcasing precision engineering and elegant form.',
      tools: ['Fusion 360', 'CAD'],
      imageSrc: '/src/assets/B1.PNG',
    },
  ];

  const blenderProjects = [
    {
      title: 'Black Hole',
      description: 'A model with realistic materials and lighting for a black hole.',
      tools: ['Blender', '3D Modeling', 'Rendering'],
      imageSrc: '/src/assets/BlackH1.png',
    },
    {
      title: 'Helmet Design',
      description: 'Advanced helmet which have installed infrared camera.',
      tools: ['Blender', 'Product Visualization'],
      imageSrc: '/src/assets/HelmetN.png',
    },
    {
      title: 'Spider Bot',
      description: 'Futuristic robotic spider design with intricate mechanical details.',
      tools: ['Blender', 'Character Design'],
      imageSrc: '/src/assets/SpiderB.png',
    },
  ];

  const posterProjects = [
    {
      title: 'Cybersecurity Stats',
      description: 'Series of posters promoting digital security best practices with bold typography.',
      tools: ['Illustrator', 'Typography', 'Layout'],
      imageSrc: '/src/assets/Cyber Security Stats Final.jpg',
    },
    {
      title: 'Data Breach Prevention',
      description: 'Informative poster design communicating critical security protocols.',
      tools: ['Illustrator', 'Infographics'],
      imageSrc: '/src/assets/Data Breach.jpg',
    },
    {
      title: 'FTS Cultural Event',
      description: 'Dynamic event promotion featuring modern gradients and clean layout.',
      tools: ['Illustrator', 'Poster Design'],
      imageSrc: '/src/assets/FTS Cultural Final.png',
    },
    {
      title: 'Recruitment Poster',
      description: 'Educational poster series for professional development workshops.',
      tools: ['Illustrator', 'Visual Design'],
      imageSrc: '/src/assets/Recruitment Poster F1@2x-100.jpg',
    },
  ];

  const brandingProjects = [
    {
      title: 'Brand Color Board',
      description: 'Comprehensive color palette development for cohesive brand identity.',
      tools: ['Illustrator', 'Color Theory'],
      imageSrc: '/src/assets/Colour board.jpg',
    },
    {
      title: 'Vivant Branding',
      description: 'Visual direction board establishing brand aesthetics and style guidelines.',
      tools: ['Figma', 'Branding'],
      imageSrc: '/src/assets/Vivant.png',
    },
    {
      title: 'Look Board Design',
      description: 'Iterative logo design process exploring various concepts and directions.',
      tools: ['Illustrator', 'Logo Design'],
      imageSrc: '/src/assets/LB.jpg',
    },
  ];


  return (
    <section id="work" className="py-32 px-8 lg:px-16 relative">
      {/* Gold divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated collection of 3D designs, visual communications, and branding projects
          </p>
        </div>

        {/* 3D Jewelry & Product Design */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30"></div>
            <h3 className="text-2xl text-[#D4AF37]">3D Jewelry & Product Design</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jewelryProjects.map((project) => (
              <ProjectCard key={project.title} {...project} onImageClick={() => project.imageSrc && setSelectedImage(project.imageSrc)} />
            ))}
          </div>
        </div>

        {/* Posters & Visual Communication */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30"></div>
            <h3 className="text-2xl text-[#D4AF37]">Posters & Visual Communication</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {posterProjects.map((project) => (
              <ProjectCard key={project.title} {...project} onImageClick={() => project.imageSrc && setSelectedImage(project.imageSrc)} />
            ))}
          </div>
        </div>

        {/* Branding & Concept Boards */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30"></div>
            <h3 className="text-2xl text-[#D4AF37]">Branding & Concept Boards</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandingProjects.map((project) => (
              <ProjectCard key={project.title} {...project} onImageClick={() => project.imageSrc && setSelectedImage(project.imageSrc)} />
            ))}
          </div>

            {/* Blender 3D Models */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/30"></div>
            <h3 className="text-2xl text-[#D4AF37]">Blender 3D Models</h3>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blenderProjects.map((project) => (
              <ProjectCard key={project.title} {...project} onImageClick={() => project.imageSrc && setSelectedImage(project.imageSrc)} />
            ))}
          </div>
        </div>

        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Full size preview" 
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}
