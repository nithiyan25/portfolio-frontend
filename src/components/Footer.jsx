import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/nithiyan25"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/nithiyan-krishnamoorthy-b7473b2b6"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:nithiyan2501@gmail.com.com"
              className="p-3 bg-slate-800 rounded-full hover:bg-purple-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="flex items-center gap-2">
              © {currentYear} Nithiyan. Made with <Heart size={16} className="text-red-500" /> using React & Python
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;