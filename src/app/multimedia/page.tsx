import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';

export default function MultimediaPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Galería Multimedia</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Las mejores imágenes de la temporada. Fotografía y vídeo de los momentos más impactantes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryImages.map(image => (
          <div key={image.id} className="group relative aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
             <Card className="overflow-hidden">
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
             </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
