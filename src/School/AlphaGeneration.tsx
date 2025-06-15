import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Smartphone,
  Users,
  Zap,
  Globe
} from 'lucide-react';
import alphagen from '@/assets/alphagen/alphagen.jpg';
import '@/i18n/i18n'; // Ensure i18n is initialized


const AlphaGeneration = () => {
  const { t } = useTranslation();

  const alphaTraits = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      title: t('alpha.alpha.traits.digital'),
      description: t('alpha.alpha.descriptions.digital')
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: t('alpha.alpha.traits.interactive'),
      description: t('alpha.alpha.descriptions.interactive')
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: t('alpha.alpha.traits.collaborative'),
      description: t('alpha.alpha.descriptions.collaborative')
    },
    {
      icon: <Globe className="h-8 w-8 text-green-500" />,
      title: t('alpha.alpha.traits.environmental'),
      description: t('alpha.alpha.descriptions.environmental')
    }
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="aspect-square md:aspect-auto md:h-96 bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={alphagen}
                  alt={t('alpha.alpha.imageAlt')}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500 dark:bg-blue-600 rounded-xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 dark:bg-yellow-500 rounded-xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <div className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
              {t('alpha.alpha.tagline')}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {t('alpha.alpha.heading')}
              <span className="text-purple-600 dark:text-purple-400"> {t('alpha.alpha.generation')}</span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t('alpha.alpha.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {alphaTraits.map((trait, index) => (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">{trait.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {trait.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{trait.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlphaGeneration;
