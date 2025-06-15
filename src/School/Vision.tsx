import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Target,
  BookOpen,
  Users,
  Code,
  Cpu,
  Globe
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '@/i18n/i18n'; // Ensure i18n is initialized

const Vision = () => {
  const { t } = useTranslation();

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

  const missionItems = [
    {
      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
      title: t('vision.vision.items.nep.title'),
      description: t('vision.vision.items.nep.desc')
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: t('vision.vision.items.alpha.title'),
      description: t('vision.vision.items.alpha.desc')
    },
    {
      icon: <Cpu className="h-6 w-6 text-green-500" />,
      title: t('vision.vision.items.skills.title'),
      description: t('vision.vision.items.skills.desc')
    },
    {
      icon: <Target className="h-6 w-6 text-red-500" />,
      title: t('vision.vision.items.values.title'),
      description: t('vision.vision.items.values.desc')
    },
    {
      icon: <Code className="h-6 w-6 text-indigo-500" />,
      title: t('vision.vision.items.tech.title'),
      description: t('vision.vision.items.tech.desc')
    },
    {
      icon: <Globe className="h-6 w-6 text-teal-500" />,
      title: t('vision.vision.items.personal.title'),
      description: t('vision.vision.items.personal.desc')
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4"
          >
            {t('vision.vision.sectionLabel')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('vision.vision.heading.part1')} <span className="text-blue-600 dark:text-blue-400">{t('vision.vision.heading.part2')}</span>, <span className="text-green-600 dark:text-green-400">{t('vision.vision.heading.part3')}</span>, <span className="text-purple-600 dark:text-purple-400">{t('vision.vision.heading.part4')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t('vision.vision.subheading')}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {missionItems.map((missionItem, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 mb-4">
                    {missionItem.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{missionItem.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{missionItem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
