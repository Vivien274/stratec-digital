import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  // Seed Admin User (default login: stephanie@stratec-digital.com / Stratec2026!)
  const passwordHash = await bcrypt.hash("Stratec2026!", 10);
  await prisma.adminUser.upsert({
    where: { email: "stephanie@stratec-digital.com" },
    update: { passwordHash },
    create: {
      email: "stephanie@stratec-digital.com",
      passwordHash,
      name: "Stéphanie Rocq",
    },
  });
  console.log("👤 Admin user created/updated.");

  // Seed Packs
  const packs = [
    {
      slug: "premiers-pas-digitaux",
      title: "Pack Premiers pas digitaux",
      tagline: "Posez vos premières fondations sur le web en toute simplicité.",
      price: "300 €",
      billingPeriod: "tarif fixe",
      popularBadge: true,
      description:
        "Vous maîtrisez votre métier mais le digital vous semble flou ou inadapté ? Ce pack est fait pour vous ! Pas besoin de boutique physique pour avoir une vraie présence en ligne.",
      audience: "Artisans, créateurs et micro-entrepreneurs à domicile",
      sortOrder: 1,
      features: JSON.stringify([
        "Création / Optimisation Google Business Profile (adresse masquée si à domicile)",
        "Mise en place de 2 réseaux sociaux professionnels (Instagram / Facebook)",
        "Création d'un gestionnaire de liens (Linktree / Paage) pour vos flyers & cartes",
        "Kit de survie digitale : lexique + guide 'mes premiers pas sans stress'",
        "1 appel visio de 1h de cadrage",
        "15 jours de support après livraison (WhatsApp ou email)",
      ]),
    },
    {
      slug: "artisan-connecte",
      title: "Pack Artisan 100% connecté",
      tagline: "Votre site web & boutique clé-en-main avec référencement optimisé.",
      price: "Sur-Mesure",
      billingPeriod: "devis personnalisé",
      popularBadge: false,
      description:
        "Pour lancer concrètement votre présence en ligne, vendre vos produits et connecter les bons outils — sans stress ni blabla technique.",
      audience: "Artisans qui veulent un site web vitrine ou e-commerce efficace",
      sortOrder: 2,
      features: JSON.stringify([
        "Création de votre site web ou boutique (WordPress / Next.js / WooCommerce)",
        "Rédaction et mise en ligne de vos 5 premières fiches produits",
        "Connexion aux outils de gestion de commandes simples",
        "Stratégie SEO local & mots-clés de votre secteur",
        "Connexion entre vos réseaux sociaux et votre site",
        "Formation personnalisée + mini-tutos vidéos dédiés",
      ]),
    },
    {
      slug: "coaching-tranquille",
      title: "Pack Coaching tranquille",
      tagline: "Un accompagnement sur 1 mois pour avancer à votre propre rythme.",
      price: "490 €",
      billingPeriod: "par accompagnement",
      popularBadge: false,
      description:
        "Prendre confiance, structurer son offre et débloquer les freins digitaux sans jargon incompréhensible.",
      audience: "Artisans et indépendants souhaitant gagner en autonomie",
      sortOrder: 3,
      features: JSON.stringify([
        "4 sessions de coaching individuel (1h par semaine)",
        "Audit complet de votre présence en ligne actuelle",
        "Plan d'action pas à pas adapté à votre temps disponible",
        "Modèles de publications et fiches pratiques",
        "Assistance directe par messagerie pendant toute la durée du coaching",
      ]),
    },
    {
      slug: "vendre-sur-les-reseaux",
      title: "Pack Vendre sur les réseaux",
      tagline: "Attirez des clients locaux grâce à des réseaux sociaux percutants.",
      price: "350 €",
      billingPeriod: "tarif fixe",
      popularBadge: false,
      description:
        "Pour les artisans à domicile qui veulent se lancer sur les réseaux sociaux sans s'éparpiller, en posant les bonnes bases pour vendre leurs créations.",
      audience: "Créateurs & prestataires souhaitant développer Instagram & Facebook",
      sortOrder: 4,
      features: JSON.stringify([
        "Optimisation de votre profil (Bio percutante, visuels adaptés)",
        "Création d'une identité visuelle simple (modèles Canva réutilisables)",
        "Calendrier éditorial pour 1 mois de publications",
        "Guide des bonnes pratiques de prise de vue smartphone",
        "Conseils pour engager la communauté locale",
      ]),
    },
  ];

  for (const pack of packs) {
    await prisma.pack.upsert({
      where: { slug: pack.slug },
      update: pack,
      create: pack,
    });
  }
  console.log("📦 Packs created/updated.");

  // Seed Free Resources
  const freeResources = [
    {
      slug: "guide-google-my-business-artisan",
      title: "Le Guide Ultime de la Fiche Google My Business pour Artisan",
      category: "Guide PDF",
      description:
        "10 étapes simples pour optimiser votre visibilité locale sur Google Maps et capter des clients autour de chez vous sans dépenser un euro.",
      image: "/images/handmakers.jpg",
      downloadUrl: "https://www.stratec-digital.com/downloads/guide-google-my-business.pdf",
      mailchimpTag: "gmb-artisan-pdf",
      sortOrder: 1,
    },
    {
      slug: "checklist-lancement-site-web",
      title: "Checklist de Lancement de Votre Site Internet",
      category: "Checklist",
      description:
        "Tout ce qu'il faut vérifier avant la mise en ligne : mentions légales, référencement, affichage mobile et formulaire de contact.",
      image: "/images/artfolium.jpg",
      downloadUrl: "https://www.stratec-digital.com/downloads/checklist-site-web.pdf",
      mailchimpTag: "checklist-site-web",
      sortOrder: 2,
    },
    {
      slug: "calendrier-contenu-reseaux-sociaux",
      title: "Calendrier de Contenu Réseaux Sociaux (1 mois d'idées)",
      category: "Modèle Prêt-à-l'emploi",
      description:
        "Des idées de publications prêtes à personnaliser pour montrer votre savoir-faire d'artisan sans vous creuser la tête chaque soir.",
      image: "/images/spoolio/spoolio.webp",
      downloadUrl: "https://www.stratec-digital.com/downloads/calendrier-reseaux-sociaux.pdf",
      mailchimpTag: "calendrier-reseaux",
      sortOrder: 3,
    },
  ];

  for (const resource of freeResources) {
    await prisma.freeResource.upsert({
      where: { slug: resource.slug },
      update: resource,
      create: resource,
    });
  }
  console.log("🎁 Free resources created/updated.");

  // Seed Projects
  const projects = [
    {
      slug: "artfolium",
      title: "Artfolium",
      clientName: "Artfolium Végétal",
      category: "Sur-Mesure",
      year: "2024",
      summary: "Création d'un site sur mesure pour la mise en valeur de tableaux végétaux stabilisés et créations botaniques uniques.",
      challenge: "Présenter des créations artisanales haut de gamme avec une expérience fluide et un design végétal raffiné.",
      solution: "Conception d'une identité en ligne épurée, mettant en avant le savoir-faire artisanal et les détails des œuvres végétales.",
      result: "+40% de demandes de devis et visibilité accrue auprès des professionnels et particuliers.",
      testimonialText: "Stéphanie a su comprendre exactement l'esprit de mes créations végétales et leur donner une véritable vitrine digitale.",
      testimonialAuthor: "Fondatrice d'Artfolium",
      image: "/images/artfolium.jpg",
      gallery: JSON.stringify(["/images/artfolium.jpg"]),
      liveUrl: "https://artfolium.fr",
      featured: true,
      sortOrder: 1,
    },
    {
      slug: "dekalekatam",
      title: "Décalé Katam",
      clientName: "Décalé Katam",
      category: "Vitrine",
      year: "2024",
      summary: "Site vitrine et système de réservation pour un lieu d'expériences uniques et événementielles.",
      challenge: "Offrir un univers immersif et dynamique pour guider les visiteurs vers la réservation d'activités.",
      solution: "Design moderne avec parcours utilisateur clair et mise en avant des prestations uniques.",
      result: "Augmentation des réservations directes et retours clients très enthousiastes sur la lisibilité.",
      testimonialText: "Accompagnement humain au top ! Le site reflète parfaitement l'atmosphère atypique de notre espace.",
      testimonialAuthor: "L'équipe Décalé Katam",
      image: "/images/decalekatam/decalekatam.webp",
      gallery: JSON.stringify(["/images/decalekatam/decalekatam-2.webp", "/images/decalekatam/decalekatam-3.webp"]),
      liveUrl: "https://decalekatam.com",
      featured: true,
      sortOrder: 2,
    },
    {
      slug: "handmakers",
      title: "Handmakers",
      clientName: "Handmakers Collective",
      category: "Vitrine",
      year: "2023",
      summary: "Plateforme de mise en valeur des artisans et créateurs fait-main.",
      challenge: "Valoriser la diversité des métiers d'artisanat dans une interface harmonieuse et chaleureuse.",
      solution: "Mise en page épurée, storytelling fort autour du travail de la main et de l'authenticité.",
      result: "Superbe vitrine pour la communauté des créateurs et simplification de la prise de contact.",
      testimonialText: "Un vrai plaisir d'avoir un outil clair, sans chichis, qui met l'humain et l'artisanat au centre.",
      testimonialAuthor: "Collectif Handmakers",
      image: "/images/handmakers.jpg",
      gallery: JSON.stringify(["/images/handmakers.jpg"]),
      liveUrl: "https://handmakers.fr",
      featured: true,
      sortOrder: 3,
    },
    {
      slug: "linstant-brut",
      title: "L'instant Brut",
      clientName: "L'instant Brut Studio",
      category: "E-commerce",
      year: "2023",
      summary: "Vitrine e-commerce et univers visuel pour créations artisanales brutes et naturelles.",
      challenge: "Transmettre la texture, la noblesse des matériaux et la démarche éthique à travers un écran.",
      solution: "Direction artistique naturelle avec visuels grands formats et parcours de commande intuitif.",
      result: "Développement des ventes nationales et fidélisation des clients amateurs de produits uniques.",
      testimonialText: "Une approche éthique et transparente. Stéphanie prend le temps d'expliquer chaque choix.",
      testimonialAuthor: "Fondateur L'instant Brut",
      image: "/images/linstantbrutmin.jpg",
      gallery: JSON.stringify(["/images/linstantbrutmin.jpg"]),
      liveUrl: "https://linstantbrut.fr",
      featured: true,
      sortOrder: 4,
    },
    {
      slug: "spoolio",
      title: "Spoolio",
      clientName: "Spoolio 3D & Craft",
      category: "Sur-Mesure",
      year: "2024",
      summary: "Plateforme web interactives pour créateurs textiles et enthousiastes de l'impression 3D.",
      challenge: "Allier technique et facilité d'utilisation pour des utilisateurs passionnés.",
      solution: "Interface épurée et très réactive développée pour offrir une navigation instantanée.",
      result: "Adoption rapide par la communauté et excellente satisfaction d'utilisation.",
      testimonialText: "Simple, ultra-rapide et totalement adapté à nos besoins.",
      testimonialAuthor: "L'équipe Spoolio",
      image: "/images/spoolio/spoolio.webp",
      gallery: JSON.stringify(["/images/spoolio/accueil-spoolio.webp", "/images/spoolio/blog-spoolio.webp"]),
      liveUrl: "https://spoolio.fr",
      featured: false,
      sortOrder: 5,
    },
    {
      slug: "studio-macarons",
      title: "Studio Macarons",
      clientName: "Studio Macarons Artisan",
      category: "Vitrine",
      year: "2024",
      summary: "Site vitrine gourmand et carte des douceurs pour pâtissier événementiel.",
      challenge: "Susciter la gourmandise dès les premières secondes tout en permettant la commande de coffrets.",
      solution: "Visuels chaleureux, présentation par coffrets thématiques et formulaire de devis rapide pour mariages et événements.",
      result: "Commandes d'événements multipliées par deux lors de la saison estivale.",
      testimonialText: "Les retours de mes clients sur le site sont élogieux ! Merci Stéphanie pour ce travail formidable.",
      testimonialAuthor: "Artisan Studio Macarons",
      image: "/images/studiomacarons/studiomacarons.webp",
      gallery: JSON.stringify(["/images/studiomacarons/page d'accueil-studiomacarons.webp", "/images/studiomacarons/page boutique studiomacarons.webp"]),
      liveUrl: "https://studiomacarons.fr",
      featured: false,
      sortOrder: 6,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }
  console.log("🎨 Projects created/updated.");

  console.log("✅ Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
