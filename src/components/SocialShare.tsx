
'use client';

import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Twitter, Facebook, MessageCircle } from 'lucide-react';

export const SocialShare = ({ title }: { title: string }) => {
  const pathname = usePathname();
  const url = typeof window !== 'undefined' ? `${window.location.origin}${pathname}` : '';

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`;

  return (
    <div className="flex items-center gap-2">
        <span className="text-sm font-semibold">Compartir:</span>
        <Button asChild variant="outline" size="icon">
            <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Twitter">
            <Twitter className="h-4 w-4" />
            </a>
        </Button>
        <Button asChild variant="outline" size="icon">
            <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook">
            <Facebook className="h-4 w-4" />
            </a>
        </Button>
        <Button asChild variant="outline" size="icon">
            <a href={whatsappShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp">
            <MessageCircle className="h-4 w-4" />
            </a>
        </Button>
    </div>
  );
};
