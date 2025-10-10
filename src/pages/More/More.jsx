import { NewsCard } from "../../shared";
import { Link } from "react-router-dom";

function More() {
  // Dummy data for the articles
  const dummyArticles = [
    {
      id: 1,
      title: "كيف نجعل التعلم ممتعًا للأطفال",
      description:
        "اكتشف الطرق المبتكرة لجعل التعليم تجربة ممتعة ومثيرة للأطفال من خلال الأنشطة التفاعلية والألعاب التعليمية",
      date: "15 أكتوبر 2024",
      image: "/post1.png",
    },
    {
      id: 2,
      title: "أهمية القراءة في تنمية خيال الطفل",
      description:
        "تعرف على دور القراءة الأساسي في تطوير الإبداع والخيال لدى الأطفال وكيفية تشجيعهم على حب الكتب",
      date: "12 أكتوبر 2024",
      image: "/post2.png",
    },
    {
      id: 3,
      title: "استراتيجيات التعليم التفاعلي الحديث",
      description:
        "استكشف أحدث التقنيات والأساليب في التعليم التفاعلي التي تساعد على تحسين تجربة التعلم للأطفال",
      date: "10 أكتوبر 2024",
      image: "/post1.png",
    },
    {
      id: 4,
      title: "بناء الثقة بالنفس عند الأطفال",
      description:
        "نصائح عملية وفعالة لمساعدة الأطفال على بناء الثقة بالنفس وتطوير شخصيتهم بطريقة صحية ومتوازنة",
      date: "8 أكتوبر 2024",
      image: "/post2.png",
    },
    {
      id: 5,
      title: "أنشطة تعليمية ممتعة للعطلة الصيفية",
      description:
        "مجموعة من الأنشطة والبرامج التعليمية الممتعة التي يمكن للأطفال ممارستها خلال العطلة الصيفية",
      date: "5 أكتوبر 2024",
      image: "/post1.png",
    },
    {
      id: 6,
      title: "تطوير المهارات الاجتماعية للطفل",
      description:
        "كيفية مساعدة الأطفال على تطوير مهاراتهم الاجتماعية والتواصل الفعال مع الآخرين في بيئات مختلفة",
      date: "3 أكتوبر 2024",
      image: "/post2.png",
    },
    {
      id: 7,
      title: "الفن والإبداع في تعليم الأطفال",
      description:
        "اكتشف كيف يمكن استخدام الفن والأنشطة الإبداعية كوسائل تعليمية فعالة لتنمية قدرات الأطفال",
      date: "1 أكتوبر 2024",
      image: "/post1.png",
    },
    {
      id: 8,
      title: "التكنولوجيا الذكية في التعليم",
      description:
        "تعرف على كيفية الاستفادة من التكنولوجيا الحديثة في تطوير أساليب التعليم وجعلها أكثر تفاعلية",
      date: "28 سبتمبر 2024",
      image: "/post2.png",
    },
    {
      id: 9,
      title: "تعزيز حب الاستطلاع العلمي",
      description:
        "طرق مبتكرة لتشجيع الأطفال على حب العلوم والاستكشاف من خلال التجارب العملية والأنشطة التفاعلية",
      date: "25 سبتمبر 2024",
      image: "/post1.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-[1232px] mx-auto px-5 py-16">
          <div className="text-center">
            <h1 className="h1-bold mb-4">مكتبة المقالات</h1>
            <p className="h4-light text-secondary-default max-w-2xl mx-auto">
              اكتشف مجموعة واسعة من المقالات التعليمية والتربوية المصممة خصيصًا
              لإثراء معرفة الأطفال وتطوير مهاراتهم
            </p>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="max-w-[1232px] mx-auto px-5 py-12">
        <div className="mb-8">
          <h2 className="h2-bold mb-2">جميع المقالات</h2>
          <p className="body-medium text-secondary-default">
            عدد المقالات: {dummyArticles.length}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dummyArticles.map((article) => (
            <Link
              to={`/article/${article.id}`}
              key={article.id}
              className="group"
            >
              <NewsCard
                variant="articles"
                title={article.title}
                description={article.description}
                date={article.date}
                src={article.image}
                className="h-full transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg"
              />
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary-default text-white rounded-lg hover:bg-primary-600 transition-colors">
            تحميل المزيد
          </button>
        </div>
      </div>
    </div>
  );
}

export default More;
