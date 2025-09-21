import { useState } from "react";

// Icons Components
const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3 12 2-2m0 0 7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ServicesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const PortfolioIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const AboutIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ContactIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const WebIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const MobileIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Logo = ({ className }: { className?: string }) => (
  <div className={`flex items-center space-x-2 space-x-reverse ${className}`}>
    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-lg">س</span>
    </div>
    <span className="text-xl font-bold text-gray-900">سرزمین کدها</span>
  </div>
);

// UI Components
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'lg' | 'sm';
  className?: string;
  disabled?: boolean;
}

const Button = ({ children, onClick, type = 'button', variant = 'default', size = 'default', className = '', disabled }: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground'
  };
  
  const sizes = {
    default: 'h-10 py-2 px-4',
    lg: 'h-11 px-8 rounded-md',
    sm: 'h-9 px-3 rounded-md'
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

interface InputProps {
  id?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const Input = ({ id, type = 'text', value, onChange, placeholder, className = '', required }: InputProps) => (
  <input
    id={id}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

interface TextareaProps {
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  className?: string;
  rows?: number;
  required?: boolean;
}

const Textarea = ({ id, value, onChange, placeholder, className = '', rows = 3, required }: TextareaProps) => (
  <textarea
    id={id}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={rows}
    required={required}
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
  />
);

const Label = ({ children, htmlFor, className = '' }: { children: React.ReactNode; htmlFor?: string; className?: string }) => (
  <label htmlFor={htmlFor} className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}>
    {children}
  </label>
);

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

// Tabs Components
interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

const Tabs = ({ value, onValueChange, children, className = '' }: TabsProps) => (
  <div className={className}>
    {children}
  </div>
);

const TabsList = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${className}`}>
    {children}
  </div>
);

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsTrigger = ({ value, children, className = '' }: TabsTriggerProps) => (
  <button
    className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm ${className}`}
  >
    {children}
  </button>
);

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const TabsContent = ({ value, children, className = '' }: TabsContentProps) => (
  <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}>
    {children}
  </div>
);

// Main Components
const Header = ({ onUserAreaClick }: { onUserAreaClick: () => void }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'خانه', icon: HomeIcon },
    { id: 'services', label: 'خدمات ما', icon: ServicesIcon },
    { id: 'portfolio', label: 'نمونه کارها', icon: PortfolioIcon },
    { id: 'about', label: 'درباره ما', icon: AboutIcon },
    { id: 'contact', label: 'تماس با ما', icon: ContactIcon },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center space-x-2 space-x-reverse text-gray-600 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                <IconComponent className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Area Button */}
        <div className="flex items-center space-x-4 space-x-reverse">
          <Button
            onClick={onUserAreaClick}
            variant="outline"
            className="hidden sm:flex items-center space-x-2 space-x-reverse rounded-xl"
          >
            <UserIcon className="w-4 h-4" />
            <span>ناحیه کاربری</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="px-4 py-2 space-y-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center space-x-3 space-x-reverse w-full text-right px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <IconComponent className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-700">{item.label}</span>
                </button>
              );
            })}
            <button
              onClick={() => {
                onUserAreaClick();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-3 space-x-reverse w-full text-right px-3 py-3 rounded-lg hover:bg-gray-50 transition-colors sm:hidden"
            >
              <UserIcon className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">ناحیه کاربری</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

const UserAuthModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({ 
    name: "", 
    email: "", 
    password: "", 
    confirmPassword: "" 
  });
  const [forgetForm, setForgetForm] = useState({ email: "" });
  const [showForgetPassword, setShowForgetPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", loginForm);
    onClose();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.password !== signupForm.confirmPassword) {
      alert("رمز عبور و تکرار آن یکسان نیستند");
      return;
    }
    console.log("Signup:", signupForm);
    onClose();
  };

  const handleForgetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Forget password:", forgetForm);
    alert("لینک بازیابی رمز عبور به ایمیل شما ارسال شد");
    setShowForgetPassword(false);
    setForgetForm({ email: "" });
  };

  const resetForms = () => {
    setLoginForm({ email: "", password: "" });
    setSignupForm({ name: "", email: "", password: "", confirmPassword: "" });
    setForgetForm({ email: "" });
    setShowForgetPassword(false);
    setActiveTab("login");
  };

  const handleClose = () => {
    resetForms();
    onClose();
  };

  if (showForgetPassword) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <div className="p-6">
          <div className="text-center pb-4">
            <h2 className="text-2xl font-bold text-gray-900">بازیابی رمز عبور</h2>
            <p className="text-gray-600 text-right mt-2">
              ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود
            </p>
          </div>

          <form onSubmit={handleForgetPassword} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="forget-email" className="text-right block font-medium">ایمیل</Label>
              <Input
                id="forget-email"
                type="email"
                value={forgetForm.email}
                onChange={(e) => setForgetForm({ email: e.target.value })}
                className="text-right rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                placeholder="example@email.com"
                required
              />
            </div>
            
            <div className="flex gap-3">
              <Button type="submit" className="flex-1 rounded-xl bg-primary hover:bg-primary/90">
                ارسال لینک بازیابی
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setShowForgetPassword(false)}
                className="flex-1 rounded-xl border-gray-200 hover:bg-gray-50"
              >
                بازگشت
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-6">
        <div className="text-center pb-4">
          <h2 className="text-2xl font-bold text-gray-900">ناحیه کاربری</h2>
          <p className="text-gray-600 text-right mt-2">
            برای دسترسی به پنل کاربری خود وارد شوید یا ثبت نام کنید
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-xl p-1">
            <TabsTrigger value="login" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              ورود
            </TabsTrigger>
            <TabsTrigger value="signup" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              ثبت نام
            </TabsTrigger>
          </TabsList>

          {activeTab === "login" && (
            <TabsContent value="login" className="space-y-6 mt-6">
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="login-email" className="text-right block font-medium">ایمیل</Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="text-right rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password" className="text-right block font-medium">رمز عبور</Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="text-right rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    placeholder="رمز عبور خود را وارد کنید"
                    required
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setShowForgetPassword(true)}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    فراموشی رمز عبور؟
                  </button>
                </div>

                <Button type="submit" className="w-full rounded-xl bg-primary hover:bg-primary/90 py-3">
                  ورود به حساب کاربری
                </Button>
              </form>
            </TabsContent>
          )}

          {activeTab === "signup" && (
            <TabsContent value="signup" className="space-y-6 mt-6">
              <form onSubmit={handleSignup} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="signup-name" className="text-right block font-medium">نام و نام خانوادگی</Label>
                  <Input
                    id="signup-name"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                    className="text-right rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email" className="text-right block font-medium">ایمیل</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    className="text-right rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password" className="text-right block font-medium">رمز عبور</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                    className="text-right rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    placeholder="رمز عبور قوی انتخاب کنید"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-right block font-medium">تکرار رمز عبور</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                    className="text-right rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20"
                    placeholder="رمز عبور را مجدداً وارد کنید"
                    required
                  />
                </div>
                <Button type="submit" className="w-full rounded-xl bg-primary hover:bg-primary/90 py-3">
                  ایجاد حساب کاربری
                </Button>
              </form>
            </TabsContent>
          )}
        </Tabs>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            با ورود یا ثبت نام، شما شرایط و قوانین استفاده از سایت را می‌پذیرید
          </p>
        </div>
      </div>
    </Modal>
  );
};

const Footer = () => {
  const phoneNumbers = [
    "02171058026",
    "09051826963", 
    "09375437106"
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Logo className="text-white mb-4" />
            <p className="text-gray-300 text-right leading-relaxed mb-6">
              سرزمین کدها با تیمی متخصص و تجربه‌ای بیش از ۵ سال، آماده ارائه بهترین خدمات در حوزه طراحی وب‌سایت و اپلیکیشن موبایل می‌باشد.
            </p>
            <div className="flex items-center space-x-4 space-x-reverse">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <PhoneIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm text-gray-400">تماس با ما:</div>
                <div className="space-y-1">
                  {phoneNumbers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-gray-300 hover:text-primary transition-colors text-sm"
                      dir="ltr"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-right">خدمات ما</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="text-right hover:text-primary transition-colors cursor-pointer">طراحی وب‌سایت</li>
              <li className="text-right hover:text-primary transition-colors cursor-pointer">اپلیکیشن موبایل</li>
              <li className="text-right hover:text-primary transition-colors cursor-pointer">مشاوره تکنولوژی</li>
              <li className="text-right hover:text-primary transition-colors cursor-pointer">پشتیبانی فنی</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-right">لینک‌های مفید</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="text-right hover:text-primary transition-colors cursor-pointer">درباره ما</li>
              <li className="text-right hover:text-primary transition-colors cursor-pointer">نمونه کارها</li>
              <li className="text-right hover:text-primary transition-colors cursor-pointer">تماس با ما</li>
              <li className="text-right hover:text-primary transition-colors cursor-pointer">بلاگ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © ۱۴۰۳ سرزمین کدها. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
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
    alert("پیام شما با موفقیت ارسال شد!");
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
    },
    {
      id: 4,
      title: "اپلیکیشن بانکی",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      description: "اپلیکیشن موبایل بانکی با امنیت بالا",
      technologies: ["Flutter", "Node.js", "PostgreSQL"]
    },
    {
      id: 5,
      title: "پلتفرم آموزش آنلاین",
      category: "website",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      description: "سیستم مدیریت یادگیری آنلاین",
      technologies: ["React", "Django", "MySQL"]
    },
    {
      id: 6,
      title: "فروشگاه کتاب",
      category: "ecommerce",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "فروشگاه آنلاین کتاب با سیستم جستجوی پیشرفته",
      technologies: ["Vue.js", "Laravel", "ElasticSearch"]
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

  return (
    <div className="min-h-screen bg-white">
      <Header onUserAreaClick={() => setIsUserModalOpen(true)} />
      
      <main>
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-white via-gray-50 to-orange-50 py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                به <span className="text-primary">سرزمین کدها</span> خوش آمدید
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto text-right leading-relaxed">
                ما تیمی از برنامه‌نویسان حرفه‌ای هستیم که آماده تحقق ایده‌های دیجیتال شما در قالب وب‌سایت‌ها و اپلیکیشن‌های موبایل پیشرفته می‌باشیم.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
                <Button size="lg" className="px-8 py-4 rounded-xl text-base">
                  شروع پروژه
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 rounded-xl text-base">
                  مشاهده نمونه کارها
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mx-auto mb-6">
                    <WebIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">طراحی وب‌سایت</h3>
                  <p className="text-gray-600 text-right leading-relaxed">
                    طراحی و توسعه وب‌سایت‌های مدرن، ریسپانسیو و بهینه‌شده برای موتورهای جستجو
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mx-auto mb-6">
                    <MobileIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">اپلیکیشن موبایل</h3>
                  <p className="text-gray-600 text-right leading-relaxed">
                    توسعه اپلیکیشن‌های موبایل بومی و کراس پلتفرم برای Android و iOS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Logos Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">مشتریان ما</h2>
              <p className="text-gray-600 text-base md:text-lg text-right">
                افتخار همکاری با برندها و شرکت‌های معتبر را داریم
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-6 border border-gray-100">
              <div className="max-h-96 overflow-y-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                  {customers.map((customer) => (
                    <div
                      key={customer.id}
                      onClick={() => handleCustomerClick(customer)}
                      className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-3 md:p-4 border border-gray-200 hover:border-primary"
                    >
                      <div className="aspect-square bg-gray-100 rounded-xl mb-3 overflow-hidden">
                        <img
                          src={customer.logo}
                          alt={customer.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-medium text-gray-900 text-center mb-1">
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
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                خدمات ما
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-right">
                با تیم متخصص و تجربه‌ای بیش از ۵ سال، آماده ارائه بهترین خدمات در حوزه تکنولوژی هستیم
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
                  >
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-xl mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 text-right">{service.title}</h3>
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

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                نمونه کارهای ما
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-right">
                مجموعه‌ای از پروژه‌های موفق که با همکاری مشتریان عزیز انجام داده‌ایم
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12">
              {portfolioCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={portfolioCategory === category.id ? "default" : "outline"}
                  onClick={() => setPortfolioCategory(category.id)}
                  className="px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base"
                >
                  {category.label}
                </Button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 text-right">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-right leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4 justify-end">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full"
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

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                درباره سرزمین کدها
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-right">
                ما تیمی پرشور و متعهد از متخصصان IT هستیم که با هدف ارائه بهترین خدمات تکنولوژی تشکیل شده‌ایم
              </p>
            </div>

            <div className="mb-12 md:mb-16">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-right">داستان ما</h3>
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
                    className="rounded-2xl shadow-2xl w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mb-12 md:mb-16">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-4 md:p-6">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-8 md:mb-12">تیم ما</h3>
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {team.map((member, index) => (
                  <div key={index} className="text-center bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-gray-600 text-sm md:text-base">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                تماس با ما
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-right">
                آماده شنیدن ایده‌های شما و تبدیل آن‌ها به واقعیت هستیم. همین حالا با ما در تماس باشید
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-right">اطلاعات تماس</h3>
                
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

              <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-right">فرم تماس</h3>
                
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
      </main>

      <Footer />

      <UserAuthModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />
    </div>
  );
}