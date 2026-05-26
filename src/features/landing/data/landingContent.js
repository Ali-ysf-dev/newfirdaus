const landingContent = {
  de: {
    header: {
      primaryNavLabel: 'Primäre Navigation',
      mobileNavLabel: 'Mobile Navigation',
      navItems: [
        { label: 'Geschichte', href: '#story' },
        { label: 'Handwerk', href: '#craft' },
        { label: 'Kollektion', href: '#collection' },
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
          eyebrow: 'Kapitel I - Ursprung',
          title: 'Vom Webstuhl geboren.',
          body: 'Jeder Firdaus-Teppich beginnt als einzelner Faden, von Hand gezogen aus Naturfasern, die für Wärme und Widerstandsfähigkeit gewählt werden.',
        },
        {
          id: 'craft',
          eyebrow: 'Kapitel II - Handwerk',
          title: 'Von geduldigen Händen geknüpft.',
          body: 'Meisterhafte Kunsthandwerker verweben Tausende von Knoten - langsam, bewusst und absichtsvoll - und verwandeln stille Stunden in lebendige Muster.',
        },
        {
          id: 'home',
          eyebrow: 'Kapitel III - Zuhause',
          title: 'Ein Boden, der Geschichten trägt.',
          body: 'Wenn der Teppich schließlich in Ihrem Zuhause ankommt, trägt er Jahrzehnte an Erfahrung in sich - und wartet geduldig darauf, weitere Jahrzehnte voller Erinnerungen zu sammeln.',
        },
      ],
    },
    story: {
      beginning: {
        id: 'story',
        align: 'start',
        eyebrow: 'Der Anfang',
        title: 'Ein Faden, bevor er zur Geschichte wird.',
        body: 'In einer stillen Werkstatt wird der erste Knoten geknüpft. Es gibt keine Eile - nur Geduld, Absicht und einen ruhigen Rhythmus, der über Generationen weitergegeben wird.',
      },
      pattern: {
        align: 'end',
        eyebrow: 'Das Muster',
        title: 'Muster, die ihre Herkunft erinnern.',
        body: 'Jedes Motiv entspringt Orten, Gebeten und Dingen des Alltags. Sie sind keine Dekoration - sie sind leise Botschaften, eingewebt in die Kette.',
      },
      collection: {
        id: 'collection',
        align: 'center',
        eyebrow: 'Der Teppich',
        title: 'Was bleibt, wenn alles andere vergeht.',
        body: 'Möbel wechseln. Wände werden neu gestrichen. Ein großer Teppich bleibt - sammelt Schritte, Licht und Zeit und wird mit jedem Jahr mehr zu sich selbst.',
      },
    },
    viewer: {
      id: 'viewer',
      ariaLabel: 'Interaktive Teppichansicht',
      eyebrow: '3D Ansicht',
      title: 'Erleben Sie jeden Teppich in 3D.',
      body: 'Wechseln Sie zwischen Texturen, Finishes und feinen Details in einer klaren interaktiven Ansicht.',
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
      ariaLabel: 'Details zum Handwerk',
      eyebrow: 'Die Details',
      title: 'Warum sich jeder Teppich anders anfühlt.',
      intro:
        'Ehrliche Materialien, langsames Handwerk, bleibendes Design. Vier leise Prinzipien prägen jedes Stück von Firdaus.',
      items: [
        {
          title: 'Reine Wolle',
          description:
            'Aus Hochlandherden gewonnen und von Hand versponnen - für weiche Haptik unter den Füßen und außergewöhnliche Haltbarkeit.',
        },
        {
          title: 'Natürliche Farbstoffe',
          description:
            'Pigmente aus Wurzeln, Blättern und Mineralien - Farben, die mit der Zeit würdevoll altern.',
        },
        {
          title: 'Handgeknüpft',
          description:
            'Jeder Knoten wird von Hand gesetzt. Hunderttausende Entscheidungen verschmelzen zu einem einzigen Stück.',
        },
        {
          title: 'Für die Dauer gemacht',
          description:
            'Gebaut, um Trends zu überdauern. Ein Firdaus-Teppich ist von Natur aus für Generationen bestimmt.',
        },
      ],
    },
    cta: {
      ariaLabel: 'Die Kollektion entdecken',
      eyebrow: 'Die Kollektion',
      title: 'Finden Sie den Teppich, der Sie findet.',
      body: 'Eine kuratierte Auswahl wartet auf Sie - Stücke, die jedem Raum eine stille Wärme verleihen.',
      primaryLabel: 'Kollektion entdecken',
      primaryHref: 'https://www.firdaus.eu/shop-1',
      secondaryLabel: 'Besichtigung buchen',
      secondaryHref: '#',
      form: {
        action: 'https://seu2.cleverreach.com/f/443937-427918/wcs/',
        title: 'Neuheiten zuerst erhalten',
        description:
          'Erhalten Sie Einblicke in neue Kollektionen und besondere Firdaus-Stücke direkt per E-Mail.',
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
        { label: 'Geschichte', href: '#story' },
        { label: 'Handwerk', href: '#craft' },
        { label: 'Kollektion', href: '#collection' },
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
        { label: 'Story', href: '#story' },
        { label: 'Craft', href: '#craft' },
        { label: 'Collection', href: '#collection' },
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
          eyebrow: 'Chapter I - Origin',
          title: 'Born from the loom.',
          body: 'Every Firdaus carpet begins as a single thread, drawn by hand from natural fibers chosen for warmth and resilience.',
        },
        {
          id: 'craft',
          eyebrow: 'Chapter II - Craft',
          title: 'Woven by patient hands.',
          body: 'Master artisans interlace thousands of knots - slow, deliberate, intentional - turning quiet hours into living patterns.',
        },
        {
          id: 'home',
          eyebrow: 'Chapter III - Home',
          title: 'A floor that holds stories.',
          body: 'When the carpet finally rests in your home, it carries decades of skill - and waits patiently to gather decades of memory.',
        },
      ],
    },
    story: {
      beginning: {
        id: 'story',
        align: 'start',
        eyebrow: 'The Beginning',
        title: 'A thread, before it becomes a story.',
        body: 'In a quiet workshop, the first knot is tied. There is no rush - only patience, intention, and a steady rhythm passed between generations.',
      },
      pattern: {
        align: 'end',
        eyebrow: 'The Pattern',
        title: 'Patterns that remember where they came from.',
        body: 'Each motif is drawn from places, prayers, and everyday objects. They are not decoration - they are quiet messages woven into the warp.',
      },
      collection: {
        id: 'collection',
        align: 'center',
        eyebrow: 'The Carpet',
        title: 'What stays after everything else fades.',
        body: 'Furniture changes. Walls are painted. A great carpet remains - gathering footsteps, light, and time, becoming more itself with every year.',
      },
    },
    viewer: {
      id: 'viewer',
      ariaLabel: 'Interactive carpet viewer',
      eyebrow: '3D Viewer',
      title: 'Experience each carpet in 3D.',
      body: 'Switch between textures, finishes, and fine details in one refined interactive view.',
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
      ariaLabel: 'Craft details',
      eyebrow: 'The Details',
      title: 'Why each carpet feels different.',
      intro:
        'Honest materials, slow craft, lasting design. Four quiet principles guide every Firdaus piece.',
      items: [
        {
          title: 'Pure Wool',
          description:
            'Sourced from highland flocks, hand-spun for softness underfoot and remarkable durability.',
        },
        {
          title: 'Natural Dyes',
          description:
            'Pigments drawn from roots, leaves, and minerals - colors that age gracefully with time.',
        },
        {
          title: 'Hand Knotted',
          description:
            'Every knot tied by hand. Hundreds of thousands of decisions woven into a single piece.',
        },
        {
          title: 'Made to Last',
          description:
            'Built to outlive trends. A Firdaus carpet is heirloom-grade by design.',
        },
      ],
    },
    cta: {
      ariaLabel: 'Discover the collection',
      eyebrow: 'The Collection',
      title: 'Find the carpet that finds you.',
      body: 'A curated selection awaits - pieces that bring quiet warmth to any room they rest in.',
      primaryLabel: 'Explore Collection',
      primaryHref: 'https://www.firdaus.eu/shop-1',
      secondaryLabel: 'Book a Viewing',
      secondaryHref: '#',
      form: {
        action: 'https://seu2.cleverreach.com/f/443937-427918/wcs/',
        title: 'Get new releases first',
        description:
          'Receive updates about new collections and standout Firdaus pieces by email.',
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
        { label: 'Story', href: '#story' },
        { label: 'Craft', href: '#craft' },
        { label: 'Collection', href: '#collection' },
        { label: 'Viewer', href: '#viewer' },
        { label: 'Contact', href: '#contact' },
      ],
      rightsLabel: 'All rights reserved.',
      designedByLabel: 'Designed and developed by',
    },
  },
}

export { landingContent }
