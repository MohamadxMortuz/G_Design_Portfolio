export function About() {
  return (
    <section id="about" className="py-32 px-8 lg:px-16 relative">
      {/* Gold divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              I'm a passionate <span className="text-[#D4AF37]">Computer Science student</span> with a deep love for 
              visual design and 3D modeling. My journey blends the analytical thinking of programming with 
              the creative freedom of graphic design.
            </p>
            
            <p>
              From crafting intricate <span className="text-[#D4AF37]">3D jewelry designs</span> in Fusion 360 
              to developing compelling <span className="text-[#D4AF37]">visual communication</span> materials, 
              I specialize in turning ideas into stunning visual narratives. Whether it's product visualization, 
              poster design, or brand identity work, I approach each project with meticulous attention to detail 
              and a commitment to excellence.
            </p>
            
            <p>
              My work is characterized by clean aesthetics, purposeful design choices, and a dedication to 
              storytelling through visuals. I believe great design isn't just about looking good—it's about 
              communicating effectively and creating memorable experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
