export function AboutSection() {
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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            درباره سرزمین کدها
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ما تیمی پرشور و متعهد از متخصصان IT هستیم که با هدف ارائه بهترین خدمات تکنولوژی تشکیل شده‌ایم
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">داستان ما</h3>
              <p className="text-gray-600 mb-4">
                سرزمین کدها در سال ۱۳۹۸ با هدف کمک به کسب‌وکارها برای ورود به دنیای دیجیتال تأسیس شد. ما با تیمی از متخصصان مجرب، بیش از ۱۰۰ پروژه موفق را در زمینه‌های مختلف تکنولوژی انجام داده‌ایم.
              </p>
              <p className="text-gray-600 mb-4">
                تمرکز ما بر ایجاد راه‌حل‌های خلاقانه و کارآمد است که به مشتریان کمک می‌کند تا در بازار رقابتی امروز موفق باشند.
              </p>
              <p className="text-gray-600">
                ما همواره سعی داریم با به‌کارگیری آخرین تکنولوژی‌ها و بهترین شیوه‌های صنعت، خدماتی با کیفیت بالا ارائه دهیم.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="تیم سرزمین کدها"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">تیم ما</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
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
}