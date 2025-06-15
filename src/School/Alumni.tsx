import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import {
  UserPlus,
  Award,
  Network
} from 'lucide-react';

const Alumni = () => {
  const { t } = useTranslation();

  const alumniCategories = [
    {
      icon: <UserPlus className="h-8 w-8 text-blue-500" />,
      title: t('alumni.alumni.categories.mentorship.title'),
      description: t('alumni.alumni.categories.mentorship.description')
    },
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      title: t('alumni.alumni.categories.scholarship.title'),
      description: t('alumni.alumni.categories.scholarship.description')
    },
    {
      icon: <Network className="h-8 w-8 text-purple-500" />,
      title: t('alumni.alumni.categories.networking.title'),
      description: t('alumni.alumni.categories.networking.description')
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer, Google",
      image: "/api/placeholder/100/100",
      quote: t('alumni.alumni.testimonials.priya')
    },
    {
      name: "Arjun Patel",
      role: "Civil Services Officer",
      image: "/api/placeholder/100/100",
      quote: t('alumni.alumni.testimonials.arjun')
    },
    {
      name: "Nisha Reddy",
      role: "Research Scientist",
      image: "/api/placeholder/100/100",
      quote: t('alumni.alumni.testimonials.nisha')
    }
  ];

  return (
    <section id="alumni" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium mb-4"
          >
            {t('alumni.alumni.tagline')}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('alumni.alumni.heading1')} <span className="text-purple-600 dark:text-purple-400">{t('alumni.alumni.highlight')}</span> {t('alumni.alumni.heading2')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t('alumni.alumni.description')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {alumniCategories.map((category, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 hover:translate-y-[-8px]"
            >
              <CardContent className="p-8">
                <div className="mb-5 p-3 bg-gray-100 dark:bg-gray-700 inline-block rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-10 text-gray-900 dark:text-white"
          >
            {t('alumni.alumni.testimonials.title')} <span className="text-blue-600 dark:text-blue-400">{t('alumni.alumni.testimonials.highlight')}</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 relative"
              >
                <div className="flex items-center mb-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="absolute -top-3 -left-3 text-4xl text-purple-300 dark:text-purple-700">"</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{t('alumni.alumni.cta.title')}</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            {t('alumni.alumni.cta.description')}
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg transition-colors duration-300">
            {t('alumni.alumni.cta.button')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Alumni;
