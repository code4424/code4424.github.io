import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import {
  Monitor,
  Code,
  BookOpen,
  Users,
  Wifi
} from 'lucide-react';
import techclassrooms from '@/assets/facilities/techclassrooms.jpg';
import alphalabs from '@/assets/facilities/alphalabs.jpg';
import digitallibrary from '@/assets/facilities/digitallibrary.jpg';
import collaborativespaces from '@/assets/facilities/collaborativespaces.jpg';
import connectivity from '@/assets/facilities/connectivity.jpg';

const Facilities = () => {
  const { t } = useTranslation();

  const facilities = [
    {
      icon: <Monitor className="h-8 w-8 text-indigo-500" />,
      title: t('facilities.facilities.techClassrooms.title'),
      description: t('facilities.facilities.techClassrooms.description'),
      image: techclassrooms
    },
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: t('facilities.facilities.alphaLabs.title'),
      description: t('facilities.facilities.alphaLabs.description'),
      image: alphalabs
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      title: t('facilities.facilities.digitalLibrary.title'),
      description: t('facilities.facilities.digitalLibrary.description'),
      image: digitallibrary
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: t('facilities.facilities.collaborativeSpaces.title'),
      description: t('facilities.facilities.collaborativeSpaces.description'),
      image: collaborativespaces
    },
    {
      icon: <Wifi className="h-8 w-8 text-purple-500" />,
      title: t('facilities.facilities.connectivity.title'),
      description: t('facilities.facilities.connectivity.description'),
      image: connectivity
    }
  ];

  return (
    <section id="facilities" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-200 dark:bg-blue-800 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-200 dark:bg-green-800 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm font-medium mb-4"
          >
            {t('facilities.facilities.tagline')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('facilities.facilities.heading')} <span className="text-indigo-600 dark:text-indigo-400">{t('facilities.facilities.span')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t('facilities.facilities.description')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="w-full h-48 overflow-hidden">
                    <img src={facility.image} alt={facility.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 mr-4">
                        {facility.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{facility.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{facility.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
