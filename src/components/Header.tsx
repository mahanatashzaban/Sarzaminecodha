import { Logo } from "./icons/Logo";
import { HomeIcon, ServicesIcon, PortfolioIcon, AboutIcon, ContactIcon, UserIcon } from "./icons/MenuIcons";
import { Button } from "./ui/button";

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onUserAreaClick: () => void;
}

export function Header({ activeSection, onSectionChange, onUserAreaClick }: HeaderProps) {
  const menuItems = [
    { id: 'home', label: 'خانه', icon: HomeIcon },
    { id: 'services', label: 'خدمات', icon: ServicesIcon },
    { id: 'portfolio', label: 'نمونه کارها', icon: PortfolioIcon },
    { id: 'about', label: 'درباره ما', icon: AboutIcon },
    { id: 'contact', label: 'تماس با ما', icon: ContactIcon },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Logo className="w-10 h-10" />
            <div className="text-xl font-bold text-gray-900">سرزمین کدها</div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`flex items-center space-x-2 space-x-reverse px-3 py-2 rounded-md transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User Area Button */}
          <Button
            onClick={onUserAreaClick}
            className="flex items-center space-x-2 space-x-reverse bg-primary text-white hover:bg-primary/90"
          >
            <UserIcon className="w-5 h-5" />
            <span>ناحیه کاربری</span>
          </Button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}