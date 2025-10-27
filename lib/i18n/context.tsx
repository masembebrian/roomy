"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "lg" | "sw" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.explore": "Explore",
    "nav.experiences": "Experiences",
    "nav.bookings": "My Bookings",
    "nav.favorites": "Favorites",
    "nav.messages": "Messages",
    "nav.profile": "Profile",
    "nav.settings": "Settings",
    "nav.help": "Help",
    "nav.signout": "Sign Out",
    "nav.signin": "Sign In",
    "nav.signup": "Sign Up",
    "nav.language": "Language",

    // Common
    "common.loading": "Loading...",
    "common.search": "Search",
    "common.filter": "Filter",
    "common.sort": "Sort",
    "common.viewAll": "View All",
    "common.bookNow": "Book Now",
    "common.learnMore": "Learn More",
  },
  lg: {
    // Navigation in Luganda
    "nav.explore": "Kebera",
    "nav.experiences": "Ebintu by'okukola",
    "nav.bookings": "Bookings zange",
    "nav.favorites": "Byennyini",
    "nav.messages": "Obubaka",
    "nav.profile": "Profile yange",
    "nav.settings": "Settings",
    "nav.help": "Obuyambi",
    "nav.signout": "Fuluma",
    "nav.signin": "Yingira",
    "nav.signup": "Wandiisa",
    "nav.language": "Olulimi",

    // Common
    "common.loading": "Lulindirira...",
    "common.search": "Noonya",
    "common.filter": "Sengula",
    "common.sort": "Tegeka",
    "common.viewAll": "Laba byonna",
    "common.bookNow": "Booking kati",
    "common.learnMore": "Manya ebisingawo",
  },
  sw: {
    // Navigation in Swahili
    "nav.explore": "Gundua",
    "nav.experiences": "Matukio",
    "nav.bookings": "Mahifadhi yangu",
    "nav.favorites": "Vipendwa",
    "nav.messages": "Ujumbe",
    "nav.profile": "Wasifu",
    "nav.settings": "Mipangilio",
    "nav.help": "Msaada",
    "nav.signout": "Ondoka",
    "nav.signin": "Ingia",
    "nav.signup": "Jisajili",
    "nav.language": "Lugha",

    // Common
    "common.loading": "Inapakia...",
    "common.search": "Tafuta",
    "common.filter": "Chuja",
    "common.sort": "Panga",
    "common.viewAll": "Angalia yote",
    "common.bookNow": "Weka sasa",
    "common.learnMore": "Jifunze zaidi",
  },
  fr: {
    // Navigation in French
    "nav.explore": "Explorer",
    "nav.experiences": "Expériences",
    "nav.bookings": "Mes réservations",
    "nav.favorites": "Favoris",
    "nav.messages": "Messages",
    "nav.profile": "Profil",
    "nav.settings": "Paramètres",
    "nav.help": "Aide",
    "nav.signout": "Se déconnecter",
    "nav.signin": "Se connecter",
    "nav.signup": "S'inscrire",
    "nav.language": "Langue",

    // Common
    "common.loading": "Chargement...",
    "common.search": "Rechercher",
    "common.filter": "Filtrer",
    "common.sort": "Trier",
    "common.viewAll": "Voir tout",
    "common.bookNow": "Réserver maintenant",
    "common.learnMore": "En savoir plus",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Load language from localStorage
    const saved = localStorage.getItem("language") as Language
    if (saved && ["en", "lg", "sw", "fr"].includes(saved)) {
      setLanguageState(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

export const languages = [
  { code: "en" as const, name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "lg" as const, name: "Luganda", nativeName: "Luganda", flag: "🇺🇬" },
  { code: "sw" as const, name: "Swahili", nativeName: "Kiswahili", flag: "🇰🇪" },
  { code: "fr" as const, name: "French", nativeName: "Français", flag: "🇫🇷" },
]
