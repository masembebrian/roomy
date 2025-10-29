"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "lg" | "sw" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.explore": "Explore",
    "nav.experiences": "Experiences",
    "nav.bookings": "My Bookings",
    "nav.favorites": "Favorites",
    "nav.messages": "Messages",
    "nav.profile": "Profile",
    "nav.settings": "Settings",
    "nav.help": "Help",
    "nav.signin": "Sign In",
    "nav.signup": "Sign Up",
    "nav.signout": "Sign Out",
    "nav.language": "Language",
    "deals.title": "Last Minute Deals",
    "deals.subtitle": "Save up to 30% on verified properties across Uganda. Book now before these deals expire!",
    "deals.filter.all": "All",
    "deals.sort": "Sort By",
    "deals.discount": "OFF",
    "deals.pernight": "per night",
    "deals.available": "Available Now",
    loading: "Loading...",
  },
  lg: {
    "nav.explore": "Lambula",
    "nav.experiences": "Ebintu by'Okukola",
    "nav.bookings": "Ebyankozesebwa Byange",
    "nav.favorites": "Bye Njagala",
    "nav.messages": "Obubaka",
    "nav.profile": "Ebikwata ku Nze",
    "nav.settings": "Enteekateeka",
    "nav.help": "Obuyambi",
    "nav.signin": "Yingira",
    "nav.signup": "Wandiisa",
    "nav.signout": "Fuluma",
    "nav.language": "Olulimi",
    "deals.title": "Emiwendo egy'Enjawulo",
    "deals.subtitle":
      "Tereka okutuuka ku 30% ku mawulire amagezi mu Uganda. Kooka kaakano emiwendo gino nga tennawangula!",
    "deals.filter.all": "Byonna",
    "deals.sort": "Teeka mu Ngeri",
    "deals.discount": "ENKUŊŊAANA",
    "deals.pernight": "buli kiro",
    "deals.available": "Biriwo Kaakano",
    loading: "Kutegeka...",
  },
  sw: {
    "nav.explore": "Gundua",
    "nav.experiences": "Matukio",
    "nav.bookings": "Uhifadhi Wangu",
    "nav.favorites": "Vipendwa",
    "nav.messages": "Ujumbe",
    "nav.profile": "Wasifu",
    "nav.settings": "Mipangilio",
    "nav.help": "Msaada",
    "nav.signin": "Ingia",
    "nav.signup": "Jisajili",
    "nav.signout": "Toka",
    "nav.language": "Lugha",
    "deals.title": "Ofa za Dakika za Mwisho",
    "deals.subtitle": "Okoa hadi 30% kwenye mali zilizothibitishwa kote Uganda. Weka sasa kabla ofa hizi hazijaisha!",
    "deals.filter.all": "Zote",
    "deals.sort": "Panga Kwa",
    "deals.discount": "PUNGUZO",
    "deals.pernight": "kwa usiku",
    "deals.available": "Inapatikana Sasa",
    loading: "Inapakia...",
  },
  fr: {
    "nav.explore": "Explorer",
    "nav.experiences": "Expériences",
    "nav.bookings": "Mes Réservations",
    "nav.favorites": "Favoris",
    "nav.messages": "Messages",
    "nav.profile": "Profil",
    "nav.settings": "Paramètres",
    "nav.help": "Aide",
    "nav.signin": "Se Connecter",
    "nav.signup": "S'inscrire",
    "nav.signout": "Déconnexion",
    "nav.language": "Langue",
    "deals.title": "Offres de Dernière Minute",
    "deals.subtitle":
      "Économisez jusqu'à 30% sur des propriétés vérifiées en Ouganda. Réservez maintenant avant l'expiration!",
    "deals.filter.all": "Tous",
    "deals.sort": "Trier Par",
    "deals.discount": "RÉDUCTION",
    "deals.pernight": "par nuit",
    "deals.available": "Disponible Maintenant",
    loading: "Chargement...",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "lg", "sw", "fr"].includes(saved)) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
