import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BullIcon } from '../icons/BullIcon';
import { Separator } from '../ui/separator';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { href: '/actualidad', label: 'Actualidad' },
  { href: '/entrevistas-y-opinion', label: 'Opinión' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/multimedia', label: 'Multimedia' },
  { href: '/contacto', label: 'Contacto' },
];

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t mt-12">
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 py-12">
          
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BullIcon className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">TauroPress</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              El portal de noticias líder en información taurina. Pasión, rigor y actualidad en el mundo del toro.
            </p>
             <div className="flex space-x-2 mt-4">
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

          <div className="lg:col-span-1"></div>

          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-headline font-semibold mb-4">Actualidad</h3>
            <ul className="space-y-2 text-sm">
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Noticias</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Corridas</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Ferias</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <h3 className="font-headline font-semibold mb-4">Contenido</h3>
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

          <div className="col-span-2 md:col-span-4 lg:col-span-4">
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

        <div className="flex flex-col sm:flex-row justify-between items-center py-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TauroPress. Todos los derechos reservados.</p>
           <div className="flex items-center space-x-4 mt-4 sm:mt-0">
                <Link href="#" className="hover:text-primary">Términos y Condiciones</Link>
                <Link href="#" className="hover:text-primary">Política de Privacidad</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
