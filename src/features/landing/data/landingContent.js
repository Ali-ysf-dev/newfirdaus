const landingContent = {
  de: {
    header: {
      primaryNavLabel: 'Primäre Navigation',
      mobileNavLabel: 'Mobile Navigation',
      navItems: [
        { label: 'Vision', href: '#story' },
        { label: 'Technologie', href: '#craft' },
        { label: 'Gebetsteppich', href: '#collection' },
        { label: 'Viewer', href: '#viewer' },
      ],
      contactLabel: 'Kontakt',
      ctaLabel: 'Entdecken',
      openMenuLabel: 'Menü öffnen',
      closeMenuLabel: 'Menü schließen',
      toggleMenuLabel: 'Menü umschalten',
      languageToggleLabel: 'Sprache wechseln',
      languageOptions: {
        de: 'DE',
        en: 'EN',
      },
    },
    hero: {
      ariaLabel: 'Teppichgeschichte',
      loadingLabel: 'Der Webstuhl wird vorbereitet',
      scrollCueLabel: 'Zum Beginn scrollen',
      liveLoadedLabel: 'Die Teppichgeschichte ist geladen.',
      liveMissingLabel:
        'Die Bildsequenz ist noch nicht verfügbar; ein Platzhalter wird angezeigt.',
      getLiveLoadingLabel: (progress) =>
        `Die Teppichgeschichte wird geladen, ${progress} Prozent.`,
      chapters: [
        {
          id: 'origin',
          eyebrow: 'Kapitel I - Vision',
          title: 'Gebet, neu gedacht.',
          body: 'Von Europa aus gestaltet Firdaus das Gebetserlebnis für Muslime weltweit neu und verbindet überlieferte Rituale mit moderner Technologie.',
        },
        {
          id: 'craft',
          eyebrow: 'Kapitel II - Komfort',
          title: 'Komfort in jeder Bewegung.',
          body: 'Hochdichter Schaum und Gel-Einsätze entlasten Knie, Rücken und Gelenke, damit Konzentration und Ruhe im Mittelpunkt bleiben.',
        },
        {
          id: 'home',
          eyebrow: 'Kapitel III - Technologie',
          title: 'Ein Gebetsteppich, der mitdenkt.',
          body: 'Mit smarter Begleitung, Dua-Audio, digitalem Zähler und persönlichen Hinweisen wird jedes Gebet fokussierter und bewusster.',
        },
      ],
    },
    story: {
      beginning: {
        id: 'story',
        align: 'start',
        eyebrow: 'Die Vision',
        title: 'Tradition im Einklang mit moderner Technologie.',
        body: 'Firdaus entwickelt in Europa Lösungen, die das Gebet für die muslimische Gemeinschaft von heute komfortabler, bewusster und stärker mit dem Alltag verbunden machen.',
      },
      pattern: {
        align: 'end',
        eyebrow: 'Der Komfort',
        title: 'Unterstützung, die Fokus schützt.',
        body: 'Fortschrittliche Materialien wie High-Density-Schaum und Gel-Einsätze sorgen für spürbare Entlastung und mehr Stabilität in jeder Gebetsposition.',
        imageAlt: 'Gefalteter Firdaus Gebetsteppich',
      },
      collection: {
        id: 'collection',
        align: 'center',
        eyebrow: 'Die Technologie',
        title: 'Spirituelle Praxis, intelligent begleitet.',
        body: 'Mit App-Anbindung, Dua-Wiedergabe, digitalem Gebetszähler, Bewegungsübersicht und persönlichen Hinweisen begleitet Firdaus jede Gebetseinheit mit mehr Klarheit.',
      },
    },
    viewer: {
      id: 'viewer',
      ariaLabel: 'Interaktive Teppichansicht',
      eyebrow: '3D Ansicht',
      title: 'Entdecken Sie Komfort und Technologie in 3D.',
      body: 'Bewegen Sie sich rund um den Gebetsteppich, wechseln Sie zwischen Oberflächen und betrachten Sie Display und Materialdetails aus jeder Perspektive.',
      resetLabel: 'Ansicht zurücksetzen',
      loadingLabel: '3D Ansicht wird geladen',
      loadingBody: 'Der Viewer und das gewählte Modell werden nur bei Bedarf nachgeladen.',
      idleLabel: 'Viewer bereit bei Sichtkontakt',
      idleBody: 'Sobald dieser Bereich in den sichtbaren Bereich kommt, wird die 3D Ansicht eingeblendet.',
      options: [
        { id: 'sand', label: 'Sand Weave' },
        { id: 'amber', label: 'Amber Bloom' },
        { id: 'onyx', label: 'Onyx Night' },
      ],
    },
    showcase: {
      id: 'craft',
      ariaLabel: 'Technologiedetails',
      eyebrow: 'Die Details',
      title: 'Was Firdaus besonders macht.',
      intro:
        'Von fortschrittlichem Komfort bis zu smarter Begleitung ist jedes Detail auf ein ruhigeres und bewussteres Gebet ausgerichtet.',
      items: [
        {
          title: 'High-Density-Schaum',
          description:
            'Eine stabile, druckentlastende Basis, die den Körper in längeren Gebeten spürbar unterstützt.',
        },
        {
          title: 'Gel-Einsätze',
          description:
            'Zusätzliche Dämpfung dort, wo Komfort am meisten zählt - für Knie, Gelenke und einen ruhigeren Stand.',
        },
        {
          title: 'Smarte Gebetsfunktionen',
          description:
            'Digitale Gebetszählung und intelligente Begleitung helfen dabei, Rituale klarer und konsistenter im Blick zu behalten.',
        },
        {
          title: 'Companion App',
          description:
            'Hören Sie Dua, verbinden Sie Ihr Telefon und nutzen Sie Dashboard- und Hinweisfunktionen für eine persönlichere Gebetspraxis.',
        },
      ],
    },
    cta: {
      ariaLabel: 'Die Kollektion entdecken',
      eyebrow: 'Firdaus',
      title: 'Komfort und Fokus für jedes Gebet.',
      body: 'Entdecken Sie Gebetsteppiche, die innovative Materialien, smarte Funktionen und spirituelle Achtsamkeit in einem Erlebnis vereinen.',
      primaryLabel: 'Kollektion entdecken',
      primaryHref: 'https://www.firdaus.eu/shop-1',
      secondaryLabel: 'Mehr erfahren',
      secondaryHref: '#',
      form: {
        action: 'https://seu2.cleverreach.com/f/443937-427918/wcs/',
        title: 'Mit Firdaus verbunden bleiben',
        description:
          'Erhalten Sie Updates zu neuen Gebetsteppichen, App-Funktionen und Produktneuheiten direkt per E-Mail.',
        emailLabel: 'E-Mail*',
        emailPlaceholder: 'name@example.com',
        submitLabel: 'Abonnieren',
        requiredError: 'Bitte geben Sie Ihre E-Mail-Adresse ein.',
        invalidError: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.',
      },
    },
    footer: {
      navLabel: 'Fußnavigation',
      navItems: [
        { label: 'Vision', href: '#story' },
        { label: 'Technologie', href: '#craft' },
        { label: 'Gebetsteppich', href: '#collection' },
        { label: 'Viewer', href: '#viewer' },
        { label: 'Kontakt', href: '#contact' },
      ],
      rightsLabel: 'Alle Rechte vorbehalten.',
      designedByLabel: 'Entworfen und entwickelt von',
    },
  },
  en: {
    header: {
      primaryNavLabel: 'Primary navigation',
      mobileNavLabel: 'Mobile navigation',
      navItems: [
        { label: 'Vision', href: '#story' },
        { label: 'Technology', href: '#craft' },
        { label: 'Prayer Rug', href: '#collection' },
        { label: 'Viewer', href: '#viewer' },
      ],
      contactLabel: 'Contact',
      ctaLabel: 'Discover',
      openMenuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
      toggleMenuLabel: 'Toggle menu',
      languageToggleLabel: 'Switch language',
      languageOptions: {
        de: 'DE',
        en: 'EN',
      },
    },
    hero: {
      ariaLabel: 'Carpet story hero',
      loadingLabel: 'Preparing the loom',
      scrollCueLabel: 'Scroll to begin',
      liveLoadedLabel: 'Carpet story sequence loaded.',
      liveMissingLabel:
        'Image sequence not yet available; showing placeholder.',
      getLiveLoadingLabel: (progress) =>
        `Loading carpet story, ${progress} percent.`,
      chapters: [
        {
          id: 'origin',
          eyebrow: 'Chapter I - Vision',
          title: 'Prayer, reimagined.',
          body: 'Based in Europe, Firdaus is transforming the prayer experience for Muslims across the globe by bringing tradition and modern technology into harmony.',
        },
        {
          id: 'craft',
          eyebrow: 'Chapter II - Comfort',
          title: 'Comfort in every movement.',
          body: 'High-density foam and gel inserts provide greater support for knees, joints, and posture so focus can stay on prayer.',
        },
        {
          id: 'home',
          eyebrow: 'Chapter III - Technology',
          title: 'A prayer rug that supports more.',
          body: 'With smart guidance, dua audio, digital counting, and personal insights, Firdaus helps make every prayer more intentional.',
        },
      ],
    },
    story: {
      beginning: {
        id: 'story',
        align: 'start',
        eyebrow: 'The Vision',
        title: 'Tradition aligned with modern technology.',
        body: 'Firdaus creates prayer solutions in Europe for today’s Muslim community, combining spiritual tradition with comfort and intelligent functionality.',
      },
      pattern: {
        align: 'end',
        eyebrow: 'The Comfort',
        title: 'Support designed for deeper focus.',
        body: 'Advanced materials such as high-density foam and gel inserts help reduce pressure and create a more comfortable prayer experience.',
        imageAlt: 'Folded Firdaus prayer rug',
      },
      collection: {
        id: 'collection',
        align: 'center',
        eyebrow: 'The Technology',
        title: 'A prayer rug shaped for modern devotion.',
        body: 'From digital prayer counting to posture insights, dua playback, and personalized hints, Firdaus extends prayer support beyond the surface.',
      },
    },
    viewer: {
      id: 'viewer',
      ariaLabel: 'Interactive carpet viewer',
      eyebrow: '3D Viewer',
      title: 'Explore comfort and technology in 3D.',
      body: 'Move around the prayer rug, switch between finishes, and inspect the display and material details from every angle.',
      resetLabel: 'Reset view',
      loadingLabel: 'Loading 3D viewer',
      loadingBody: 'The viewer and the selected model are fetched only when needed.',
      idleLabel: 'Viewer activates on view',
      idleBody: 'As soon as this section enters the viewport, the 3D viewer mounts here.',
      options: [
        { id: 'sand', label: 'Sand Weave' },
        { id: 'amber', label: 'Amber Bloom' },
        { id: 'onyx', label: 'Onyx Night' },
      ],
    },
    showcase: {
      id: 'craft',
      ariaLabel: 'Technology details',
      eyebrow: 'The Details',
      title: 'What sets Firdaus apart.',
      intro:
        'Every feature is designed to bring greater comfort, clarity, and connection into the prayer experience.',
      items: [
        {
          title: 'High-Density Foam',
          description:
            'A supportive core designed to reduce pressure and improve comfort across longer prayer sessions.',
        },
        {
          title: 'Gel Inserts',
          description:
            'Extra cushioning where the body needs it most, helping support knees, joints, and stability.',
        },
        {
          title: 'Smart Prayer Features',
          description:
            'Digital prayer counting and smart support tools help users stay more present and consistent in worship.',
        },
        {
          title: 'Companion App',
          description:
            'Listen to dua, connect your phone, and access posture insights, dashboards, and personalized guidance.',
        },
      ],
    },
    cta: {
      ariaLabel: 'Discover the collection',
      eyebrow: 'Firdaus',
      title: 'Comfort and focus for every prayer.',
      body: 'Discover prayer rugs that combine advanced materials, smart features, and spiritual intention for modern Muslim life.',
      primaryLabel: 'Explore Collection',
      primaryHref: 'https://www.firdaus.eu/shop-1',
      secondaryLabel: 'Learn More',
      secondaryHref: '#',
      form: {
        action: 'https://seu2.cleverreach.com/f/443937-427918/wcs/',
        title: 'Stay close to Firdaus',
        description:
          'Receive updates about new prayer rugs, app features, and upcoming Firdaus releases by email.',
        emailLabel: 'Email*',
        emailPlaceholder: 'name@example.com',
        submitLabel: 'Subscribe',
        requiredError: 'Please enter your email address.',
        invalidError: 'Please enter a valid email address.',
      },
    },
    footer: {
      navLabel: 'Footer navigation',
      navItems: [
        { label: 'Vision', href: '#story' },
        { label: 'Technology', href: '#craft' },
        { label: 'Prayer Rug', href: '#collection' },
        { label: 'Viewer', href: '#viewer' },
        { label: 'Contact', href: '#contact' },
      ],
      rightsLabel: 'All rights reserved.',
      designedByLabel: 'Designed and developed by',
    },
  },
}

export { landingContent }
