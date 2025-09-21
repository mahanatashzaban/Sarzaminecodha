import { Button } from "../ui/button";
import { WebIcon, MobileIcon, PhoneIcon, ContactIcon, ServicesIcon, PortfolioIcon } from "../icons/MenuIcons";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { ScrollArea } from "../ui/scroll-area";
import { useState } from "react";

interface HomeSectionProps {
  activeSection: string;
}

export function HomeSection({ activeSection }: HomeSectionProps) {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [portfolioCategory, setPortfolioCategory] = useState("all");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", contactForm);
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  // Services data
  const services = [
    {
      icon: WebIcon,
      title: "طراحی و توسعه وب‌سایت",
      description: "ایجاد وب‌سایت‌های مدرن، ریسپانسیو و کاربرپسند با استفاده از آخرین تکنولوژی‌ها",
      features: [
        "طراحی UI/UX حرفه‌ای",
        "توسعه فرانت‌اند و بک‌اند",
        "بهینه‌سازی SEO",
        "ریسپانسیو و موبایل فرندلی"
      ]
    },
    {
      icon: MobileIcon,
      title: "توسعه اپلیکیشن موبایل",
      description: "ساخت اپلیکیشن‌های موبایل بومی و کراس پلتفرم برای Android و iOS",
      features: [
        "اپلیکیشن‌های بومی iOS و Android",
        "توسعه کراس پلتفرم",
        "طراحی رابط کاربری مدرن",
        "ادغام با سرویس‌های ابری"
      ]
    },
    {
      icon: ServicesIcon,
      title: "مشاوره تکنولوژی",
      description: "ارائه مشاوره تخصصی در انتخاب بهترین راه‌حل‌های تکنولوژی برای کسب‌وکار شما",
      features: [
        "تحلیل نیازهای کسب‌وکار",
        "انتخاب تکنولوژی مناسب",
        "طراحی معماری سیستم",
        "مدیریت پروژه"
      ]
    }
  ];

  // Portfolio data
  const portfolioCategories = [
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
    }
  ];

  const filteredProjects = portfolioCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === portfolioCategory);

  // About data
  const stats = [
    { number: "100+", label: "پروژه موفق" },
    { number: "50+", label: "مشتری راضی" },
    { number: "5+", label: "سال تجربه" },
    { number: "24/7", label: "پشتیبانی" }
  ];

  const team = [
    {
      name: "علی احمدی",
      role: "مدیر تکنولوژی",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "سارا کریمی",
      role: "طراح UI/UX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "محمد رضایی",
      role: "توسعه‌دهنده فول‌استک",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  // Customer data
  const customers = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `شرکت ${i + 1}`,
    logo: `https://images.unsplash.com/photo-1622465911368-72162f8da3e2?w=100&h=100&fit=crop&crop=center&q=80`,
    website: `https://customer${i + 1}.com`,
    description: `شرکت معتبر و پیشرو در حوزه فعالیت خود`
  }));

  const phoneNumbers = [
    "02171058026",
    "09051826963", 
    "09375437106"
  ];

  const handleCustomerClick = (customer: typeof customers[0]) => {
    window.open(customer.website, '_blank');
  };

  const renderContent = () => {
    switch (activeSection) {
      case "services":
        return (
          <section className="py-20 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  خدمات ما
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right">
                  با تیم متخصص و تجربه‌ای بیش از ۵ سال، آماده ارائه بهترین خدمات در حوزه تکنولوژی هستیم
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                    >
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mb-6">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-right">{service.title}</h3>
                      <p className="text-gray-600 mb-6 text-right leading-relaxed">{service.description}</p>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                            <div className="w-2 h-2 bg-primary rounded-full ml-3 flex-shrink-0"></div>
                            <span className="text-right">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );

      case "portfolio":
        return (
          <section className="py-20 bg-gray-50" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  نمونه کارهای ما
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right">
                  مجموعه‌ای از پروژه‌های موفق که با همکاری مشتریان عزیز انجام داده‌ایم
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {portfolioCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={portfolioCategory === category.id ? "default" : "outline"}
                    onClick={() => setPortfolioCategory(category.id)}
                    className="px-6 py-3 rounded-xl"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 text-right">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-right leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4 justify-end">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full rounded-xl">
                        مشاهده جزئیات
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case "about":
        return (
          <section className="py-20 bg-white" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  درباره سرزمین کدها
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right">
                  ما تیمی پرشور و متعهد از متخصصان IT هستیم که با هدف ارائه بهترین خدمات تکنولوژی تشکیل شده‌ایم
                </p>
              </div>

              <div className="mb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">داستان ما</h3>
                    <div className="space-y-4 text-right">
                      <p className="text-gray-600 leading-relaxed">
                        سرزمین کدها در سال ۱۳۹۸ با هدف کمک به کسب‌وکارها برای ورود به دنیای دیجیتال تأسیس شد. ما با تیمی از متخصصان مجرب، بیش از ۱۰۰ پروژه موفق را در زمینه‌های مختلف تکنولوژی انجام داده‌ایم.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        تمرکز ما بر ایجاد راه‌حل‌های خلاقانه و کارآمد است که به مشتریان کمک می‌کند تا در بازار رقابتی امروز موفق باشند.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        ما همواره سعی داریم با به‌کارگیری آخرین تکنولوژی‌ها و بهترین شیوه‌های صنعت، خدماتی با کیفیت بالا ارائه دهیم.
                      </p>
                    </div>
                  </div>
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                      alt="تیم سرزمین کدها"
                      className="rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6">
                      <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">تیم ما</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {team.map((member, index) => (
                    <div key={index} className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg">
                      <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="py-20 bg-gray-50" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  تماس با ما
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right">
                  آماده شنیدن ایده‌های شما و تبدیل آن‌ها به واقعیت هستیم. همین حالا با ما در تماس باشید
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">اطلاعات تماس</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl">
                        <PhoneIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <h4 className="font-medium text-gray-900 mb-2">شماره تماس</h4>
                        <div className="space-y-1">
                          {phoneNumbers.map((phone, index) => (
                            <a
                              key={index}
                              href={`tel:${phone}`}
                              className="block text-gray-600 hover:text-primary transition-colors"
                              dir="ltr"
                            >
                              {phone}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 space-x-reverse">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl">
                        <ContactIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="text-right">
                        <h4 className="font-medium text-gray-900 mb-2">ایمیل</h4>
                        <a
                          href="mailto:info@codeland.ir"
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          info@codeland.ir
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                    <h4 className="font-medium text-gray-900 mb-2 text-right">ساعات کاری</h4>
                    <p className="text-gray-600 text-right">شنبه تا چهارشنبه: ۹:۰۰ - ۱۸:۰۰</p>
                    <p className="text-gray-600 text-right">پنج‌شنبه: ۹:۰۰ - ۱۴:۰۰</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-right">فرم تماس</h3>
                  
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-right block">نام و نام خانوادگی</Label>
                        <Input
                          id="name"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="text-right rounded-xl"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-right block">شماره تماس</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="text-right rounded-xl"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-right block">ایمیل</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="text-right rounded-xl"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-right block">پیام شما</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="لطفاً پیام خود را بنویسید..."
                        className="text-right rounded-xl"
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full rounded-xl">
                      ارسال پیام
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        );

      default: // home
        return (
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-white via-gray-50 to-primary/5 py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    به <span className="text-primary">سرزمین کدها</span> خوش آمدید
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-right leading-relaxed">
                    ما تیمی از برنامه‌نویسان حرفه‌ای هستیم که آماده تحقق ایده‌های دیجیتال شما در قالب وب‌سایت‌ها و اپلیکیشن‌های موبایل پیشرفته می‌باشیم.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                    <Button size="lg" className="px-8 py-4 rounded-xl">
                      شروع پروژه
                    </Button>
                    <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl">
                      مشاهده نمونه کارها
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mx-auto mb-6">
                        <WebIcon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">طراحی وب‌سایت</h3>
                      <p className="text-gray-600 text-right leading-relaxed">
                        طراحی و توسعه وب‌سایت‌های مدرن، ریسپانسیو و بهینه‌شده برای موتورهای جستجو
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mx-auto mb-6">
                        <MobileIcon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">اپلیکیشن موبایل</h3>
                      <p className="text-gray-600 text-right leading-relaxed">
                        توسعه اپلیکیشن‌های موبایل بومی و کراس پلتفرم برای Android و iOS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Customer Logos Section */}
            <section className="py-16 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">مشتریان ما</h2>
                  <p className="text-gray-600 text-lg text-right">
                    افتخار همکاری با برندها و شرکت‌های معتبر را داریم
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <ScrollArea className="h-96 w-full">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {customers.map((customer) => (
                        <div
                          key={customer.id}
                          onClick={() => handleCustomerClick(customer)}
                          className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-4 border border-gray-200 hover:border-primary"
                        >
                          <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
                            <img
                              src={customer.logo}
                              alt={customer.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <h3 className="text-sm font-medium text-gray-900 text-center mb-1">
                            {customer.name}
                          </h3>
                          <p className="text-xs text-gray-500 text-center text-right">
                            {customer.description}
                          </p>
                          <div className="mt-2 text-center">
                            <span className="text-xs text-primary group-hover:underline">
                              مشاهده نمونه کار
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return renderContent();
}