import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Calendar, Presentation, Building } from 'lucide-react';

const ParentEngagement = () => {
  const { t } = useTranslation();

  const engagementData = [
    {
      icon: <Users className="h-8 w-8 text-indigo-500" />,
      title: t('parentEngagement.engagement.cards.meetings.title'),
      description: t('parentEngagement.engagement.cards.meetings.description'),
      buttonText: t('parentEngagement.engagement.cards.meetings.button')
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-500" />,
      title: t('parentEngagement.engagement.cards.workshops.title'),
      description: t('parentEngagement.engagement.cards.workshops.description'),
      buttonText: t('parentEngagement.engagement.cards.workshops.button')
    },
    {
      icon: <Presentation className="h-8 w-8 text-orange-500" />,
      title: t('parentEngagement.engagement.cards.initiatives.title'),
      description: t('parentEngagement.engagement.cards.initiatives.description'),
      buttonText: t('parentEngagement.engagement.cards.initiatives.button')
    },
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      title: t('parentEngagement.engagement.cards.outreach.title'),
      description: t('parentEngagement.engagement.cards.outreach.description'),
      buttonText: t('parentEngagement.engagement.cards.outreach.button')
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {engagestaggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="parent-engagement" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-200 dark:bg-indigo-900/30 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/30 rounded-full opacity-20 blur-3xl"></div>
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
            {t('parentEngagement.engagement.tagline')}
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('parentEngagement.engagement.heading')} <span className="text-indigo-600 dark:text-indigo-400">{t('parentEngagement.engagement.highlight')}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t('parentEngagement.engagement.description')}
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {engagementData.map((engageItem, index) => (
            <motion.div key={index} variants={item}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 overflow-hidden h-full group">
                <CardContent className="p-8">
                  <div className="mb-6 p-3 bg-gray-50 dark:bg-gray-700 inline-block rounded-lg transform group-hover:scale-110 transition-transform duration-300">
                    {engageItem.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{engageItem.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{engageItem.description}</p>
                  <Button className="group-hover:bg-indigo-600 group-hover:text-white border border-indigo-600 dark:border-indigo-400 bg-white text-indigo-600 dark:bg-transparent dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors duration-300">
                    {engageItem.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative"
        >
          <div className="bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-600 dark:to-cyan-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('parentEngagement.engagement.cta.title')}</h3>
              <p className="text-lg opacity-90 mb-8 max-w-3xl">
                {t('parentEngagement.engagement.cta.description')}
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button className="bg-white text-indigo-600 hover:bg-indigo-50 dark:hover:bg-white/90 font-medium px-6 py-3">
                  {t('parentEngagement.engagement.cta.primary')}
                </Button>
                <Button variant="outline" className="border-white text-indigo-600 hover:bg-white/10 font-medium px-6 py-3">
                  {t('parentEngagement.engagement.cta.secondary')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParentEngagement;
