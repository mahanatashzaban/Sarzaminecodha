import { PhoneIcon, ContactIcon } from "../icons/MenuIcons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { useState } from "react";

export function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form:", contactForm);
    // Reset form
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const phoneNumbers = [
    "02171058026",
    "09051826963", 
    "09375437106"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            تماس با ما
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            آماده شنیدن ایده‌های شما و تبدیل آن‌ها به واقعیت هستیم. همین حالا با ما در تماس باشید
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">اطلاعات تماس</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
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
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <ContactIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
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

            <div className="mt-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">ساعات کاری</h4>
              <p className="text-gray-600">شنبه تا چهارشنبه: ۹:۰۰ - ۱۸:۰۰</p>
              <p className="text-gray-600">پنج‌شنبه: ۹:۰۰ - ۱۴:۰۰</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">فرم تماس</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">نام و نام خانوادگی</Label>
                  <Input
                    id="name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">شماره تماس</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">ایمیل</Label>
                <Input
                  id="email"
                  type="email"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">پیام شما</Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="لطفاً پیام خود را بنویسید..."
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                ارسال پیام
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}