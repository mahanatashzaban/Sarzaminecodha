import { useState } from "react";
import { Button } from "../ui/button";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "همه پروژه‌ها" },
    { id: "website", label: "وب‌سایت" },
    { id: "mobile", label: "موبایل" },
    { id: "ecommerce", label: "فروشگاهی" }
  ];

  const projects = [
    {
      id: 1,
      title: "فروشگاه آنلاین مد و پوشاک",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "طراحی و توسعه فروشگاه آنلاین کامل با پنل مدیریت",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "اپلیکیشن درخواست تاکسی",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      description: "اپلیکیشن موبایل برای درخواست تاکسی با قابلیت ردیابی",
      technologies: ["React Native", "Firebase", "Google Maps"]
    },
    {
      id: 3,
      title: "وب‌سایت شرکتی",
      category: "website",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      description: "وب‌سایت معرفی شرکت با قابلیت‌های SEO و CMS",
      technologies: ["WordPress", "PHP", "MySQL"]
    },
    {
      id: 4,
      title: "پلتفرم آموزش آنلاین",
      category: "website",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      description: "سیستم مدیریت یادگیری با ویدیو و تست آنلاین",
      technologies: ["Vue.js", "Laravel", "MySQL"]
    },
    {
      id: 5,
      title: "اپلیکیشن سفارش غذا",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
      description: "اپلیکیشن سفارش آنلاین غذا با پیگیری لحظه‌ای",
      technologies: ["Flutter", "Firebase", "Stripe"]
    },
    {
      id: 6,
      title: "فروشگاه کتاب آنلاین",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      description: "فروشگاه آنلاین کتاب با سیستم جستجوی پیشرفته",
      technologies: ["React", "Express.js", "PostgreSQL"]
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            نمونه کارهای ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعه‌ای از پروژه‌های موفق که با همکاری مشتریان عزیز انجام داده‌ایم
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="px-6 py-2"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  مشاهده جزئیات
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}