import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import {
  Baby,
  BookOpen,
  Compass,
  GraduationCap,
  Microscope,
  Leaf
} from 'lucide-react';

const Programs = () => {
  const { t } = useTranslation();

  const programsData = [
    {
      icon: <Baby className="h-10 w-10 text-pink-500" />,
      title: t('programs.programs.early.title'),
      description: t('programs.programs.early.description'),
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: <BookOpen className="h-10 w-10 text-blue-500" />,
      title: t('programs.programs.primary.title'),
      description: t('programs.programs.primary.description'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Compass className="h-10 w-10 text-yellow-500" />,
      title: t('programs.programs.middle.title'),
      description: t('programs.programs.middle.description'),
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-green-500" />,
      title: t('programs.programs.secondary.title'),
      description: t('programs.programs.secondary.description'),
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Microscope className="h-10 w-10 text-indigo-500" />,
      title: t('programs.programs.alpha.title'),
      description: t('programs.programs.alpha.description'),
      color: "from-indigo-500 to-violet-500"
    },
    {
      icon: <Leaf className="h-10 w-10 text-teal-500" />,
      title: t('programs.programs.environment.title'),
      description: t('programs.programs.environment.description'),
      color: "from-teal-500 to-green-500"
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
    <section id="programs" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4"
          >
            {t('programs.programs.tagline')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('programs.programs.heading')} <span className="text-green-600 dark:text-green-400">{t('programs.programs.span')}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t('programs.programs.description')}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programsData.map((program, index) => (
            <motion.div
              key={index}
              variants={item}
              className="h-full"
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
                <CardContent className="p-0">
                  <div className={`h-3 bg-gradient-to-r ${program.color}`}></div>
                  <div className="p-6">
                    <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{program.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{program.description}</p>
                  </div>
                </CardContent>
              </Card>
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
          <p className="inline-block px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-lg text-lg font-medium">
            {t('programs.programs.note')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;