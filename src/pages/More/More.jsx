import { NewsCard } from "../../shared";
import { IMAGE_BASE_URL } from "../../lib/constants";

function More({ data, isLoading, setCurrentPage, hero, isNews = false }) {
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[1232px] mx-auto px-5 py-16 text-center">
          جاري التحميل...
        </div>
      </div>
    );
  }

  const articles = data?.data || [];
  const pagination = {
    currentPage: data?.current_page || 1,
    lastPage: data?.last_page || 1,
    total: data?.total || 0,
    from: data?.from || 0,
    to: data?.to || 0,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-[1232px] mx-auto px-5 py-16">
          <div className="text-center">
            <h1 className="h1-bold mb-4">{hero.content[0].data.title}</h1>
            <p
              className="h4-light text-secondary-default max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: hero.content[0].data.text }}
            />
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-[1232px] mx-auto px-5 py-12">
        <div className="mb-8">
          <h2 className="h2-bold mb-2">جميع المقالات</h2>
          <p className="body-medium text-secondary-default">
            عدد المقالات: {pagination.total}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 ">
          {articles.map((article) => (
            <NewsCard
              title={article.title}
              key={article.id}
              description={article.content}
              link={isNews ? `/news/${article.slug}` : `/blog/${article.slug}`}
              date={article.created_at}
              src={`${IMAGE_BASE_URL}${article.image}`}
              className={"!h-40 w-full"}
            />
          ))}
        </div>

        {/* Pagination */}
        {pagination.lastPage > 1 && (
          <div className="flex justify-center items-center mt-12 gap-2">
            <button
              onClick={() => setCurrentPage(pagination.currentPage - 1)}
              disabled={pagination.currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
            >
              السابق
            </button>

            <div className="flex gap-1">
              {Array.from({ length: pagination.lastPage }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-2 rounded transition-colors ${
                      pagination.currentPage === page
                        ? "bg-primary-default text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setCurrentPage(pagination.currentPage + 1)}
              disabled={pagination.currentPage === pagination.lastPage}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
            >
              التالي
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default More;
