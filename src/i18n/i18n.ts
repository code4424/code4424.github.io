import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import Backend from 'i18next-http-backend';
//import { loginTranslations } from './translations/login.i18n';
import { headerTranslations} from './translations/header.i18n';
import { heroTranslations } from './translations/hero.i18n';
import { visionTranslations } from './translations/vision.i18n';
import { alphaTranslations } from './translations/alpha.i18n';
import { nepTranslations } from './translations/nep.i18n';  
import { facilitiesTranslations } from './translations/facility.i18n';
import { programsTranslations } from './translations/programs.i18n';
import { valuesTranslations } from './translations/values.i18n';
import { alumniTranslations } from './translations/alumni.i18n';
import { admissionsTranslations } from './translations/admissions.i18n';
import { parentEngagementTranslations } from './translations/parentengagement.i18n';
import contactusTranslations from './translations/contactus.i18n';



i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        header: headerTranslations.en,
        hero: heroTranslations.en,
        vision: visionTranslations.en,
        alpha: alphaTranslations.en,
        nep: nepTranslations.en,
        facilities: facilitiesTranslations.en,
        programs: programsTranslations.en,
        values: valuesTranslations.en,
        alumni: alumniTranslations.en,
        admissions: admissionsTranslations.en,
        parentEngagement: parentEngagementTranslations.en,
        contactus: contactusTranslations.en,
      }
    },
    kn: {
      translation: {
        header: headerTranslations.kn,
        hero: heroTranslations.kn,
        vision: visionTranslations.kn,
        alpha: alphaTranslations.kn,
        nep: nepTranslations.kn,
        facilities: facilitiesTranslations.kn,
        programs: programsTranslations.kn,
        values: valuesTranslations.kn,
        alumni: alumniTranslations.kn,
        admissions: admissionsTranslations.kn,
        parentEngagement: parentEngagementTranslations.kn,
        contactus: contactusTranslations.kn,
        
      }
    },
    te: {
      translation: {
        header: headerTranslations.te,
        hero: heroTranslations.te,
        vision: visionTranslations.te,
        alpha: alphaTranslations.te,
        nep: nepTranslations.te,
        facilities: facilitiesTranslations.te,
        programs: programsTranslations.te,
        values: valuesTranslations.te,
        alumni: alumniTranslations.te,
        admissions: admissionsTranslations.te,
        parentEngagement: parentEngagementTranslations.te,
        contactus: contactusTranslations.te,
        
      }
    }
  }
});

export default i18n;