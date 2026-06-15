export const languages = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
};

export const defaultLang = 'en';

// URL mappings for SEO-friendly translated URLs
export const urlMappings = {
  'about': {
    en: 'about',
    fr: 'a-propos',
    es: 'acerca-de'
  },
  'meetloyd': {
    en: 'meetloyd',
    fr: 'meetloyd',
    es: 'meetloyd'
  },
  'strategic-advisory': {
    en: 'strategic-advisory',
    fr: 'conseil-strategique',
    es: 'asesoria-estrategica'
  },
  'interim-cxo': {
    en: 'interim-cxo',
    fr: 'interim-cxo',
    es: 'cxo-interino'
  },
  'agentic-ai': {
    en: 'agentic-ai',
    fr: 'ia-agentique',
    es: 'ia-agentica'
  },
  'software-development': {
    en: 'software-development',
    fr: 'developpement-logiciel',
    es: 'desarrollo-software'
  }
} as const;

export const ui = {
  en: {
    'site.title': 'Laurent Beaumois',
    'site.tagline': 'Founder of MeetLoyd · Board-level agentic AI advisor to SI & IT services firms',
    'site.description': 'Laurent Beaumois — founder of MeetLoyd, the platform for the agentic era, and board-level advisor helping system integrators and IT services firms win the shift to agentic AI. UN ITU SG17 Agentic AI Security Expert.',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Work with me',
    'nav.meetloyd': 'MeetLoyd',
    'nav.strategic_advisory': 'Board Advisory',
    'nav.interim_cxo': 'Interim/Fractional CXO',
    'nav.agentic_ai': 'Agentic AI / MCP',
    'nav.software_development': 'Software Development',
    'nav.more': 'More services',

    // Footer
    'footer.contact': 'Contact',
    'footer.connect': 'Connect on LinkedIn',
    'footer.rights': 'All rights reserved',

    // Common UI
    'theme.toggle': 'Toggle theme',
    'language.select': 'Select language',
    'readmore': 'Read more',
    'learnmore': 'Learn more',
    'contact': 'Contact',

    // Home page
    'home.hero.title': 'All in on agentic AI',
    'home.hero.subtitle': 'I build MeetLoyd — the platform for the agentic era — and advise the boards of system integrators and IT services firms on turning agentic AI into revenue, governance, and a durable competitive edge.',
    'home.services.title': 'How I work',
    'home.services.subtitle': 'One platform, one board-level advisory practice — both focused on the agentic shift',

    // Home — MeetLoyd feature band
    'home.meetloyd.eyebrow': 'The platform',
    'home.meetloyd.title': 'MeetLoyd — the platform for the agentic era',
    'home.meetloyd.body': 'Enterprise teams of AI agents — manifest-driven, MCP-native, and governed from day one. Compose, govern, and operate agent teams at scale, with the identity, compliance, and data-sovereignty controls regulated buyers actually require.',
    'home.meetloyd.cta': 'Visit meetloyd.com',

    // Home — CTA section
    'home.cta.title': 'Exploring agentic AI for your firm?',
    'home.cta.subtitle': 'Whether you want to deploy agent teams with MeetLoyd or set your agentic strategy at board level, let\'s talk.',
    'home.cta.button': 'Get in touch',

    // Service cards
    'service.meetloyd.title': 'MeetLoyd',
    'service.meetloyd.description': 'The platform for the agentic era — enterprise AI agent teams, MCP-native and governed from day one.',
    'service.strategic_advisory.title': 'Board Advisory for SI & IT Services',
    'service.strategic_advisory.description': 'Helping system integrators and IT services firms set agentic strategy, governance, and a credible offering — at board level.',
    'service.interim_cxo.title': 'Interim/Fractional CXO',
    'service.interim_cxo.description': 'Hands-on C-level leadership to bridge critical growth phases - CEO, CTO, COO, or CRO roles.',
    'service.agentic_ai.title': 'Agentic AI / MCP',
    'service.agentic_ai.description': 'Hands-on delivery: agent strategy, enablement, and bespoke multi-agent and MCP systems.',
    'service.software_development.title': 'Software Development',
    'service.software_development.description': 'Custom software solutions and technical leadership for B2B SaaS and Financial Services firms.',
  },
  fr: {
    'site.title': 'Laurent Beaumois',
    'site.tagline': 'Fondateur de MeetLoyd · Conseil en IA agentique au board des ESN et sociétés de services IT',
    'site.description': 'Laurent Beaumois — fondateur de MeetLoyd, la plateforme de l\'ère agentique, et conseil au niveau board pour aider les ESN et sociétés de services IT à réussir le virage de l\'IA agentique. Expert Sécurité IA Agentique à l\'UIT-ONU (SG17).',

    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Travailler avec moi',
    'nav.meetloyd': 'MeetLoyd',
    'nav.strategic_advisory': 'Conseil au Board',
    'nav.interim_cxo': 'Direction Générale Intérimaire/Fractionnée',
    'nav.agentic_ai': 'IA Agentique / MCP',
    'nav.software_development': 'Développement Logiciel',
    'nav.more': 'Autres services',

    // Footer
    'footer.contact': 'Contact',
    'footer.connect': 'Me contacter sur LinkedIn',
    'footer.rights': 'Tous droits réservés',

    // Common UI
    'theme.toggle': 'Changer le thème',
    'language.select': 'Choisir la langue',
    'readmore': 'Lire la suite',
    'learnmore': 'En savoir plus',
    'contact': 'Contact',

    // Home page
    'home.hero.title': 'Pleinement engagé dans l\'IA agentique',
    'home.hero.subtitle': 'Je développe MeetLoyd — la plateforme de l\'ère agentique — et j\'accompagne les boards des ESN et sociétés de services IT pour transformer l\'IA agentique en revenus, en gouvernance et en avantage concurrentiel durable.',
    'home.services.title': 'Comment je travaille',
    'home.services.subtitle': 'Une plateforme, une pratique de conseil au board — toutes deux centrées sur le virage agentique',

    // Home — MeetLoyd feature band
    'home.meetloyd.eyebrow': 'La plateforme',
    'home.meetloyd.title': 'MeetLoyd — la plateforme de l\'ère agentique',
    'home.meetloyd.body': 'Des équipes d\'agents IA pour l\'entreprise — pilotées par manifeste, nativement MCP et gouvernées dès le premier jour. Composez, gouvernez et opérez des équipes d\'agents à grande échelle, avec les contrôles d\'identité, de conformité et de souveraineté des données qu\'exigent réellement les acheteurs régulés.',
    'home.meetloyd.cta': 'Découvrir meetloyd.com',

    // Home — CTA section
    'home.cta.title': 'Vous explorez l\'IA agentique pour votre entreprise ?',
    'home.cta.subtitle': 'Que vous souhaitiez déployer des équipes d\'agents avec MeetLoyd ou définir votre stratégie agentique au niveau du board, discutons-en.',
    'home.cta.button': 'Me contacter',

    // Service cards
    'service.meetloyd.title': 'MeetLoyd',
    'service.meetloyd.description': 'La plateforme de l\'ère agentique — des équipes d\'agents IA pour l\'entreprise, nativement MCP et gouvernées dès le départ.',
    'service.strategic_advisory.title': 'Conseil au Board pour ESN & Services IT',
    'service.strategic_advisory.description': 'J\'aide les ESN et sociétés de services IT à définir leur stratégie agentique, leur gouvernance et une offre crédible — au niveau du board.',
    'service.interim_cxo.title': 'Direction Générale Intérimaire/Fractionnée',
    'service.interim_cxo.description': 'Leadership opérationnel de niveau C-suite pour combler les phases de croissance critiques - rôles CEO, CTO, COO ou CRO.',
    'service.agentic_ai.title': 'IA Agentique / MCP',
    'service.agentic_ai.description': 'Mise en œuvre concrète : stratégie agentique, enablement et systèmes multi-agents et MCP sur mesure.',
    'service.software_development.title': 'Développement Logiciel',
    'service.software_development.description': 'Solutions logicielles sur mesure et leadership technique pour les entreprises B2B SaaS et services financiers.',
  },
  es: {
    'site.title': 'Laurent Beaumois',
    'site.tagline': 'Fundador de MeetLoyd · Asesor de IA agéntica a nivel de junta para integradores y empresas de servicios IT',
    'site.description': 'Laurent Beaumois — fundador de MeetLoyd, la plataforma de la era agéntica, y asesor a nivel de junta que ayuda a los integradores de sistemas y empresas de servicios IT a ganar el giro hacia la IA agéntica. Experto en Seguridad de IA Agéntica en la UIT-ONU (SG17).',

    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Trabaja conmigo',
    'nav.meetloyd': 'MeetLoyd',
    'nav.strategic_advisory': 'Asesoría de Junta',
    'nav.interim_cxo': 'CXO Interino/Fraccionado',
    'nav.agentic_ai': 'IA Agéntica / MCP',
    'nav.software_development': 'Desarrollo de Software',
    'nav.more': 'Más servicios',

    // Footer
    'footer.contact': 'Contacto',
    'footer.connect': 'Conéctate en LinkedIn',
    'footer.rights': 'Todos los derechos reservados',

    // Common UI
    'theme.toggle': 'Cambiar tema',
    'language.select': 'Seleccionar idioma',
    'readmore': 'Leer más',
    'learnmore': 'Aprender más',
    'contact': 'Contacto',

    // Home page
    'home.hero.title': 'Totalmente enfocado en la IA agéntica',
    'home.hero.subtitle': 'Desarrollo MeetLoyd — la plataforma de la era agéntica — y asesoro a las juntas de integradores de sistemas y empresas de servicios IT para convertir la IA agéntica en ingresos, gobernanza y una ventaja competitiva duradera.',
    'home.services.title': 'Cómo trabajo',
    'home.services.subtitle': 'Una plataforma, una práctica de asesoría a nivel de junta — ambas centradas en el giro agéntico',

    // Home — MeetLoyd feature band
    'home.meetloyd.eyebrow': 'La plataforma',
    'home.meetloyd.title': 'MeetLoyd — la plataforma de la era agéntica',
    'home.meetloyd.body': 'Equipos de agentes de IA para la empresa — definidos por manifiesto, nativos de MCP y gobernados desde el primer día. Componga, gobierne y opere equipos de agentes a escala, con los controles de identidad, cumplimiento y soberanía de datos que los compradores regulados realmente exigen.',
    'home.meetloyd.cta': 'Visitar meetloyd.com',

    // Home — CTA section
    'home.cta.title': '¿Explorando la IA agéntica para su empresa?',
    'home.cta.subtitle': 'Ya sea que quiera desplegar equipos de agentes con MeetLoyd o definir su estrategia agéntica a nivel de junta, hablemos.',
    'home.cta.button': 'Contáctame',

    // Service cards
    'service.meetloyd.title': 'MeetLoyd',
    'service.meetloyd.description': 'La plataforma de la era agéntica — equipos de agentes de IA para la empresa, nativos de MCP y gobernados desde el inicio.',
    'service.strategic_advisory.title': 'Asesoría de Junta para Integradores y Servicios IT',
    'service.strategic_advisory.description': 'Ayudo a integradores de sistemas y empresas de servicios IT a definir su estrategia agéntica, su gobernanza y una oferta creíble — a nivel de junta.',
    'service.interim_cxo.title': 'CXO Interino/Fraccionado',
    'service.interim_cxo.description': 'Liderazgo ejecutivo C-level práctico para fases críticas de crecimiento - roles CEO, CTO, COO o CRO.',
    'service.agentic_ai.title': 'IA Agéntica / MCP',
    'service.agentic_ai.description': 'Ejecución práctica: estrategia agéntica, capacitación y sistemas multiagente y MCP a medida.',
    'service.software_development.title': 'Desarrollo de Software',
    'service.software_development.description': 'Soluciones de software personalizadas y liderazgo técnico para empresas B2B SaaS y servicios financieros.',
  },
} as const;
