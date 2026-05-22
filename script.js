/* ===================================================
   Amina Bah — PORTFOLIO MARKETING
   SCRIPT v1
   • Bilingue FR / EN  (globe spin + flash corail)
   • Reset scroll au chargement
   • Navbar scroll
   • Hamburger ↔ ✕
   • Scroll-to-top
   • Scroll reveal INFINI (add + remove .visible)
   • Active nav link
   =================================================== */

// ─────────────────────────────────────────────────
//  DICTIONNAIRE  FR / EN
// ─────────────────────────────────────────────────
const i18n = {
    /* ══════════════════════════════════
     FRANÇAIS
  ══════════════════════════════════ */
    fr: {
        /* Navigation */
        "nav.about": "À propos",
        "nav.services": "Services",
        "nav.projects": "Projets",
        "nav.edu": "Formation",
        "nav.contact": "Contact",

        /* Hero */
        "hero.available": "Disponible pour de nouveaux projets",
        "hero.subtitle":
            "Social Media Manager & Growth Hacker — je transforme votre présence digitale en moteur de croissance.",
        "hero.kpi1": "Campagnes gérées",
        "hero.kpi2": "Reach total",
        "hero.kpi3": "ROI moyen",
        "hero.cta": "Voir mes projets",
        "hero.contact": "Me contacter",

        /* À propos */
        "about.lead":
            "Passionnée par l'impact des mots et des images, je conçois des stratégies digitales qui font vraiment bouger les lignes.",
        "about.body":
            "Avec plus de 4 ans d'expérience en agence et en freelance, j'ai accompagné des marques e-commerce, des startups et des PME dans leur conquête des réseaux sociaux. Mon approche mêle créativité, data et storytelling pour créer des communautés engagées et des campagnes à fort retour sur investissement.",
        "about.location": "Localisation",
        "about.phone": "Téléphone",
        "about.languages": "Langues",
        "about.langVal":
            "Français (natif) · Anglais (courant) · Espagnol (notions)",
        "about.interests": "Centres d'intérêt",

        /* Intérêts */
        "int.content": "Création de contenu",
        "int.data": "Data & Analytics",
        "int.trends": "Veille tendances",

        /* Contact localisation */
        "contact.location": "Paris, France",

        /* Services */
        "nav.services": "Services",
        "srv.social.title": "Community Management",
        "srv.social.desc":
            "Animation, modération et développement de vos communautés sur Instagram, TikTok, LinkedIn et YouTube.",
        "srv.ads.title": "Publicité Payante",
        "srv.ads.desc":
            "Création et optimisation de campagnes Meta Ads, Google Ads et TikTok Ads avec suivi précis des KPIs.",
        "srv.content.title": "Stratégie de Contenu",
        "srv.content.desc":
            "Calendrier éditorial, copywriting, scripts vidéo et production visuelle alignés avec votre identité de marque.",
        "srv.growth.title": "Growth Hacking",
        "srv.growth.desc":
            "Techniques d'acquisition rapide, funnels de conversion et automation pour accélérer votre croissance.",
        "srv.influence.title": "Marketing d'Influence",
        "srv.influence.desc":
            "Identification, négociation et suivi de collaborations avec des créateurs de contenu adaptés à votre cible.",
        "srv.analytics.title": "Reporting & Analytics",
        "srv.analytics.desc":
            "Tableaux de bord personnalisés, analyse de performance et recommandations actionnables chaque mois.",

        /* Projets */
        "nav.projects": "Projets",
        "proj.viral.tag": "Campagne Virale",
        "proj.viral.title": "Opération #TrendSetters — Mode Éthique",
        "proj.viral.desc":
            "Campagne multiplateforme pour une marque de mode éthique visant la Gen Z. Création d'un challenge TikTok viral, relayé par 120 micro-influenceurs et amplifié via Meta Ads.",
        "proj.launch.tag": "Lancement de Marque",
        "proj.launch.title": "Lancement digital — FinTech B2B",
        "proj.launch.desc":
            "Stratégie de lancement complet sur LinkedIn et Google Ads pour une startup FinTech, de zéro abonné à une communauté qualifiée en 6 mois.",
        "proj.collab.tag": "Influence",
        "proj.collab.title": "Réseau d'Ambassadeurs — Beauté & Lifestyle",
        "proj.collab.desc":
            "Construction et animation d'un réseau de 32 créateurs pour une marque de cosmétiques naturels, avec suivi de performance en temps réel.",

        /* KPIs projets */
        "pkpi.reach": "Reach",
        "pkpi.engage": "Taux d'engagement",
        "pkpi.conv": "Taux de conversion",
        "pkpi.followers": "Nouveaux abonnés",
        "pkpi.roi": "ROI campagne",
        "pkpi.influencers": "Créateurs actifs",
        "pkpi.impressions": "Impressions",

        /* Formation */
        "nav.edu": "Formation",
        "edu.master.degree": "Master Marketing Digital & Communication",
        "edu.master.school":
            "EFAP — École Française des Attachés de Presse, Paris",
        "edu.bachelor.degree": "Bachelor Communication & Médias Sociaux",
        "edu.bachelor.school": "Institut Supérieur de Gestion, Paris",
        "edu.bootcamp.degree": "Bootcamp Growth Marketing",
        "edu.bootcamp.school": "Le Wagon, Paris",
        "edu.certTitle": "Certifications",
        "cert.meta": "Meta Certified Digital Marketing Associate (2023)",
        "cert.google": "Google Analytics 4 — Certification Officielle (2023)",
        "cert.hubspot": "HubSpot Content Marketing Certification (2022)",
        "cert.tiktok": "TikTok Business Creative Certification (2024)",

        /* Contact */
        "nav.contact": "Contact",
        "contact.tagline":
            "Une marque forte ne se construit pas seule. Vous avez la vision, j'ai la stratégie — créons quelque chose d'inoubliable ensemble.",
        "contact.linkedin": "Voir le profil LinkedIn",
        "contact.github": "Voir les projets GitHub",

        /* Footer */
        "footer.copy": "© 2025 Amina Bah · Tous droits réservés",
    },

    /* ══════════════════════════════════
     ENGLISH
  ══════════════════════════════════ */
    en: {
        /* Navigation */
        "nav.about": "About",
        "nav.services": "Services",
        "nav.projects": "Projects",
        "nav.edu": "Education",
        "nav.contact": "Contact",

        /* Hero */
        "hero.available": "Open to new projects",
        "hero.subtitle":
            "Social Media Manager & Growth Hacker — I turn your digital presence into a growth engine.",
        "hero.kpi1": "Campaigns managed",
        "hero.kpi2": "Total reach",
        "hero.kpi3": "Average ROI",
        "hero.cta": "See my projects",
        "hero.contact": "Get in touch",

        /* About */
        "about.lead":
            "Passionate about the power of words and visuals, I craft digital strategies that genuinely move the needle.",
        "about.body":
            "With over 4 years of experience in agencies and freelance, I've helped e-commerce brands, startups and SMEs grow their social media presence. My approach blends creativity, data and storytelling to build engaged communities and high-ROI campaigns.",
        "about.location": "Location",
        "about.phone": "Phone",
        "about.languages": "Languages",
        "about.langVal": "French (native) · English (fluent) · Spanish (basic)",
        "about.interests": "Interests",

        /* Interests */
        "int.content": "Content creation",
        "int.data": "Data & Analytics",
        "int.trends": "Trend watching",

        /* Contact location */
        "contact.location": "Paris, France",

        /* Services */
        "srv.social.title": "Community Management",
        "srv.social.desc":
            "Engaging, moderating and growing your communities on Instagram, TikTok, LinkedIn and YouTube.",
        "srv.ads.title": "Paid Advertising",
        "srv.ads.desc":
            "Creating and optimising Meta Ads, Google Ads and TikTok Ads campaigns with precise KPI tracking.",
        "srv.content.title": "Content Strategy",
        "srv.content.desc":
            "Editorial calendar, copywriting, video scripts and visual production aligned with your brand identity.",
        "srv.growth.title": "Growth Hacking",
        "srv.growth.desc":
            "Fast acquisition techniques, conversion funnels and automation to accelerate your growth.",
        "srv.influence.title": "Influencer Marketing",
        "srv.influence.desc":
            "Identifying, negotiating and tracking collaborations with content creators suited to your audience.",
        "srv.analytics.title": "Reporting & Analytics",
        "srv.analytics.desc":
            "Custom dashboards, performance analysis and actionable monthly recommendations.",

        /* Projects */
        "proj.viral.tag": "Viral Campaign",
        "proj.viral.title": "Operation #TrendSetters — Ethical Fashion",
        "proj.viral.desc":
            "Multi-platform campaign for an ethical fashion brand targeting Gen Z. Created a viral TikTok challenge relayed by 120 micro-influencers and amplified via Meta Ads.",
        "proj.launch.tag": "Brand Launch",
        "proj.launch.title": "Digital Launch — B2B FinTech",
        "proj.launch.desc":
            "Full launch strategy on LinkedIn and Google Ads for a FinTech startup, from zero followers to a qualified community in 6 months.",
        "proj.collab.tag": "Influencer",
        "proj.collab.title": "Ambassador Network — Beauty & Lifestyle",
        "proj.collab.desc":
            "Built and managed a network of 32 creators for a natural cosmetics brand, with real-time performance tracking.",

        /* Project KPIs */
        "pkpi.reach": "Reach",
        "pkpi.engage": "Engagement rate",
        "pkpi.conv": "Conversion rate",
        "pkpi.followers": "New followers",
        "pkpi.roi": "Campaign ROI",
        "pkpi.influencers": "Active creators",
        "pkpi.impressions": "Impressions",

        /* Education */
        "edu.master.degree": "Master's in Digital Marketing & Communication",
        "edu.master.school": "EFAP — French School of Press Attachés, Paris",
        "edu.bachelor.degree": "Bachelor's in Communication & Social Media",
        "edu.bachelor.school": "Institut Supérieur de Gestion, Paris",
        "edu.bootcamp.degree": "Growth Marketing Bootcamp",
        "edu.bootcamp.school": "Le Wagon, Paris",
        "edu.certTitle": "Certifications",
        "cert.meta": "Meta Certified Digital Marketing Associate (2023)",
        "cert.google": "Google Analytics 4 — Official Certification (2023)",
        "cert.hubspot": "HubSpot Content Marketing Certification (2022)",
        "cert.tiktok": "TikTok Business Creative Certification (2024)",

        /* Contact */
        "contact.tagline":
            "A strong brand isn't built alone. You have the vision, I have the strategy — let's create something unforgettable together.",
        "contact.linkedin": "View LinkedIn profile",
        "contact.github": "View GitHub projects",

        /* Footer */
        "footer.copy": "© 2025 Amina Bah · All rights reserved",
    },
};

// ─────────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────────
let currentLang = "fr";

// ─────────────────────────────────────────────────
//  APPLY TRANSLATIONS
// ─────────────────────────────────────────────────
function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.dataset.i18n;
        if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
    });
    document.documentElement.lang = lang;
    document.getElementById("langLabel").textContent =
        lang === "fr" ? "EN" : "FR";
}

// ─────────────────────────────────────────────────
//  LANG TOGGLE — globe spin + flash corail
// ─────────────────────────────────────────────────
const langBtn = document.getElementById("langBtn");

langBtn.addEventListener("click", () => {
    // 1. Lance la rotation du globe
    langBtn.classList.add("spinning");

    // 2. À mi-rotation : swap + flash
    setTimeout(() => {
        currentLang = currentLang === "fr" ? "en" : "fr";
        applyLang(currentLang);
        langBtn.classList.remove("spinning");
        langBtn.classList.add("switched");
        setTimeout(() => langBtn.classList.remove("switched"), 450);
    }, 285);
});

// ─────────────────────────────────────────────────
//  NAVBAR SCROLL
// ─────────────────────────────────────────────────
const navWrapper = document.querySelector(".nav-wrapper");
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener(
    "scroll",
    () => {
        const y = window.scrollY;
        navWrapper.classList.toggle("scrolled", y > 30);
        scrollTopBtn.classList.toggle("show", y > 400);
    },
    { passive: true },
);

// ─────────────────────────────────────────────────
//  SCROLL-TO-TOP
// ─────────────────────────────────────────────────
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ─────────────────────────────────────────────────
//  HAMBURGER  ↔  ✕  +  MENU MOBILE
// ─────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    });
});

document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("open");
        hamburger.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
    }
});

// ─────────────────────────────────────────────────
//  SCROLL REVEAL — INFINI
//  .visible ajoutée à l'entrée, retirée à la sortie
//  → l'animation se rejoue à chaque passage
// ─────────────────────────────────────────────────
function initReveal() {
    const groups = [
        { sel: ".section-header", cls: "reveal", stagger: 0 },
        { sel: ".about-text", cls: "reveal", stagger: 0 },
        { sel: ".about-aside", cls: "reveal-left", stagger: 0 },
        { sel: ".info-card", cls: "reveal-fade", stagger: 0 },
        { sel: ".service-card", cls: "reveal", stagger: 80 },
        { sel: ".project-card", cls: "reveal", stagger: 100 },
        { sel: ".edu-card", cls: "reveal", stagger: 90 },
        { sel: ".cert-item", cls: "reveal", stagger: 55 },
        { sel: ".contact-card", cls: "reveal", stagger: 75 },
    ];

    groups.forEach(({ sel, cls, stagger }) => {
        document.querySelectorAll(sel).forEach((el, i) => {
            el.classList.add(cls);
            el.dataset.revealDelay = stagger ? `${i * stagger}ms` : "0ms";
            el.style.transitionDelay = el.dataset.revealDelay;
        });
    });

    const io = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    // Entrée → animer avec le délai stagger
                    el.style.transitionDelay = el.dataset.revealDelay || "0ms";
                    el.classList.add("visible");
                } else {
                    // Sortie → remettre à zéro instantanément
                    el.style.transitionDelay = "0ms";
                    el.classList.remove("visible");
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px -24px 0px",
        },
    );

    document
        .querySelectorAll(".reveal, .reveal-left, .reveal-fade")
        .forEach((el) => io.observe(el));
}

// ─────────────────────────────────────────────────
//  ACTIVE NAV LINK
// ─────────────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const sectionIO = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach((a) => {
                    a.style.color =
                        a.getAttribute("href") === `#${id}`
                            ? "var(--coral)"
                            : "";
                });
            }
        });
    },
    { threshold: 0.4 },
);

sections.forEach((s) => sectionIO.observe(s));

// ─────────────────────────────────────────────────
//  SCROLL RESET au chargement complet
//  (renforce le script dans <head>)
// ─────────────────────────────────────────────────
window.addEventListener("load", () => {
    window.scrollTo({ top: 0, behavior: "instant" });
});

// ─────────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────────
applyLang(currentLang);
initReveal();
