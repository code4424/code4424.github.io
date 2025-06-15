import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Heart,
  Shield,
  BookOpen,
  Users,
  Globe
} from 'lucide-react';
import environmentalproject from '@/assets/values/environmentalproject.jpg';
import communityservice from '@/assets/values/communityservice.jpg';
import studentscollaborating from '@/assets/values/studentscollaborating.jpg';
import characterbuilding from '@/assets/values/characterbuilding.jpg';

const Values = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: t('values.values.respect.title'),
      description: t('values.values.respect.description')
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: t('values.values.integrity.title'),
      description: t('values.values.integrity.description')
    },
    {
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
      title: t('values.values.curiosity.title'),
      description: t('values.values.curiosity.description')
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: t('values.values.collaboration.title'),
      description: t('values.values.collaboration.description')
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-500" />,
      title: t('values.values.awareness.title'),
      description: t('values.values.awareness.description')
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="values" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-medium mb-4">
              {t('values.values.tagline')}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t('values.values.heading1')} <span className="text-red-600 dark:text-red-400">{t('values.values.highlight1')}</span>, {t('values.values.heading2')} <span className="text-blue-600 dark:text-blue-400">{t('values.values.highlight2')}</span>
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {t('values.values.description')}
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={item} className="flex items-start space-x-4">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 shadow-md">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
                <img src={studentscollaborating} alt="Students collaborating" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                <img src={environmentalproject} alt="Environmental project" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg">
                <img src={characterbuilding} alt="Character building activity" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
                <img src={communityservice} alt="Community service" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Values;
