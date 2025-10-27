export type Language = "en" | "lg" | "sw" | "fr"

export const languages = [
  { code: "en" as Language, name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "lg" as Language, name: "Luganda", nativeName: "Luganda", flag: "🇺🇬" },
  { code: "sw" as Language, name: "Swahili", nativeName: "Kiswahili", flag: "🇹🇿" },
  { code: "fr" as Language, name: "French", nativeName: "Français", flag: "🇫🇷" },
]

export const translations = {
  en: {
    // Navigation
    explore: "Explore",
    experiences: "Experiences",
    hosting: "Hosting",
    support: "Support",

    // Header
    searchDestinations: "Search destinations...",
    language: "Language",
    notifications: "Notifications",
    profile: "Profile",
    myBookings: "My Bookings",
    favorites: "Favorites",
    settings: "Settings",
    signIn: "Sign In",
    signUp: "Sign Up",
    logOut: "Log Out",

    // Hosting
    listYourProperty: "List Your Property",
    listProperty: "List Property",
    listPropertyDesc: "Start earning by hosting guests",
    hostDashboard: "Host Dashboard",
    manageListings: "Manage your listings and bookings",
    becomeHost: "Become a Host",
    becomeHostDesc: "Learn how to get started",
    hostProtection: "Host Protection",
    hostProtectionDesc: "Coverage for your property",

    // Support
    helpCenter: "Help Center",
    helpCenterDesc: "Find answers to common questions",
    safetyInfo: "Safety Information",
    safetyInfoDesc: "Stay safe while traveling",
    contactUs: "Contact Us",
    contactUsDesc: "Get in touch with our team",

    // Home Page
    welcomeTitle: "Find Your Perfect Stay in Uganda",
    welcomeSubtitle: "Discover unique apartments, homes, and experiences across the Pearl of Africa",
    searchPlaceholder: "Where are you going?",
    checkIn: "Check In",
    checkOut: "Check Out",
    guests: "Guests",
    search: "Search",

    // Last Minute Deals
    lastMinuteDeals: "Last Minute Deals",
    lastMinuteDealsDesc: "Book now and save big on these incredible properties. Limited time offers!",
    expiresIn: "Expires in",
    save: "Save",
    bookNow: "Book Now",
    perNight: "per night",
    filterByLocation: "Filter by Location",
    allLocations: "All Locations",
    sortBy: "Sort By",
    highestDiscount: "Highest Discount",
    lowestPrice: "Lowest Price",
    expiringFirst: "Expiring First",
  },

  lg: {
    // Navigation
    explore: "Laba",
    experiences: "Ebintu by'Okukola",
    hosting: "Okutegeka",
    support: "Obuyambi",

    // Header
    searchDestinations: "Noonya ebifo...",
    language: "Olulimi",
    notifications: "Obubaka",
    profile: "Ebikukwata",
    myBookings: "Eby'Okutegeka Byange",
    favorites: "Bye Njagala",
    settings: "Enteekateeka",
    signIn: "Yingira",
    signUp: "Wandiika",
    logOut: "Fuluma",

    // Hosting
    listYourProperty: "Tegeka Amaka Go",
    listProperty: "Tegeka",
    listPropertyDesc: "Tandika okufuna ssente ng'otegeka abagenyi",
    hostDashboard: "Ebifo Byange",
    manageListings: "Ddukanya ebitegekeddwa byange",
    becomeHost: "Fuuka Omutegekera",
    becomeHostDesc: "Yiga engeri y'okutandikira",
    hostProtection: "Okukuuma Omutegekera",
    hostProtectionDesc: "Okukuuma amaka go",

    // Support
    helpCenter: "Ekifo ky'Obuyambi",
    helpCenterDesc: "Zuula eby'okuddamu ebibuuzo",
    safetyInfo: "Obukuumi",
    safetyInfoDesc: "Beera bulamu ng'otambula",
    contactUs: "Tutukirire",
    contactUsDesc: "Yogera ne ttiimu yaffe",

    // Home Page
    welcomeTitle: "Zuula Ekifo Ekituufu mu Uganda",
    welcomeSubtitle: "Laba amaka amangi, n'ebintu by'okukola mu Pearl of Africa",
    searchPlaceholder: "Ogenda wa?",
    checkIn: "Okuyingira",
    checkOut: "Okufuluma",
    guests: "Abagenyi",
    search: "Noonya",

    // Last Minute Deals
    lastMinuteDeals: "Emiwendo Egy'Amangu",
    lastMinuteDealsDesc: "Tegeka kati otereke ssente ku bintu bino ebyenjawulo!",
    expiresIn: "Biweddewo mu",
    save: "Tereka",
    bookNow: "Tegeka Kati",
    perNight: "buli kiro",
    filterByLocation: "Londa ng'Ekifo",
    allLocations: "Ebifo Byonna",
    sortBy: "Teeka mu Nteekateeka",
    highestDiscount: "Omuwendo Omunene",
    lowestPrice: "Omuwendo Omutono",
    expiringFirst: "Ebiweddewo Mangu",
  },

  sw: {
    // Navigation
    explore: "Gundua",
    experiences: "Uzoefu",
    hosting: "Kupangisha",
    support: "Msaada",

    // Header
    searchDestinations: "Tafuta maeneo...",
    language: "Lugha",
    notifications: "Arifa",
    profile: "Wasifu",
    myBookings: "Hifadhi Zangu",
    favorites: "Vipendwa",
    settings: "Mipangilio",
    signIn: "Ingia",
    signUp: "Jisajili",
    logOut: "Ondoka",

    // Hosting
    listYourProperty: "Orodhesha Mali Yako",
    listProperty: "Orodhesha",
    listPropertyDesc: "Anza kupata pesa kwa kupangisha wageni",
    hostDashboard: "Dashibodi ya Mpangishi",
    manageListings: "Simamia orodha na hifadhi zako",
    becomeHost: "Kuwa Mpangishi",
    becomeHostDesc: "Jifunze jinsi ya kuanza",
    hostProtection: "Ulinzi wa Mpangishi",
    hostProtectionDesc: "Ulinzi wa mali yako",

    // Support
    helpCenter: "Kituo cha Msaada",
    helpCenterDesc: "Pata majibu ya maswali ya kawaida",
    safetyInfo: "Habari za Usalama",
    safetyInfoDesc: "Kaa salama unapofanya safari",
    contactUs: "Wasiliana Nasi",
    contactUsDesc: "Pata mawasiliano na timu yetu",

    // Home Page
    welcomeTitle: "Pata Makazi Yako Bora Nchini Uganda",
    welcomeSubtitle: "Gundua vyumba, nyumba, na uzoefu wa kipekee katika Lulu ya Afrika",
    searchPlaceholder: "Unaenda wapi?",
    checkIn: "Kuingia",
    checkOut: "Kutoka",
    guests: "Wageni",
    search: "Tafuta",

    // Last Minute Deals
    lastMinuteDeals: "Ofa za Dakika za Mwisho",
    lastMinuteDealsDesc: "Hifadhi sasa na uokoe pesa nyingi kwenye mali hizi za ajabu!",
    expiresIn: "Inaisha ndani ya",
    save: "Okoa",
    bookNow: "Hifadhi Sasa",
    perNight: "kwa usiku",
    filterByLocation: "Chuja kwa Eneo",
    allLocations: "Maeneo Yote",
    sortBy: "Panga kwa",
    highestDiscount: "Punguzo Kubwa",
    lowestPrice: "Bei ya Chini",
    expiringFirst: "Inaisha Kwanza",
  },

  fr: {
    // Navigation
    explore: "Explorer",
    experiences: "Expériences",
    hosting: "Hébergement",
    support: "Support",

    // Header
    searchDestinations: "Rechercher des destinations...",
    language: "Langue",
    notifications: "Notifications",
    profile: "Profil",
    myBookings: "Mes Réservations",
    favorites: "Favoris",
    settings: "Paramètres",
    signIn: "Se connecter",
    signUp: "S'inscrire",
    logOut: "Se déconnecter",

    // Hosting
    listYourProperty: "Listez Votre Propriété",
    listProperty: "Lister",
    listPropertyDesc: "Commencez à gagner en hébergeant des invités",
    hostDashboard: "Tableau de Bord Hôte",
    manageListings: "Gérez vos annonces et réservations",
    becomeHost: "Devenir Hôte",
    becomeHostDesc: "Apprenez comment commencer",
    hostProtection: "Protection Hôte",
    hostProtectionDesc: "Couverture pour votre propriété",

    // Support
    helpCenter: "Centre d'Aide",
    helpCenterDesc: "Trouvez des réponses aux questions courantes",
    safetyInfo: "Informations de Sécurité",
    safetyInfoDesc: "Restez en sécurité en voyageant",
    contactUs: "Nous Contacter",
    contactUsDesc: "Contactez notre équipe",

    // Home Page
    welcomeTitle: "Trouvez Votre Séjour Parfait en Ouganda",
    welcomeSubtitle: "Découvrez des appartements, maisons et expériences uniques à travers la Perle de l'Afrique",
    searchPlaceholder: "Où allez-vous?",
    checkIn: "Arrivée",
    checkOut: "Départ",
    guests: "Invités",
    search: "Rechercher",

    // Last Minute Deals
    lastMinuteDeals: "Offres de Dernière Minute",
    lastMinuteDealsDesc: "Réservez maintenant et économisez sur ces propriétés incroyables!",
    expiresIn: "Expire dans",
    save: "Économisez",
    bookNow: "Réserver Maintenant",
    perNight: "par nuit",
    filterByLocation: "Filtrer par Lieu",
    allLocations: "Tous les Lieux",
    sortBy: "Trier par",
    highestDiscount: "Réduction la Plus Élevée",
    lowestPrice: "Prix le Plus Bas",
    expiringFirst: "Expire en Premier",
  },
}
