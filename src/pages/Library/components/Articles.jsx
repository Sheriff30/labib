import { Hero, SectionHeader } from "@/pages/Library/components";
import { NewsCard } from "@/shared";
import { useArticles } from "../../../hooks/articles";
import { Link } from "react-router-dom";

function Articles() {
  const { data, isLoading, error } = useArticles("article");
  console.log(data);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-8">
        <SectionHeader src="/articles.svg" title="المقالات" link="/articles" />
        <div className="text-center">جاري التحميل...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col gap-8">
        <SectionHeader src="/articles.svg" title="المقالات" link="/articles" />
        <div className="text-center text-red-500">
          حدث خطأ في تحميل المقالات
        </div>
      </div>
    );
  }

  const articles = data?.data?.data || [];
  const featuredArticle = articles[0];
  const otherArticles = articles.slice(1, 4);

  return (
    <div className="flex flex-col gap-8 ">
      <SectionHeader src="/articles.svg" title="المقالات" link="/articles" />
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredArticle && (
          <div className="rounded-lg overflow-hidden w-full relative">
            <img
              src={featuredArticle.featured_image}
              alt={featuredArticle.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-navy p-8 flex flex-col gap-2 text-white justify-end">
              <p className="h4-bold">{featuredArticle.title}</p>
              <p className="body-light">{featuredArticle.excerpt}</p>
              <p className="caption-light">
                {formatDate(featuredArticle.published_at)}
              </p>
            </div>
          </div>
        )}
        <div className="flex flex-col gap-5">
          {otherArticles.map((article, index) => (
            <Link to={`/blog/${article.id}`} key={article.id}>
              <NewsCard
                key={article.id}
                variant={index === 0 ? undefined : "detailed"}
                title={article.title}
                description={article.excerpt}
                date={formatDate(article.published_at)}
                src={article.featured_image}
                className="h-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
