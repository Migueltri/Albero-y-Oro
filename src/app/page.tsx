import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getArticles, getEvents } from '@/lib/data';
import { getImageById } from '@/lib/placeholder-images';
import { NewsCard } from '@/components/NewsCard';
import { ArrowRight, Calendar, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
  const allArticles = await getArticles();
  const featuredArticles = allArticles.slice(0, 3);
  const latestArticles = allArticles.slice(3, 9);
  const opinionArticles = allArticles.filter(a => a.category === 'Opinión').slice(0, 2);
  const events = (await getEvents()).slice(0, 3);

  const breakingNews = allArticles[0];

  return (
    <div className="flex flex-col">
      {/* Breaking News Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-semibold">
        <Link href={`/noticias/${breakingNews.slug}`} className="hover:underline flex items-center justify-center gap-2">
          <span>ÚLTIMA HORA</span>
          <Separator orientation="vertical" className="h-4 bg-primary-foreground/50" />
          <span>{breakingNews.title}</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Articles Carousel */}
            <section className="mb-12">
              <Carousel
                opts={{
                  align: 'start',
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {featuredArticles.map((article, index) => {
                    const image = getImageById(article.imageId);
                    return (
                      <CarouselItem key={index}>
                        <div className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={article.title}
                              fill
                              className="object-cover"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-4 md:p-8 text-white">
                            <Badge variant="destructive" className="mb-2 bg-primary">{article.category}</Badge>
                            <h2 className="font-headline text-2xl md:text-4xl font-bold mb-2">
                              <Link href={`/noticias/${article.slug}`} className="hover:underline">
                                {article.title}
                              </Link>
                            </h2>
                            <p className="text-sm text-gray-300 hidden md:block">
                              {article.excerpt}
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
            </section>

            {/* Latest News */}
            <section>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                Últimas Noticias
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {latestArticles.map(article => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link href="/actualidad">
                    Ver todas las noticias <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 mt-12 lg:mt-0 space-y-12">
            {/* Agenda Taurina */}
            <section>
               <Card className="bg-card">
                 <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
                    <Calendar className="h-6 w-6" />
                    Agenda Taurina
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {events.map(event => (
                      <li key={event.id} className="border-l-4 border-accent pl-4 py-1">
                        <p className="font-bold">{event.date}</p>
                        <p className="text-sm text-muted-foreground">{event.arena}, {event.city}</p>
                        <p className="text-sm">{event.details}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                 <CardFooter>
                   <Button asChild variant="secondary" className="w-full">
                     <Link href="/agenda">
                       Ver agenda completa <ArrowRight className="ml-2" />
                     </Link>
                   </Button>
                 </CardFooter>
               </Card>
            </section>
            
            {/* Entrevistas y Opinión */}
            <section>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-headline text-2xl text-primary">
                    <MessageSquare className="h-6 w-6" />
                    Entrevistas y Opinión
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {opinionArticles.map(article => {
                      const image = getImageById(article.imageId);
                      return (
                        <Link key={article.id} href={`/noticias/${article.slug}`} className="group flex items-start gap-4">
                            {image && (
                              <Image 
                                src={image.imageUrl} 
                                alt={article.title} 
                                width={80} 
                                height={80}
                                className="rounded-md object-cover aspect-square"
                                data-ai-hint={image.imageHint} 
                              />
                            )}
                            <div>
                               <h3 className="font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                               <p className="text-sm text-muted-foreground">por {article.author}</p>
                            </div>
                        </Link>
                      )
                    })}
                </CardContent>
                <CardFooter>
                   <Button asChild variant="secondary" className="w-full">
                     <Link href="/entrevistas-y-opinion">
                       Leer más artículos <ArrowRight className="ml-2" />
                     </Link>
                   </Button>
                 </CardFooter>
              </Card>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}
