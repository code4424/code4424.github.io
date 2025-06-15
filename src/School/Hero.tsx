import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import hero from '@/assets/hero/hero.jpg';
import parent1 from '@/assets/hero/parent1.jpg';
import parent2 from '@/assets/hero/parent2.jpg';
import parent3 from '@/assets/hero/parent3.jpg';
import parent4 from '@/assets/hero/parent4.jpg';
import '@/i18n/i18n'; 

const Hero = () => {
  const { t } = useTranslation();

  const avatars = [
    { id: 1, src: parent1, alt: "Parent 1" },
    { id: 2, src: parent2, alt: "Parent 2" },
    { id: 3, src: parent3, alt: "Parent 3" },
    { id: 4, src: parent4, alt: "Parent 4" },
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 opacity-10 dark:opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-400 opacity-10 dark:opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="inline-block mt-3 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              {t('hero.hero.established')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">{t('hero.hero.heading.span')}</span>, {t('hero.hero.heading.rest')}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('hero.hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6">{t('hero.hero.buttons.explore')}</Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20 px-6 py-6">
                {t('hero.hero.buttons.visit')}
              </Button>
            </div>

            <div className="mt-8 flex items-center space-x-6">
              <div className="flex -space-x-2">
                {avatars.map((avatar) => (
                  <div key={avatar.id} className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 overflow-hidden">
                    <img src={avatar.src} alt={avatar.alt} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {t('hero.hero.trusted_by')} <span className="font-semibold text-blue-600 dark:text-blue-400">500+</span> {t('hero.hero.parents')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative">
                <img src={hero} alt={t('hero.imageAlt')} className="w-full h-full object-cover" />
                <div className="hidden md:block absolute left-4 bottom-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('hero.hero.years')}</p>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">25+</p>
                </div>
                <div className="hidden md:block absolute right-4 top-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-400">{t('hero.hero.success')}</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">98%</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
