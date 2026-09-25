import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { ArticleByline } from "@/components/ArticleByline";
import { ArticleBody } from "@/components/ArticleBody";
import { TeamCTA } from "@/components/TeamCTA";
import { ARTICLES } from "@/data/articles";
import { launchArticles, launchCards } from "@/data/launch";
import { MiniArticleGrid } from "@/components/MiniArticleGrid";
import NotFound from "@/pages/not-found";

type Props = {
  params: { slug: string };
};

export default function Article({ params }: Props) {
  const launch = launchArticles[params.slug];
  const article = launch || ARTICLES[params.slug];

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
        {launch?.downloadUrl && <div className="bs-container py-8"><div className="max-w-[720px] mx-auto"><a className="underline font-medium" href={launch.downloadUrl} download>{launch.downloadLabel} (Excel)</a><p className="text-sm mt-2">Editable planning tools with illustrative assumptions. Adapt them to your business.</p></div></div>}
        <ArticleBody blocks={article.blocks} />
        {launch?.authorBio && <div className="bs-container pb-12"><p className="max-w-[720px] mx-auto text-sm text-[hsl(var(--bs-ink-muted))]">{launch.authorBio}</p></div>}
        {launch && <MiniArticleGrid heading="Related reading" articles={launchCards.filter(a=>a.href!==`/insights/${params.slug}`).slice(0,3)} />}

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
