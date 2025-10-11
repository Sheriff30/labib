import { NewsCard } from "@/shared";
import { Breadcrumbs } from "@/shared";
import { useArticle, usePage } from "../../hooks/content";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../lib/constants";

export default function Page() {
  const { slug } = useParams();
  const { data, isLoading } = useArticle(slug);
  const { title, content, created_at, image } = data || {};
  const { data: blog, isLoading: isLoadingArticles } = usePage("blog");
  const articles = blog?.content[0]?.data?.items;

  if (isLoading) {
    return (
      <div className="py-4 px-5">
        <div className="max-w-[1232px] mx-auto text-center">
          جاري التحميل...
        </div>
      </div>
    );
  }

  return (
    <div className="py-4 pb-15 px-5">
      <div className="max-w-[1232px] mx-auto ">
        <div className="mb-6">
          <Breadcrumbs link1="/library" title1="مكتبة لبيب" title2={title} />
        </div>

        <div className="max-w-[1022px] mx-auto grid gap-4">
          <NewsCard
            title={title}
            variant="articles"
            date={created_at}
            src={`${IMAGE_BASE_URL}${image}`}
            type="article"
          />
          <div className="flex flex-col gap-8 border-t border-grey py-2 border-b ">
            <p
              className="text-primary-default"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            <div className="flex gap-2 items-center">
              <p>مشاركة:</p>
              <div className="flex gap-2">
                <a href="#">
                  <img src="/facebook-01.svg" alt="facebook" />
                </a>
                <a href="#">
                  <img src="/snapchat-color.svg" alt="twitter" />
                </a>
                <a href="#">
                  <img src="/new-twitter.svg" alt="twitter" />
                </a>
                <a href="#">
                  <img src="/whatsapp2.svg" alt="twitter" />
                </a>
                <a href="#">
                  <img src="/linkedin-01.svg" alt="twitter" />
                </a>
                <a href="#">
                  <img src="/telegram.svg" alt="twitter" />
                </a>

                <a href="#">
                  <img src="/pinterest.svg" alt="twitter" />
                </a>
                <a href="#">
                  <img src="/tumblr.svg" alt="twitter" />
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="h4-bold">مقالات قد تهمك!</div>
            <div className="grid lg:grid-cols-2 gap-4">
              {isLoadingArticles ? (
                <div className="py-8 text-center col-span-2">
                  جاري التحميل...
                </div>
              ) : (
                articles?.map((article) => {
                  return (
                    <NewsCard
                      title={article.title}
                      description={article.content}
                      date={article.created_at}
                      src={`${IMAGE_BASE_URL}${article.image}`}
                      className="max-h-[200px] lg:max-h-[140px]"
                      link={`/blog/${article.slug}`}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
