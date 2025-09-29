import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BullIcon } from '../icons/BullIcon';
import { Separator } from '../ui/separator';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { href: '/actualidad', label: 'Actualidad' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/multimedia', label: 'Multimedia' },
  { href: '/contacto', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 py-12">
          {/* Logo and About */}
          <div className="md:col-span-4 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BullIcon className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">TauroPress</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              El portal de noticias líder en información taurina. Pasión, rigor y actualidad en el mundo del toro.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-headline font-semibold mb-4">Secciones</h3>
            <ul className="space-y-2 text-sm">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="font-headline font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="font-headline font-semibold mb-4">Boletín de Noticias</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Suscríbete para recibir las últimas noticias en tu correo.
            </p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Tu email" aria-label="Email para newsletter" />
              <Button type="submit" variant="default">Suscribirse</Button>
            </form>
          </div>
        </div>

        <Separator />

        <div className="text-center py-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TauroPress. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
