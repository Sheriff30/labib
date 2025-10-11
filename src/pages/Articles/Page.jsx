import { useState } from "react";
import { useArticles, usePage } from "../../hooks/content";
import More from "../More/More";

function Page() {
  const { data: latest, isLoading } = useArticles("articles");
  const { data: hero } = usePage("articles");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <More
      data={latest}
      isLoading={isLoading}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      hero={hero}
    />
  );
}

export default Page;
