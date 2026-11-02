// Theme 20 Gold Rush - ID gold-rush - Save Name litonsweet-theme - Default Protected Lock - LS-882914 - Final IP - SEPARATE FILE - SAFE - Add 11th theme without touching components
export type Theme = {
  id: string
  name: string
  mood: string
  badge: string
  icon: string
  bg: string
  card: string
  gradient: string[]
  isDefault?: boolean
  isProtected?: boolean
}

export const themes: Theme[] = [
  {
    id: "gold-rush",
    name: "Theme 20 Gold Rush",
    mood: "AURA BLACK + Bento + Living Gradient Gold→Orange→Purple→Cyan + Rainbow Font",
    badge: "FINAL IP - LS-882914 - DEFAULT PROTECTED",
    icon: "👑",
    bg: "#08080A",
    card: "#12121A",
    gradient: ["#FCD535","#FF8A00","#9D4EDD","#22D3EE"],
    isDefault: true,
    isProtected: true
  },
  { id: "exness-dark", name: "Exness Dark", mood: "Exness Original", badge: "Exness", icon: "🌑", bg: "#000000", card: "#111111", gradient: ["#FFD500","#FF8A00"] },
  { id: "aura-blue", name: "Aura Blue", mood: "Ocean", badge: "Blue", icon: "💧", bg: "#060A14", card: "#0E152A", gradient: ["#22D3EE","#3B82F6"] },
  { id: "neon-purple", name: "Neon Purple", mood: "Cyber", badge: "Neon", icon: "⚡", bg: "#0A0614", card: "#1A102A", gradient: ["#9D4EDD","#FF006E"] }
]

export const defaultThemeId = "gold-rush"
export const protectedThemes = ["gold-rush"]
