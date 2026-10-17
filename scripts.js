// scripts.js - updated translations including tagline
const translations = {
  en: {
    'nav.home': 'HOME',
    'nav.solutions': 'SOLUTIONS',
    'nav.service': 'SERVICE',
    'nav.industries': 'INDUSTRIES',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'tagline': 'Pure, sustainable perfection.',
    'hero.title': 'Premium Water. Exceptional Service.',
    'hero.sub': 'Professional water filtration and dispensing solutions for hospitality and premium environments.',
    'cta.request': 'REQUEST A CONSULTATION',
    'cta.explore': 'EXPLORE OUR SOLUTIONS',
    'difference.title': 'The difference is service',
    'difference.text': 'HYDROPRIMA combines premium equipment from trusted partners with a specialist service network to keep operations running. Fast response and dedicated support — we reply within 24 hours.',
    'solutions.title': 'Solutions designed around your operation',
    'solutions.purchase': 'PURCHASE',
    'solutions.purchase_text': 'Own your equipment. Long-term investment with professional support.',
    'solutions.rental': 'RENTAL',
    'solutions.rental_text': 'Premium equipment with predictable monthly costs.',
    'solutions.bottles': 'BOTTLES',
    'solutions.bottles_text': 'Reusable glass bottles personalised for your brand.',
    'solutions.cta': 'DISCOVER PURCHASE',
    'solutions.cta2': 'DISCOVER RENTAL',
    'solutions.cta3': 'DISCOVER BOTTLES',
    'service.title': 'Service is not an option. It is part of the solution.',
    'service.fast': 'FAST RESPONSE',
    'service.fast_text': 'Every enquiry receives a response within 24 hours.',
    'service.network': 'SPECIALIST NETWORK',
    'service.network_text': 'Access to qualified technical specialists across the United States, Spain and Germany.',
    'service.maintenance': 'MAINTENANCE',
    'service.maintenance_text': 'Preventive and corrective maintenance to protect equipment performance.',
    'about.title': 'Built around expertise. Designed around service.',
    'about.text': 'HYDROPRIMA is an international distributor of professional water filtration and dispensing equipment from selected technology partners such as Blupura. We specialise in premium hospitality and commercial environments, offering installation, parts and expert ongoing support.',
    'contact.title': "Let's talk about your water operation.",
    'contact.sub': 'Tell us about your business and our team will get back to you within 24 hours.',
    'contact.cta': 'REQUEST A CONSULTATION',
    'contact.thanks': 'Thank you. A member of the HYDROPRIMA team will contact you within 24 hours.'
  },
  es: {
    'nav.home': 'INICIO',
    'nav.solutions': 'SOLUCIONES',
    'nav.service': 'SERVICIO',
    'nav.industries': 'INDUSTRIAS',
    'nav.about': 'SOBRE NOSOTROS',
    'nav.contact': 'CONTACTO',
    'tagline': 'Pura. Perfección sostenible.',
    'hero.title': 'Agua premium. Servicio excepcional.',
    'hero.sub': 'Soluciones profesionales de filtración y dispensación de agua para entornos hoteleros y premium.',
    'cta.request': 'SOLICITAR UNA CONSULTA',
    'cta.explore': 'EXPLORAR NUESTRAS SOLUCIONES',
    'difference.title': 'La diferencia es el servicio',
    'difference.text': 'HYDROPRIMA combina equipos premium de socios de confianza con una red de servicio especializada para mantener su operación en marcha. Respuesta rápida y soporte dedicado — respondemos en menos de 24 horas.',
    'solutions.title': 'Soluciones diseñadas alrededor de su operación',
    'solutions.purchase': 'COMPRA',
    'solutions.purchase_text': 'Sea propietario de su equipo. Inversión a largo plazo con soporte profesional.',
    'solutions.rental': 'ALQUILER',
    'solutions.rental_text': 'Equipamiento premium con costes mensuales predecibles.',
    'solutions.bottles': 'BOTELLAS',
    'solutions.bottles_text': 'Botellas de vidrio reutilizables personalizadas para su marca.',
    'solutions.cta': 'DESCUBRIR COMPRA',
    'solutions.cta2': 'DESCUBRIR ALQUILER',
    'solutions.cta3': 'DESCUBRIR BOTELLAS',
    'service.title': 'El servicio no es una opción. Es parte de la solución.',
    'service.fast': 'RESPUESTA RÁPIDA',
    'service.fast_text': 'Cada consulta recibe una respuesta en menos de 24 horas.',
    'service.network': 'RED DE ESPECIALISTAS',
    'service.network_text': 'Acceso a especialistas técnicos cualificados en Estados Unidos, España y Alemania.',
    'service.maintenance': 'MANTENIMIENTO',
    'service.maintenance_text': 'Mantenimiento preventivo y correctivo para proteger el rendimiento del equipo.',
    'about.title': 'Creado alrededor de la experiencia. Diseñado alrededor del servicio.',
    'about.text': 'HYDROPRIMA es un distribuidor internacional de equipos profesionales de filtración y dispensación de agua de socios tecnológicos seleccionados como Blupura. Nos especializamos en entornos hoteleros y comerciales premium, ofreciendo instalación, recambios y soporte experto continuo.',
    'contact.title': 'Hablemos de su operación de agua.',
    'contact.sub': 'Cuéntenos sobre su negocio y nuestro equipo le responderá en menos de 24 horas.',
    'contact.cta': 'SOLICITAR UNA CONSULTA',
    'contact.thanks': 'Gracias. Un miembro del equipo de HYDROPRIMA se pondrá en contacto en menos de 24 horas.'
  },
  de: {
    'nav.home': 'STARTSEITE',
    'nav.solutions': 'LÖSUNGEN',
    'nav.service': 'SERVICE',
    'nav.industries': 'BRANCHEN',
    'nav.about': 'ÜBER UNS',
    'nav.contact': 'KONTAKT',
    'tagline': 'Rein. Nachhaltige Perfektion.',
    'hero.title': 'Premium Wasser. Außergewöhnlicher Service.',
    'hero.sub': 'Professionelle Lösungen zur Wasserfiltration und -ausgabe für Hotellerie und Premium-Umgebungen.',
    'cta.request': 'BERATUNG ANFRAGEN',
    'cta.explore': 'UNSERE LÖSUNGEN',
    'difference.title': 'Der Unterschied ist der Service',
    'difference.text': 'HYDROPRIMA kombiniert premium Geräte von vertrauenswürdigen Partnern mit einem spezialisierten Servicenetz, um den Betrieb am Laufen zu halten. Schnelle Reaktionszeit und dedizierter Support — wir antworten innerhalb von 24 Stunden.',
    'solutions.title': 'Lösungen, die auf Ihren Betrieb abgestimmt sind',
    'solutions.purchase': 'KAUF',
    'solutions.purchase_text': 'Eigentum an Ihrer Ausstattung. Langfristige Investition mit professionellem Support.',
    'solutions.rental': 'MIETE',
    'solutions.rental_text': 'Premium-Ausstattung mit planbaren monatlichen Kosten.',
    'solutions.bottles': 'FLASCHEN',
    'solutions.bottles_text': 'Wiederverwendbare Glasflaschen, individualisierbar für Ihre Marke.',
    'solutions.cta': 'KAUF ENTDECKEN',
    'solutions.cta2': 'MIETE ENTDECKEN',
    'solutions.cta3': 'FLASCHEN ENTDECKEN',
    'service.title': 'Service ist keine Option. Es ist Teil der Lösung.',
    'service.fast': 'SCHNELLE ANTWORT',
    'service.fast_text': 'Jede Anfrage wird innerhalb von 24 Stunden beantwortet.',
    'service.network': 'SPEZIALISTENNETZ',
    'service.network_text': 'Zugang zu qualifizierten technischen Spezialisten in den USA, Spanien und Deutschland.',
    'service.maintenance': 'WARTUNG',
    'service.maintenance_text': 'Präventive und korrektive Wartung zum Schutz der Geräteleistung.',
    'about.title': 'Auf Expertise gebaut. Um Service herum gestaltet.',
    'about.text': 'HYDROPRIMA ist ein internationaler Distributor professioneller Wasserfiltrations- und -dispensierungsausrüstung von ausgewählten Technologiepartnern wie Blupura. Wir spezialisieren uns auf Premium-Hotellerie- und Gewerbeumgebungen und bieten Installation, Ersatzteile und fortlaufenden Experten-Support.',
    'contact.title': 'Sprechen wir über Ihre Wasseranlage.',
    'contact.sub': 'Erzählen Sie uns von Ihrem Unternehmen und unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.',
    'contact.cta': 'BERATUNG ANFRAGEN',
    'contact.thanks': 'Danke. Ein Mitglied des HYDROPRIMA-Teams wird sich innerhalb von 24 Stunden bei Ihnen melden.'
  }
};

let currentLang = localStorage.getItem('hp_lang') || 'en';

document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('year').textContent = new Date().getFullYear();
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>setLang(btn.dataset.lang));
  });
  setLang(currentLang);
});

function setLang(lang){
  currentLang = lang;
  localStorage.setItem('hp_lang', lang);
  document.documentElement.lang = lang;
  // translate elements
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    const text = translations[lang] && translations[lang][key] ? translations[lang][key] : translations['en'][key] || '';
    if(el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea'){
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });
}
