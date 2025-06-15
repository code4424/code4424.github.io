import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import { type Theme } from './ThemeProvider';
import Vision from './Vision';
import Programs from './Programs';
import Facilities from './Facilities';
import Values from './Values';
import Alumni from './Alumni';
import Admissions from './Admissions';
import NEPSection from './NEPSection';
import AlphaGeneration from './AlphaGeneration';
import ParentEngagement from './ParentEngagement';
import { ThemeProvider } from './ThemeProvider';
import Contactus from './Contactus';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

  const LandingPage = () => {
    const [theme, setTheme] = useState<Theme>('light');
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark');
    };

  return (
    <ThemeProvider defaultTheme={theme} storageKey="bhs-theme">
      <div className="min-h-screen font-sans bg-gradient-to-br from-white to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-gray-100 transition-colors duration-500">
        <Header />
        
        <div className="fixed right-5 bottom-5 z-50">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleTheme}
            className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
        
        <main>
          <Hero />
          <Vision />
          <AlphaGeneration />
          <NEPSection />
          <Programs />
          <Facilities />
          <Values />
          <Alumni />
          <Admissions />
          <ParentEngagement />
        </main>
        
        <Contactus />
      </div>
    </ThemeProvider>
  );
};

export default LandingPage;