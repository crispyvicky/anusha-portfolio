'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold text-[#1A202C]" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>Anusha</a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#4A5568] hover:text-[#3182CE]"
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="outline"
            className="ml-2 hidden md:inline-flex"
            onClick={() => { const el = document.querySelector('[data-resume-trigger]') as HTMLButtonElement | null; el?.click(); }}
          >
            View Resume
          </Button>
          <Button
            asChild
            variant="outline"
            className="ml-2 md:hidden"
          >
            <a href="/K.Anusha%20Resume%20New.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </div>

        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#4A5568] hover:text-[#3182CE]"
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="outline">
              <a href="/K.Anusha%20Resume%20New.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                View Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


