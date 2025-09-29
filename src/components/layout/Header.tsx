"use client";

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BullIcon } from '../icons/BullIcon';
import { Separator } from '../ui/separator';

const navLinks = [
  { href: '/actualidad', label: 'Actualidad' },
  { href: '/entrevistas-y-opinion', label: 'Opinión' },
  { href: '/agenda', label: 'Agenda' },
  { href: '/multimedia', label: 'Multimedia' },
  { href: '/contacto', label: 'Contacto' },
];

const Logo = () => (
    <Link href="/" className="flex items-center gap-2 text-foreground transition-colors hover:text-primary">
      <BullIcon className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold font-headline whitespace-nowrap">
        TauroPress
      </span>
    </Link>
)


export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <Logo />

        <div className="flex flex-1 items-center justify-end">
            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map(link => (
                <Link
                key={link.href}
                href={link.href}
                className={cn(
                    'transition-colors hover:text-primary pb-1 border-b-2',
                    pathname === link.href ? 'text-primary border-primary' : 'text-foreground/80 border-transparent'
                )}
                >
                {link.label}
                </Link>
            ))}
            </nav>
            
            <Separator orientation="vertical" className="h-6 mx-4 hidden md:block" />

            <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Buscar</span>
                </Button>
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Abrir menú</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full max-w-xs bg-background p-0">
                    <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between p-4 border-b">
                            <Logo />
                            <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Cerrar menú</span>
                            </Button>
                            </SheetTrigger>
                        </div>
                        <nav className="flex-grow p-4">
                            <ul className="space-y-2">
                            {[{ href: '/', label: 'Inicio' }, ...navLinks].map(link => (
                                <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                    'block text-lg font-medium p-2 rounded-md hover:bg-primary/10 hover:text-primary',
                                    pathname === link.href ? 'text-primary bg-primary/5' : 'text-foreground'
                                    )}
                                >
                                    {link.label}
                                </Link>
                                </li>
                            ))}
                            </ul>
                        </nav>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>

      </div>
    </header>
  );
}
