import React, { useState, useMemo } from "react";
import { Breadcrumbs } from "@/shared";
import { useArticles } from "../../hooks/content";
import { Link } from "react-router-dom";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [currentPage, setCurrentPage] = useState(1);

  const { data: inspiration, isLoading } = useArticles(
    "inspiration",
    currentPage
  );

  // Get unique categories from the API data
  const categories = useMemo(() => {
    if (!inspiration?.data) return [{ id: 1, title: "الكل" }];

    const uniqueTags = [...new Set(inspiration.data.map((item) => item.tags))];
    return [
      { id: 1, title: "الكل" },
      ...uniqueTags.map((tag, index) => ({ id: index + 2, title: tag })),
    ];
  }, [inspiration?.data]);

  // Filter data based on selected category
  const filteredData = useMemo(() => {
    if (!inspiration?.data) return [];

    if (selectedCategory === "الكل") {
      return inspiration.data;
    }

    return inspiration.data.filter((item) => item.tags === selectedCategory);
  }, [inspiration?.data, selectedCategory]);

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
    <div className="py-4 px-5">
      <div className="max-w-[1232px] mx-auto">
        <div className="mb-6">
          <Breadcrumbs link1="/inspiration" title1="مساحة الإلهام" />
        </div>
        <div className="flex justify-between items-center gap-2 md:gap-6 mb-8 flex-wrap">
          <div className="h1-bold">مبادراتنا</div>

          <div className="gap-4 h4-light items-center hidden lg:flex">
            {categories.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedCategory(item.title)}
                className={`cursor-pointer ${
                  selectedCategory === item.title
                    ? "bg-light-blue py-[8.5px] px-5 cta-large rounded-2xl duration-300 transition-all"
                    : ""
                }`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="block lg:hidden">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-[8.5px] px-1 cta-large duration-300 transition-all border-b outline-none"
            >
              {categories.map((item) => (
                <option value={item.title} key={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center py-8">
            <p className="h4-light text-gray-500">
              لا توجد مقالات متاحة في هذا التصنيف
            </p>
          </div>
        ) : (
          <div className="grid-masonry" dir="ltr">
            {filteredData.map((item, index) => (
              <Link
                to={`/inspiration/${item.slug}`}
                key={item.id}
                className={`rounded-lg overflow-hidden w-full relative group cursor-pointer text-center gallery${
                  index + 1
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full xl:opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 bg-gradient-navy px-8 py-15 flex flex-col gap-2 text-white justify-end items-center">
                  <div className="titles-bold px-[37px] py-[1.5px] bg-white/25 w-fit rounded-lg">
                    {item.tags}
                  </div>
                  <p className="h4-bold">{item.title}</p>
                  <div
                    className="body-light text-center"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {inspiration?.last_page > 1 && (
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors"
            >
              السابق
            </button>

            <div className="flex gap-1">
              {Array.from(
                { length: inspiration.last_page },
                (_, i) => i + 1
              ).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 py-2 rounded transition-colors ${
                    currentPage === page
                      ? "bg-primary-default text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === inspiration.last_page}
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
