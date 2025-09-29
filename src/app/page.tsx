import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardContent,
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
  const featuredArticle = allArticles[0];
  const secondaryFeatured = allArticles.slice(1, 3);
  const latestArticles = allArticles.slice(3, 7);
  const opinionArticles = allArticles.filter(a => a.category === 'Opinión').slice(0, 3);
  const events = (await getEvents()).slice(0, 4);

  const featuredImage = getImageById(featuredArticle.imageId);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
       {/* Hero Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <Link href={`/noticias/${featuredArticle.slug}`} className="group block">
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl">
              {featuredImage && (
                <Image
                  src={featuredImage.imageUrl}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={featuredImage.imageHint}
                  priority
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <Badge variant="default" className="mb-2 bg-primary/90 border-primary/90">{featuredArticle.category}</Badge>
                <h1 className="font-headline text-3xl md:text-5xl font-bold mb-2 leading-tight">
                  {featuredArticle.title}
                </h1>
                <p className="text-lg text-gray-200 hidden md:block">
                  {featuredArticle.excerpt}
                </p>
              </div>
            </div>
          </Link>
          <div className="flex flex-col justify-between gap-8">
            {secondaryFeatured.map((article) => {
              const image = getImageById(article.imageId);
              return (
                <Link key={article.id} href={`/noticias/${article.slug}`} className="group">
                  <Card className="h-full flex flex-col sm:flex-row overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {image && (
                      <div className="relative sm:w-1/3 h-48 sm:h-full overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <div className="flex-1 flex flex-col justify-center p-6">
                      <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
                      <h2 className="font-headline text-xl font-bold group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Latest News */}
          <section>
            <h2 className="font-headline text-3xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
              Última Hora
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {latestArticles.map(article => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline">
                <Link href="/actualidad">
                  Ver toda la actualidad <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-12">
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
                    <li key={event.id} className="border-l-4 border-primary pl-4 py-1">
                      <p className="font-bold text-sm">{event.date}</p>
                      <p className="text-sm font-semibold">{event.arena}, {event.city}</p>
                      <p className="text-xs text-muted-foreground">{event.details}</p>
                    </li>
                  ))}
                </ul>
                <Button asChild variant="secondary" className="w-full mt-6">
                  <Link href="/agenda">
                    Ver agenda completa
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>

          {/* Entrevistas y Opinión */}
          <section>
            <h2 className="font-headline text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
                Opinión
            </h2>
            <div className="space-y-6">
              {opinionArticles.map(article => {
                const image = getImageById(article.imageId);
                return (
                  <Link key={article.id} href={`/noticias/${article.slug}`} className="group grid grid-cols-3 gap-4 items-center">
                    {image && (
                      <div className="col-span-1 h-full rounded-md overflow-hidden">
                        <Image
                          src={image.imageUrl}
                          alt={article.title}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                    <div className="col-span-2">
                      <h3 className="font-bold leading-tight group-hover:text-primary transition-colors">{article.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">por {article.author}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
             <Button asChild variant="outline" className="w-full mt-8">
               <Link href="/entrevistas-y-opinion">
                 Leer más artículos
               </Link>
             </Button>
          </section>
        </aside>
      </div>
    </div>
  );
}
