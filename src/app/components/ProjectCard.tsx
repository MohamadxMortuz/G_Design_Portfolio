import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageSrc?: string;
  onImageClick?: () => void;
}

export function ProjectCard({ title, description, tools, imageSrc, onImageClick }: ProjectCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl overflow-hidden border border-gray-800/50 hover:border-[#D4AF37]/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#D4AF37]/10">
      {/* Image Container */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden cursor-pointer" onClick={onImageClick}>
        {imageSrc ? (
          <ImageWithFallback
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl text-gray-700">📐</div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl text-white group-hover:text-[#D4AF37] transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>

        {/* Tools Tags */}
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 text-xs bg-[#D4AF37]/10 text-[#D4AF37] rounded-full border border-[#D4AF37]/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
