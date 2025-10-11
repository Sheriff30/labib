import { useState } from "react";
import { useAllArticle, usePage } from "../../hooks/content";
import More from "../More/More";

function Page() {
  const { data: latest, isLoading } = useAllArticle();
  const { data: hero } = usePage("latest");
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
