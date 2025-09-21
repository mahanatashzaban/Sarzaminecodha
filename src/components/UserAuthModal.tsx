import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

interface UserAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserAuthModal({ isOpen, onClose }: UserAuthModalProps) {
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
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl rounded-2xl">
          <DialogHeader className="text-center pb-4">
            <DialogTitle className="text-2xl font-bold text-gray-900">بازیابی رمز عبور</DialogTitle>
            <p className="text-gray-600 text-right mt-2">
              ایمیل خود را وارد کنید تا لینک بازیابی رمز عبور برای شما ارسال شود
            </p>
          </DialogHeader>

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
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-gray-50 border-0 shadow-2xl rounded-2xl">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="text-2xl font-bold text-gray-900">ناحیه کاربری</DialogTitle>
          <p className="text-gray-600 text-right mt-2">
            برای دسترسی به پنل کاربری خود وارد شوید یا ثبت نام کنید
          </p>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-xl p-1">
            <TabsTrigger value="login" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              ورود
            </TabsTrigger>
            <TabsTrigger value="signup" className="rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm">
              ثبت نام
            </TabsTrigger>
          </TabsList>

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
        </Tabs>

        <div className="text-center pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            با ورود یا ثبت نام، شما شرایط و قوانین استفاده از سایت را می‌پذیرید
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}