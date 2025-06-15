import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, FileText, Calendar, Users, Clock, Link } from 'lucide-react';

const Admissions = () => {
  const { t } = useTranslation();

  const admissionProcess = [
    {
      icon: <FileText className="h-8 w-8 text-green-500" />,
      title: t('admissions.admissions.steps.application.title'),
      description: t('admissions.admissions.steps.application.description')
    },
    {
      icon: <Calendar className="h-8 w-8 text-blue-500" />,
      title: t('admissions.admissions.steps.assessment.title'),
      description: t('admissions.admissions.steps.assessment.description')
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: t('admissions.admissions.steps.interview.title'),
      description: t('admissions.admissions.steps.interview.description')
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-teal-500" />,
      title: t('admissions.admissions.steps.confirmation.title'),
      description: t('admissions.admissions.steps.confirmation.description')
    }
  ];

  const keyDates = [
    {
      month: "August",
      event: t('admissions.admissions.dates.august.event'),
      date: t('admissions.admissions.dates.august.date')
    },
    {
      month: "November",
      event: t('admissions.admissions.dates.november.event'),
      date: t('admissions.admissions.dates.november.date')
    },
    {
      month: "January",
      event: t('admissions.admissions.dates.january.event'),
      date: t('admissions.admissions.dates.january.date')
    },
    {
      month: "March",
      event: t('admissions.admissions.dates.march.event'),
      date: t('admissions.admissions.dates.march.date')
    }
  ];

  return (
    <section id="admissions" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-200 dark:bg-teal-900/30 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/30 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full text-sm font-medium mb-4"
          >
            {t('admissions.admissions.tagline')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="text-teal-600 dark:text-teal-400">{t('admissions.admissions.title')}</span> {t('admissions.admissions.subtitle')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t('admissions.admissions.description')}
          </motion.p>
        </div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          >
            {t('admissions.admissions.processTitle')}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {admissionProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden h-full group">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-700 inline-block rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white">
            {t('admissions.admissions.keyDatesTitle')}
          </h3>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              {keyDates.map((date, index) => (
                <div key={index} className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold">
                    {date.month.substring(0, 3)}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{date.event}</h4>
                  <p className="text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="w-4 h-4 mr-1 inline-block" />
                    {date.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-700 dark:to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('admissions.admissions.cta.title')}</h3>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                {t('admissions.admissions.cta.description')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-white text-teal-600 hover:bg-teal-50 dark:hover:bg-white/90 font-medium px-6 py-3">
                  <a href="#contact">{t('admissions.admissions.cta.apply')}</a>
                </Button>

                <Button variant="outline" className="border-white text-teal-600 hover:bg-white/10 font-medium px-6 py-3">
                  {t('admissions.admissions.cta.brochure')}
                </Button>
              </div>
              <div className="mt-6 inline-block px-4 py-2 bg-white/20 rounded-full text-sm">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {t('admissions.admissions.cta.note')}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;
