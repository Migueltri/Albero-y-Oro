import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImageById } from '@/lib/placeholder-images';
import { Calendar, User } from 'lucide-react';

interface NewsCardProps {
  article: Article;
}

export function NewsCard({ article }: NewsCardProps) {
  const image = getImageById(article.imageId);

  return (
    <Link href={`/noticias/${article.slug}`} className="group block">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {image && (
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={image.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          </div>
        )}
        <CardHeader className="flex-grow">
          <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
          <CardTitle className="font-headline text-xl leading-tight group-hover:text-primary transition-colors">
            {article.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
           <div className="flex items-center space-x-4 text-xs text-muted-foreground mt-auto">
                <div className="flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5" />
                    <span>{article.author}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{new Date(article.publishedAt).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
            </div>
        </CardContent>
      </Card>
    </Link>
  );
}
