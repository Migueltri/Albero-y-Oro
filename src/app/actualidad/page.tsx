import { getArticles } from "@/lib/data";
import { NewsCard } from "@/components/NewsCard";

export default async function ActualidadPage() {
  const articles = await getArticles();
  const currentNews = articles.filter(a => a.category === 'Actualidad');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Actualidad Taurina</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Crónicas, noticias y resultados de las últimas corridas en España y el mundo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentNews.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
