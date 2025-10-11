import { useState } from "react";
import { useAllNews, usePage } from "../../hooks/content";
import More from "../More/More";

function Page() {
  const { data: news, isLoading } = useAllNews();
  const { data: hero } = usePage("news-articles");
  const [currentPage, setCurrentPage] = useState(1);
  const isNews = true;

  return (
    <More
      data={news}
      isLoading={isLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      hero={hero}
      isNews={isNews}
    />
  );
}

export default Page;
