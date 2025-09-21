import { WebIcon, MobileIcon, ServicesIcon } from "../icons/MenuIcons";

export function ServicesSection() {
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            خدمات ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            با تیم متخصص و تجربه‌ای بیش از ۵ سال، آماده ارائه بهترین خدمات در حوزه تکنولوژی هستیم
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full ml-3"></div>
                      {feature}
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
}