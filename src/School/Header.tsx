import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Sun, Moon, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logo from '@/assets/logo/Bhs.jpg';
import '@/i18n/i18n'; // Ensure i18n is initialized

const Header = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("light")
  const [language, setLanguage] = useState("EN");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    if (i18n && i18n.changeLanguage) {
      const currentLang = i18n.language || "en";
      let newLanguage;
      if (currentLang === "en") {
        newLanguage = "kn";
      } else if (currentLang === "kn") {
        newLanguage = "te";
      } else {
        newLanguage = "en";
      }
      i18n.changeLanguage(newLanguage);
      setLanguage(newLanguage.toUpperCase());
    } else {
      // Fallback for when i18n is not initialized
      let newLang;
      if (language === "EN") {
        newLang = "KN";
      } else if (language === "KN") {
        newLang = "TE";
      } else {
        newLang = "EN";
      }
      setLanguage(newLang);
    }
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    // { name: t ? t('header.nav.about') : "About", href: "#about" },
    { name: t ? t('header.nav.programs') : "Programs", href: "#programs" },
    { name: t ? t('header.nav.facilities') : "Facilities", href: "#facilities" },
    { name: t ? t('header.nav.values') : "Values", href: "#values" },
    { name: t ? t('header.nav.alumni') : "Alumni", href: "#alumni" },
    { name: t ? t('header.nav.admissions') : "Admissions", href: "#admissions" },
    { name: t ? t('header.nav.contact') : "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white bg-opacity-90 dark:bg-gray-900 dark:bg-opacity-90 backdrop-blur shadow-md py-2'
        : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <div className=" w-32 h-24  flex items-center justify-center overflow-hidden ">
  <img src={logo} alt={t ? t('header.logo.alt') : "Basaveshwara Public School logo"} className="w-56 h-24 object-contain" />
</div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-1"
        >
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <a href="#contact">{t ? t('header.buttons.enquire') : "Enquire Now"}</a></Button>
          <Button variant="ghost" size="icon" className="relative" onClick={toggleLanguage}>
            <Globe className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs px-1 rounded-full min-w-[20px] h-5 flex items-center justify-center">
              {(i18n && i18n.language) ? i18n.language.toUpperCase() : language}
            </span>
          </Button>
          {/* <Button variant="ghost" size="icon" className="relative" onClick={toggleTheme}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button> */}
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-gray-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button asChild className=" bg-blue-600 hover:bg-blue-700 text-white">
            <a href="#contact">{t ? t('header.buttons.enquire') : "Enquire Now"}</a></Button>
            <Button variant="ghost" className="justify-start" onClick={toggleLanguage}>
              <Globe className="h-5 w-5 mr-2" />
              {t ? t('header.buttons.language') : "Language"}: {(i18n && i18n.language) ? i18n.language.toUpperCase() : language}
            </Button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;