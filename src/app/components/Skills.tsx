import { Palette, Box, Layers, Sparkles, Layout, PenTool } from 'lucide-react';

export function Skills() {
  const designTools = [
    { name: 'Fusion 360', icon: Box },
    { name: 'Adobe Illustrator', icon: PenTool },
    { name: 'Figma', icon: Layout },
    { name: 'Blender', icon: Box },
  ];

  const skills = [
    { name: '3D Modeling', icon: Box },
    { name: 'Brand Identity', icon: Palette },
    { name: 'Poster Design', icon: Layers },
    { name: 'Visual Storytelling', icon: Sparkles },
    { name: 'Layout Design', icon: Layout },
    { name: 'Product Visualization', icon: PenTool },
  ];

  return (
    <section id="skills" className="py-32 px-8 lg:px-16 relative">
      {/* Gold divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <p className="text-gray-400 text-lg">
            Technical expertise and creative capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Design Tools */}
          <div className="space-y-6">
            <h3 className="text-2xl text-[#D4AF37] flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
              Design Tools
            </h3>
            
            <div className="space-y-4">
              {designTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-transparent rounded-xl border border-gray-800/50 hover:border-[#D4AF37]/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl text-[#D4AF37] flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
              Core Skills
            </h3>
            
            <div className="space-y-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-900/50 to-transparent rounded-xl border border-gray-800/50 hover:border-[#D4AF37]/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                      <Icon className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-lg text-gray-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
