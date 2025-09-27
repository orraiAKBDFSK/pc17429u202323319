// src/i18n/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        toolbar: "Craft Beer International Association",
        languageSelector: "EN | ES",
        craftBreweries: "Craft Breweries",
        visitWebsite: "Visit Website",
        copyright: "Copyright © 2025 Craft Beer International Association, inc. All rights reserved.",
        developedBy: "Developed by Your Name"
    },
    es: {
        toolbar: "Asociación Internacional de Cervezas Artesanales",
        languageSelector: "EN | ES",
        craftBreweries: "Cervecerías Artesanales",
        visitWebsite: "Visitar Sitio Web",
        copyright: "Copyright © 2025 Craft Beer International Association, inc. Todos los derechos reservados.",
        developedBy: "Desarrollado por Tu Nombre"
    }
};

const i18n = createI18n({
    locale: 'en',  // Idioma por defecto
    messages,
});

export default i18n;
