# Mester3D - Shopify Theme

En moderne, kreativ Shopify theme designet til at sælge 3D-printede produkter med dansk tone og dynamisk design.

## 🎨 Features

- **Hero Banner** med animeret gradient og mascot (Mr. 3D)
- **Responsiv produktgrid** med smooth hover-effekter
- **Brand storytelling sektion** med inspirerende indhold
- **Modern footer** med sociale medier links
- **Mobil-optimeret** design
- **Lys/mørk kontrast** med gul (#FFD700), orange (#FF8C00) og sort (#000000)
- **Dansk sprog** overalt

## 📁 Mappestruktur

```
mester3d-theme/
├── config/
│   └── settings_schema.json      # Tema-indstillinger
├── layout/
│   └── theme.liquid              # Hovednayout
├── sections/
│   ├── hero.liquid               # Hero banner
│   ├── featured-products.liquid  # Produktgrid
│   ├── brand-story.liquid        # Brand storytelling
│   └── footer.liquid             # Footer
├── assets/
│   ├── style.css                 # Hovedstyling
│   └── theme.js                  # JavaScript
├── templates/
│   ├── index.json                # Homepage
│   └── product.json              # Produktside
└── README.md                     # Denne fil
```

## 🚀 Installation til Shopify

### Metode 1: GitHub Integration (Anbefalet)

1. **Opret GitHub repository:**
   - Gå til github.com og opret et nyt public repository kaldet `mester3d-theme`
   - Klone det til din computer

2. **Tilføj theme-filerne:**
   ```bash
   cd mester3d-theme
   git add .
   git commit -m "Initial commit: Mester3D theme"
   git push origin main
   ```

3. **Forbind til Shopify:**
   - Gå til din Shopify admin → Settings → Apps and sales channels
   - Find "Shopify CLI" og installer den
   - Kør følgende kommando:
   ```bash
   shopify theme push --path . --live
   ```

### Metode 2: Direkte upload til Shopify

1. Gå til Shopify Admin → Sales channels → Online Store → Themes
2. Klik på "Add theme" → "Upload theme file"
3. Zip hele `mester3d-theme` mappen
4. Upload ZIP-filen

## ⚙️ Konfiguration

### 1. Upload billeder
- **Logo**: Upload dit Mester3D logo i tema-indstillingerne
- **Mr. 3D mascot**: Upload din mascot karakter billede
- **Brand story billede**: Tilføj inspirerende billede til brand-historien

### 2. Tilpas farver
I `config/settings_schema.json` kan du ændre:
- `primary_color` (Gul)
- `secondary_color` (Orange)
- `accent_color` (Sort)

### 3. Rediger tekst
Alle tekster kan redigeres direkte i Shopify Admin ved at gå til:
- **Online Store → Themes → Customize**
- Vælg de forskellige sektioner og rediger tekst

## 📱 Responsivt Design

Tema er fuldt responsive og ser godt ud på:
- ✅ Desktop (1200px+)
- ✅ Tablet (768px - 1199px)
- ✅ Mobil (under 768px)

## 🎯 Sections Oversigt

### Hero Section
- Stor banner med gradient background
- Animeret mascot
- Call-to-action button
- Fuldt tilpasselig

### Featured Products
- Automatisk viser produkter fra "Featured" collection
- Fleksibelt antal produkter
- Smooth hover effekter

### Brand Story
- To-kolonne layout
- Kombinerer tekst og billede
- Badge med custom tekst
- Inspirerende tonalitet

## 🛠️ Tilpasning

### Ændre Farvepalette

I `assets/style.css`:
```css
/* Gul (Primær) */
color: #FFD700;

/* Orange (Sekundær) */
color: #FF8C00;

/* Sort (Accent) */
color: #000000;
```

### Tilføje Social Media Links

I `layout/theme.liquid`, under footer:
```html
<a href="https://instagram.com/mester3d" target="_blank" title="Instagram">📱</a>
<a href="https://facebook.com/mester3d" target="_blank" title="Facebook">f</a>
```

### Tilpasse Typography

I `config/settings_schema.json` findes font-indstillinger hvor du kan vælge custom skrifttyper.

## 📦 Produktkrav

For at tema ser bedst ud anbefales:
- **Produktbilleder**: Min. 500x500px (kvadratisk format anbefales)
- **Produktbeskrivelser**: Kort og inspirerende tone
- **Kategorier**: Giv produkterne relevante tags for filtrering

## 🔧 Vedligeholdelse

### Opdatering af tema
```bash
git add .
git commit -m "Beskrivelse af ændringer"
git push origin main
```

Synkroniser derefter ændringerne til Shopify via Shopify CLI:
```bash
shopify theme push
```

## 📝 LICENSE

Dette tema er designet specifikt for Mester3D. Du er velkommen til at bruge og ændre det til dine formål.

## 💡 Tips

1. **Brug Shopify Theme Editor** for let tilpasning uden kod-ændringer
2. **Upload Mr. 3D billede** for at personalisere hero-sektionen
3. **Tilføj "Featured" collection** til produkter du vil fremhæve
4. **Testa på mobil** før launch
5. **Brug Shopify Analytics** til at spore performance

## ❓ Support

For problemer eller spørgsmål:
1. Tjek Shopify dokumentation: https://shopify.dev/themes
2. Se Liquid dokumentation: https://shopify.dev/api/liquid
3. Kontakt Shopify support gennem admin

---

**Lad det blive skabt! 🖨️✨**
