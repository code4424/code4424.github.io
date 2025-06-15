import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  Layers,
  Lightbulb,
  MonitorSmartphone,
  Code,
  PenTool,
  Trophy
} from 'lucide-react';

const NEPSection = () => {
  const { t } = useTranslation();

  const nepFeatures = [
    {
      icon: <Layers className="h-8 w-8 text-blue-500" />,
      title: t('nep.nep.features.flexible.title'),
      description: t('nep.nep.features.flexible.description')
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: t('nep.nep.features.experiential.title'),
      description: t('nep.nep.features.experiential.description')
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-indigo-500" />,
      title: t('nep.nep.features.tech.title'),
      description: t('nep.nep.features.tech.description')
    },
    {
      icon: <Code className="h-8 w-8 text-green-500" />,
      title: t('nep.nep.features.coding.title'),
      description: t('nep.nep.features.coding.description')
    },
    {
      icon: <PenTool className="h-8 w-8 text-purple-500" />,
      title: t('nep.nep.features.design.title'),
      description: t('nep.nep.features.design.description')
    },
    {
      icon: <Trophy className="h-8 w-8 text-red-500" />,
      title: t('nep.nep.features.gamification.title'),
      description: t('nep.nep.features.gamification.description')
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
    <section className="py-16 md:py-24 bg-blue-50 dark:bg-blue-900/20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4"
          >
            {t('nep.nep.tagline')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('nep.nep.heading')} <span className="text-blue-600 dark:text-blue-400">{t('nep.nep.span')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t('nep.nep.description')}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {nepFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg"></div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg group-hover:translate-y-[-5px] transition-transform duration-300 border border-gray-100 dark:border-gray-700">
                <div className="rounded-full w-14 h-14 flex items-center justify-center bg-gray-100 dark:bg-gray-700 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
            {t('nep.nep.closingNote')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NEPSection;
