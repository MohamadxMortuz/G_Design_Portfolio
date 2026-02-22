import { Mail, Linkedin, Instagram, FileDown, Phone, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen py-24 px-8 lg:px-16 relative flex flex-col justify-center">
      {/* Gold divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <div className="space-y-6 pb-4">
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-[1.2] pb-1">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <a
              href="mailto:md.mortuz001@gmail.com"
              className="group p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-[#D4AF37]/50 transition-all hover:scale-105"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Mail className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white group-hover:text-[#D4AF37] transition-colors break-words text-sm">
                    md.mortuz001@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mohamad-mortuz/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-[#D4AF37]/50 transition-all hover:scale-105"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="text-white group-hover:text-[#D4AF37] transition-colors break-words">
                    mohamad-mortuz
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/mortuz7986/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-[#D4AF37]/50 transition-all hover:scale-105"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Instagram className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Instagram</p>
                  <p className="text-white group-hover:text-[#D4AF37] transition-colors break-words">
                    @mortuz7986
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/MohamadxMortuz"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-[#D4AF37]/50 transition-all hover:scale-105"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Github className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="text-white group-hover:text-[#D4AF37] transition-colors break-words">
                    Mohamadx
                    Mortuz
                  </p>
                </div>
              </div>
            </a>

            <a
              href="tel:+917986338945"
              className="group p-6 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl border border-gray-800/50 hover:border-[#D4AF37]/50 transition-all hover:scale-105"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Phone className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-white group-hover:text-[#D4AF37] transition-colors break-words">
                    +91 7986338945
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Resume Download */}
          {/* <div className="pt-8">
            <a 
              href="/resume.pdf" 
              download
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-br from-gray-900 to-black rounded-full border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              <FileDown className="w-5 h-5 text-[#D4AF37] group-hover:animate-bounce" />
              <span className="text-white">Download Resume</span>
            </a>
          </div> */}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-0 right-0 pt-8 border-t border-gray-800/50 max-w-[1440px] mx-auto px-8 lg:px-16">
        <p className="text-center text-gray-500 text-sm">
          © 2024 Mohamad Mortuz. Crafted with precision and passion.
        </p>
      </div>
    </section>
  );
}
