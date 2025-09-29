import { getArticles } from "@/lib/data";
import { NewsCard } from "@/components/NewsCard";

export default async function EntrevistasOpinionPage() {
  const articles = await getArticles();
  const opinionArticles = articles.filter(a => a.category === 'Opinión');
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Entrevistas y Opinión</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Las voces más autorizadas y las reflexiones más profundas sobre la fiesta de los toros.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {opinionArticles.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
