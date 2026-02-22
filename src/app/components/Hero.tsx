import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center px-8 lg:px-16 py-20 pt-32">
      <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl leading-tight tracking-tight">
              <span className="block text-white">Mohamad Mortuz —</span>
              <span className="block bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
                Graphic & 3D Designer
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
  I create visual designs using <span className="text-[#D4AF37]">Fusion 360</span>,{' '}
  <span className="text-[#D4AF37]">Adobe Illustrator</span>,{' '}
  <span className="text-[#D4AF37]">Blender</span>, and{' '}
  <span className="text-[#D4AF37]">Photoshop</span>, combining creativity with technical precision.
</p>

            <p className="text-base text-gray-400 italic">
              "Where engineering precision meets creative vision"
            </p>
          </div>

          <button
            onClick={scrollToWork}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] text-black rounded-full hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-105"
          >
            <span className="font-semibold">View Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-2xl blur-3xl"></div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-[#D4AF37]/20 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-12">
            <img
              src="/Graphic Designs/WhiteM.png"
              alt="Mohamad Mortuz Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
