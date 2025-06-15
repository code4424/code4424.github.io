import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Contactus = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5" />, title: t('contactus.contact.address.title'), details: t('contactus.contact.address.details')
    },
    {
      icon: <Phone className="h-5 w-5" />, title: t('contactus.contact.phone.title'), details: <a href="tel:08195224292" className="hover:underline text-blue-600">{t('contactus.contact.phone.details')}</a>
    },
    {
      icon: <Mail className="h-5 w-5" />, title: t('contactus.contact.email.title'), details: <a href="mailto:basaveshwarapublicschool5@gmail.com" className="hover:underline text-blue-600">{t('contactus.contact.email.details')}</a>
    },
    {
      icon: <Globe className="h-5 w-5" />, title: t('contactus.contact.website.title'), details: (
        <a href="https://basaveshwarapublicschool.org.in" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">{t('contactus.contact.website.details')}</a>
      )
    },
    {
      icon: <Clock className="h-5 w-5" />, title: t('contactus.contact.hours.title'), details: t('contactus.contact.hours.details')
    }
  ];

  const socialMedia = [
    { icon: <Facebook className="h-5 w-5" />, name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, name: 'Instagram' },
    { icon: <Linkedin className="h-5 w-5" />, name: 'LinkedIn' },
    { icon: <Youtube className="h-5 w-5" />, name: 'YouTube' }
  ];

  const quickLinks = [
    t('contactus.contact.footer.about'), t('contactus.contact.footer.programs'), t('contactus.contact.footer.admissions'),
    t('contactus.contact.footer.alumni'), t('contactus.contact.footer.facilities'), t('contactus.contact.footer.news')
  ];

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: '' });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:80/school/sendemail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      if (response.ok) {
        showToast(t('contactus.contact.toast.success'), 'success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        showToast(t('contactus.contact.toast.fail'), 'error');
      }
    } catch (error) {
      showToast(t('contactus.contact.toast.error'), 'error');
    }
    setLoading(false);
  };

  return (
    <footer id="contact" className="relative bg-gray-900 text-white pt-16 overflow-hidden">
      {toast.show && (
        <div className={`fixed top-4 right-4 z-50 flex items-center px-4 py-3 rounded-lg shadow-lg ${
          toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
        }`}>
          {toast.type === 'success'
            ? <CheckCircle className="h-5 w-5 mr-2" />
            : <XCircle className="h-5 w-5 mr-2" />
          }
          <p className="text-white">{toast.message}</p>
        </div>
      )}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{t('contactus.contact.form.title')}</h2>
            <p className="text-gray-400 mb-6">{t('contactus.contact.form.subtitle')}</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">{t('contactus.contact.form.name')}</label>
                  <Input id="name" placeholder={t('contactus.contact.form.name_placeholder')} value={formData.name} onChange={handleChange} className="bg-gray-800 border-gray-700 text-white" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">{t('contactus.contact.form.email')}</label>
                  <Input id="email" type="email" placeholder={t('contactus.contact.form.email_placeholder')} value={formData.email} onChange={handleChange} className="bg-gray-800 border-gray-700 text-white" required />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">{t('contactus.contact.form.phone')}</label>
                <Input id="phone" type="tel" placeholder={t('contactus.contact.form.phone_placeholder')} value={formData.phone} onChange={handleChange} className="bg-gray-800 border-gray-700 text-white" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">{t('contactus.contact.form.message')}</label>
                <Textarea id="message" placeholder={t('contactus.contact.form.message_placeholder')} rows={4} value={formData.message} onChange={handleChange} className="bg-gray-800 border-gray-700 text-white" required />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                {loading ? t('contactus.contact.form.sending') : t('contactus.contact.form.submit')}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">{t('contactus.contact.info.title')}</h2>
            <p className="text-gray-400 mb-6">{t('contactus.contact.info.subtitle')}</p>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3 p-2 bg-gray-800 rounded-full">{info.icon}</div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-300">{info.title}</h3>
                    <p className="text-gray-400">{info.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{t('contactus.contact.connect.title')}</h3>
            <div className="flex space-x-3">
              {socialMedia.map((social, index) => (
                <a key={index} href="#" className="p-2 bg-gray-800 hover:bg-blue-600 rounded-full" aria-label={t(`contactus.contact.connect.${social.name.toLowerCase()}`)}>
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full h-64 bg-gray-800 rounded-lg mb-16 overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.980745828524!2d76.6522528!3d14.312551200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb0bd30081be08f%3A0xed0676b4e491bee1!2sShree%20Basaveshwara%20English%20Medium%20Primary%20And%20Higher%20Primary%20School.!5e0!3m2!1sen!2sin!4v1741633100578!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Footer bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 border-t border-gray-800">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{t('contactus.contact.footer.school')}</h3>
            <p className="text-gray-400 mb-6">{t('contactus.contact.footer.description')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{t('contactus.contact.footer.links')}</h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-blue-400">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">{t('contactus.contact.footer.newsletter')}</h3>
            <p className="text-gray-400 mb-4">{t('contactus.contact.footer.subscribe')}</p>
            <div className="flex space-x-2">
              <Input placeholder={t('contactus.contact.footer.email')} className="bg-gray-800 border-gray-700 text-white" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">{t('contactus.contact.footer.subscribe_btn')}</Button>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} {t('contactus.contact.footer.copyright')}</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm">{t('contactus.contact.footer.privacy')}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">{t('contactus.contact.footer.terms')}</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">{t('contactus.contact.footer.cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contactus;
