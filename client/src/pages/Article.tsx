import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleByline } from "@/components/ArticleByline";
import { ArticleBody } from "@/components/ArticleBody";
import { TeamCTA } from "@/components/TeamCTA";
import { ARTICLES } from "@/data/articles";
import { getArticle } from "@/lib/queries";
import type { Article as ArticleType } from "@/data/articles";
import NotFound from "@/pages/not-found";

type Props = {
  params: { slug: string };
};

export default function Article({ params }: Props) {
  const [article, setArticle] = useState<ArticleType | null>(
    ARTICLES[params.slug] ?? null
  );
  const [loading, setLoading] = useState(!(params.slug in ARTICLES));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    getArticle(params.slug).then((result) => {
      if (result) setArticle(result);
      setLoading(false);
    });
  }, [params.slug]);

  if (loading) {
    return (
      <div className="bs-bg-canvas min-h-screen">
        <Header />
      </div>
    );
  }

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="bs-bg-canvas" data-testid={`page-article-${article.slug}`}>
      <Header />
      <main>
        <ArticleHero
          publication={article.publication}
          headline={article.headline}
          date={article.date}
          type={article.type}
          image={article.heroImage}
        />
        <ArticleByline
          authors={article.authors}
          withAuthors={article.withAuthors}
          dek={article.dek}
        />
        <ArticleBody blocks={article.blocks} />
        <TeamCTA
          headline="Bring us your hardest growth question."
          body="We will tell you on the first call whether agents, a finance rebuild, or a defensible valuation is the right next move."
          ctaLabel="Get in touch"
          ctaHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}
