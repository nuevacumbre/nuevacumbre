import { createI18n } from 'vue-i18n'

const messages = {
  es: {
    nav: {
      home: 'Inicio',
      experience: 'Experiencia',
      skills: 'Habilidades',
      projects: 'Proyectos',
      contact: 'Contacto',
      sound: 'Activar Sonido'
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Christopher Espinoza',
      role1: 'Full Stack / Vue.js Expert',
      role2: 'Ciberseguridad',
      role3: 'Ingeniero Analista Informático',
      summary: 'Ingeniero Analista Informático con más de 19 años de experiencia en gestión de proyectos, programación y desarrollo web. Especialista en Vue.js, React Native, ciberseguridad y buenas prácticas de desarrollo seguro.',
      contactMe: 'Contactar',
      downloadCV: 'Descargar CV'
    },
    // ... resto de traducciones igual
  },
  en: {
    nav: {
      home: 'Home',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      sound: 'Enable Sound'
    },
    hero: {
      greeting: 'Hello, I am',
      name: 'Christopher Espinoza',
      role1: 'Full Stack / Vue.js Expert',
      role2: 'Cybersecurity',
      role3: 'Informatics Analyst Engineer',
      summary: 'Informatics Analyst Engineer with over 19 years of experience in project management, programming, and web development. Specialist in Vue.js, React Native, cybersecurity, and secure development best practices.',
      contactMe: 'Contact me',
      downloadCV: 'Download CV'
    },
    // ... resto de traducciones igual
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages,
  missingWarn: false,
  fallbackWarn: false
})
