const T = {
  fr: {
    nav_skills:'Compétences', nav_projects:'Projets', nav_exp:'Expérience',
    nav_edu:'Formation', nav_certif:'Certifications', nav_langues:'Langues',
    nav_interets:'Intérêts', nav_contact:'Me contacter',

    hero_tag:"Ingénieur d'études et de développement", hero_status:'Disponible',
    hero_subtitle:"Ingénieur logiciel diplômé de l'ENSA Tanger, spécialisé en développement full-stack et microservices. Passionné par l'innovation, je conçois des solutions performantes et évolutives adaptées aux besoins métiers.",
    hero_btn1:'Voir mes projets',
    stat1:'Expériences', stat2:'Technologies maîtrisées', stat3:'Projets académiques', stat4:'Langues parlées',

    s_skills_tag:'Compétences', s_skills_title:'Mon <span>arsenal technique</span>',
    sk_lang:'Langages', sk_back:'Back‑End', sk_front:'Front‑End', sk_mobile:'Mobile',
    sk_android:'Android natif', sk_db:'Bases de données', sk_devops:'DevOps & Cloud',
    sk_tests:'Tests & Sécurité', sk_tools:'Outils & Méthodes',

    s_proj_tag:'Projets académiques', s_proj_title:"Ce que j'ai <span>construit</span>",
    badge_collab:'Collaboratif', badge_university:'Université',
    p1_title:'🏫 Gestion Scolaire — Microservices',
    p1_desc:"Plateforme complète de gestion scolaire construite sur une architecture microservices. Gestion des étudiants, enseignants, cours, notes et emplois du temps, avec une interface React moderne et des APIs Spring Boot indépendantes orchestrées via Docker.",
    p2_title:'🤖 Détection de Visages — ML',
    p2_desc:"Projet de Computer Vision utilisant des techniques de Machine Learning pour détecter et reconnaître des visages en temps réel via OpenCV et des modèles de classification Python.",
    p3_title:'Plateforme de communication professionnelle',
    p3_desc:"Application de communication sur une architecture microservices avec Spring Boot, .NET et React. Messagerie en temps réel et déploiement conteneurisé.",
    p4_title:'Plateforme étudiants‑lauréats',
    p4_desc:"Plateforme facilitant les interactions entre étudiants et anciens diplômés : réseau, offres d'emploi et mentorat. Stack MERN end-to-end.",
    p5_title:'Gestion des ressources humaines',
    p5_desc:"Application GRH pour l'Université Abdelmalek Essaâdi : gestion des employés, congés, contrats et rapports administratifs.",
    p6_title:'Bibliothèque en ligne',
    p6_desc:"Plateforme complète permettant aux utilisateurs d'emprunter et gérer des livres en ligne. Authentification sécurisée, catalogue de livres, suivi des emprunts, tableau de bord administrateur et notifications automatiques.",
    p7_title:'🧠 Plateforme RAG — Q&A sur documents',
    p7_desc:"Application de question-réponse intelligente sur documents personnels. Interface React/TypeScript avec upload drag-and-drop, backend FastAPI, pipeline RAG complet (chunking, embeddings, recherche vectorielle Qdrant), authentification JWT et cache Redis.",

    s_exp_tag:'Parcours professionnel', s_exp_title:'Mon <span>expérience</span>',
    e1_title:'Ingénieur Fullstack', e1_date:'Nov 2025 → Fév 2026', e1_company:'SENDATRACK — Tanger, Maroc',
    e1_l1:"Contribution au développement d'API REST pour l'application Iosentech",
    e1_l2:"Développement de l'application mobile ArdiBox, Sendatrack et SendaDriver",
    e1_l3:"Conception et intégration d'interfaces web pour l'application Sendatrack",
    e1_l4:"Gestion des versions, intégration continue et déploiement continu",
    e2_title:'Stagiaire Développeur Fullstack (PFE)', e2_date:'Fév 2025 → Août 2025',
    e2_company:'NTT DATA MOROCCO — Tétouan, Maroc',
    e2_l1:"Développement d'APIs REST pour la plateforme après-vente BMW",
    e2_l2:"Conception et intégration d'interfaces utilisateur avec Angular",
    e2_l3:"Participation active aux cérémonies Scrum : daily meetings, sprint planning, rétrospectives",
    e3_title:'Stagiaire Fullstack & Déploiement (PFA)', e3_date:'Juil 2024 → Sep 2024',
    e3_company:'ENSA Tanger — Université Abdelmalek Essaâdi',
    e3_l1:"Développement et déploiement de deux applications : concours d'admission et digitalisation d'événements",
    e3_l2:"Tests de sécurité avec OWASP ZAP et Burp Suite",
    e3_l3:"Tests unitaires avec JUnit et Mockito",
    e4_title:'Stagiaire Développeur Odoo', e4_date:'Juil 2023 → Août 2023',
    e4_company:'TEOS TANGER — Tanger, Maroc',
    e4_l1:"Conception et développement de modules personnalisés avec le framework Odoo",

    s_edu_tag:'Formation', s_edu_title:'Mon <span>cursus</span>',
    ed1_title:'🎓 Cycle Ingénieur — Génie Informatique',
    ed1_school:'ENSA Tanger — École Nationale des Sciences Appliquées',
    ed1_l1:"Formation d'ingénieur en génie informatique — 3 ans de cycle ingénieur",
    ed1_l2:"Spécialisation en développement logiciel, architecture systèmes, cloud et sécurité",
    ed1_l3:"Projets académiques collaboratifs, stages et hackathons",
    ed2_title:'📚 Classes Préparatoires Intégrées', ed2_school:'ENSA Tanger',
    ed2_l1:"Formation scientifique et mathématique intensive en préparation au cycle ingénieur",
    ed2_l2:"Bases solides en algorithmique, mathématiques, physique et sciences de l'ingénieur",
    ed3_title:'🏫 Baccalauréat Sciences Physiques-Chimie BIOF',
    ed3_school:'Lycée Bir Anzaran — Tanger',
    ed3_l1:"Filière bilingue franco-marocaine — spécialité Sciences Physiques-Chimie",

    s_certif_tag:'Certifications', s_certif_title:'Mes <span>certifications</span>',
    c1_title:'Oracle Certified Associate', c1_sub:'Java SE 8 — Oracle Corporation',
    c1_desc:"Certification officielle Oracle validant la maîtrise du langage Java : POO, gestion d'exceptions, API core, flux de données et programmation fonctionnelle.",
    c2_title:'Oracle Certified Professional', c2_sub:'Java SE 17 — Oracle Corporation',
    c2_desc:"Certification avancée Oracle validant la maîtrise approfondie de Java SE 17 : records, sealed classes, pattern matching, text blocks, modules Java et API modernes.",
    c3_title:'JavaScript', c3_sub:'BrightCoding Platform',
    c3_desc:"Certification couvrant les fondamentaux et concepts avancés de JavaScript : ES6+, asynchronisme (Promises, async/await), manipulation du DOM et APIs web.",
    c4_title:'React JS', c4_sub:'BrightCoding Platform',
    c4_desc:"Certification React JS validant la maîtrise des composants, hooks (useState, useEffect, useContext), gestion d'état, routing et bonnes pratiques front-end.",
    c5_title:'Oracle Certified Professional', c5_sub:'Java SE 21 — Oracle Corporation',
    c5_desc:"Certification avancée Oracle validant la maîtrise de Java SE 21 : virtual threads (Project Loom), sequenced collections, record patterns, pattern matching for switch et les dernières APIs modernes.",
    s_lang_tag:'Langues', s_lang_title:'Mes <span>langues</span>',
    lang1_name:'Arabe', lang1_lvl:'Langue maternelle',
    lang2_name:'Français', lang2_lvl:'Courant',
    lang3_name:'Anglais', lang3_lvl:'Courant',
    lang4_name:'Espagnol', lang4_lvl:'Notions de base',

    s_int_tag:"Centres d'intérêt", s_int_title:'Mes <span>passions</span>',
    int1:'Échecs', int2:'Football', int3:'Géographie', int4:'Histoire',

    s_contact_tag:'Contact', s_contact_title:'Travaillons <span>ensemble</span>',
    s_contact_sub:'Disponible pour missions, CDI ou nouvelles opportunités.',
    contact_loc:'Tanger, Maroc',
    footer_copy:'© 2026 — Ingénieur Fullstack',

    cv_btn: '📄 Mon CV',
    cv_file: 'cv.pdf',
  },
  en: {
    nav_skills:'Skills', nav_projects:'Projects', nav_exp:'Experience',
    nav_edu:'Education', nav_certif:'Certifications', nav_langues:'Languages',
    nav_interets:'Interests', nav_contact:'Contact me',

    hero_tag:'Software Engineer', hero_status:'Available',
    hero_subtitle:'Software Engineer graduated from ENSA Tangier, specialized in full-stack development and microservices. Passionate about innovation, I design scalable and high-performance solutions aligned with business needs.',
    hero_btn1:'View my projects',
    stat1:'Experiences', stat2:'Technologies mastered', stat3:'Academic projects', stat4:'Languages spoken',

    s_skills_tag:'Skills', s_skills_title:'My <span>tech stack</span>',
    sk_lang:'Languages', sk_back:'Back‑End', sk_front:'Front‑End', sk_mobile:'Mobile',
    sk_android:'Native Android', sk_db:'Databases', sk_devops:'DevOps & Cloud',
    sk_tests:'Testing & Security', sk_tools:'Tools & Methods',

    s_proj_tag:'Academic Projects', s_proj_title:"What I've <span>built</span>",
    badge_collab:'Collaborative', badge_university:'University',
    p1_title:'🏫 School Management — Microservices',
    p1_desc:'Complete school management platform built on a microservices architecture. Management of students, teachers, courses, grades and schedules, with a modern React interface and independent Spring Boot APIs orchestrated via Docker.',
    p2_title:'🤖 Face Detection — ML',
    p2_desc:'Computer Vision project using Machine Learning techniques to detect and recognize faces in real time using OpenCV and Python classification models.',
    p3_title:'Professional Communication Platform',
    p3_desc:'Communication application on a microservices architecture with Spring Boot, .NET and React. Real-time messaging and containerized deployment.',
    p4_title:'Student‑Alumni Platform',
    p4_desc:'Platform facilitating interactions between students and alumni: networking, job offers and mentoring. Full MERN stack end-to-end.',
    p5_title:'Human Resources Management',
    p5_desc:'HR application for Abdelmalek Essaâdi University: employee management, leave, contracts and administrative reports.',
    p6_title:'Online Library',
    p6_desc:'Complete platform allowing users to borrow and manage books online. Secure authentication, book catalog, borrow tracking, admin dashboard and automatic notifications.',
    p7_title:'🧠 RAG Platform — Document Q&A',
    p7_desc:'Intelligent question-answering application over personal documents. React/TypeScript interface with drag-and-drop upload, FastAPI backend, full RAG pipeline (chunking, embeddings, Qdrant vector search), JWT authentication and Redis caching.',

    s_exp_tag:'Professional Journey', s_exp_title:'My <span>experience</span>',
    e1_title:'Fullstack Engineer', e1_date:'Nov 2025 → Feb 2026',
    e1_company:'SENDATRACK — Tangier, Morocco',
    e1_l1:'Contribution to REST API development for the Iosentech application',
    e1_l2:'Development of ArdiBox, Sendatrack and SendaDriver mobile apps',
    e1_l3:'Design and integration of web interfaces for the Sendatrack application',
    e1_l4:'Version management, continuous integration and continuous deployment',
    e2_title:'Fullstack Developer Intern (PFE)', e2_date:'Feb 2025 → Aug 2025',
    e2_company:'NTT DATA MOROCCO — Tétouan, Morocco',
    e2_l1:'REST API development for the BMW after-sales service platform',
    e2_l2:'Design and integration of user interfaces with Angular',
    e2_l3:'Active participation in Scrum ceremonies: daily meetings, sprint planning, retrospectives',
    e3_title:'Fullstack & Deployment Intern (PFA)', e3_date:'Jul 2024 → Sep 2024',
    e3_company:'ENSA Tanger — Abdelmalek Essaâdi University',
    e3_l1:'Development and deployment of two applications: admission contest management and event digitalization',
    e3_l2:'Security testing with OWASP ZAP and Burp Suite',
    e3_l3:'Unit testing with JUnit and Mockito',
    e4_title:'Odoo Developer Intern', e4_date:'Jul 2023 → Aug 2023',
    e4_company:'TEOS TANGER — Tangier, Morocco',
    e4_l1:'Design and development of custom modules with the Odoo framework',

    s_edu_tag:'Education', s_edu_title:'My <span>background</span>',
    ed1_title:'🎓 Engineering Degree — Computer Science',
    ed1_school:'ENSA Tanger — National School of Applied Sciences',
    ed1_l1:'Computer engineering degree — 3-year engineering cycle',
    ed1_l2:'Specialization in software development, system architecture, cloud and security',
    ed1_l3:'Collaborative academic projects, internships and hackathons',
    ed2_title:'📚 Integrated Preparatory Classes', ed2_school:'ENSA Tanger',
    ed2_l1:'Intensive scientific and mathematical training in preparation for the engineering cycle',
    ed2_l2:'Strong foundations in algorithms, mathematics, physics and engineering sciences',
    ed3_title:'🏫 High School Diploma — Physics-Chemistry BIOF',
    ed3_school:'Lycée Bir Anzaran — Tangier',
    ed3_l1:'Bilingual French-Moroccan track — Physics-Chemistry specialization',

    s_certif_tag:'Certifications', s_certif_title:'My <span>certifications</span>',
    c1_title:'Oracle Certified Associate', c1_sub:'Java SE 8 — Oracle Corporation',
    c1_desc:'Official Oracle certification validating Java mastery: OOP, exception handling, core API, data streams and functional programming.',
    c2_title:'Oracle Certified Professional', c2_sub:'Java SE 17 — Oracle Corporation',
    c2_desc:'Advanced Oracle certification validating deep mastery of Java SE 17: records, sealed classes, pattern matching, text blocks, Java modules and modern APIs.',
    c3_title:'JavaScript', c3_sub:'BrightCoding Platform',
    c3_desc:'Certification covering JavaScript fundamentals and advanced concepts: ES6+, async programming (Promises, async/await), DOM manipulation and web APIs.',
    c4_title:'React JS', c4_sub:'BrightCoding Platform',
    c4_desc:'React JS certification validating mastery of components, hooks (useState, useEffect, useContext), state management, routing and front-end best practices.',
    c5_title:'Oracle Certified Professional', c5_sub:'Java SE 21 — Oracle Corporation',
    c5_desc:'Advanced Oracle certification validating mastery of Java SE 21: virtual threads (Project Loom), sequenced collections, record patterns, pattern matching for switch and the latest modern APIs.',
    s_lang_tag:'Languages', s_lang_title:'My <span>languages</span>',
    lang1_name:'Arabic', lang1_lvl:'Native',
    lang2_name:'French', lang2_lvl:'Fluent',
    lang3_name:'English', lang3_lvl:'Fluent',
    lang4_name:'Spanish', lang4_lvl:'Basic',

    s_int_tag:'Interests', s_int_title:'My <span>passions</span>',
    int1:'Chess', int2:'Football', int3:'Geography', int4:'History',

    s_contact_tag:'Contact', s_contact_title:"Let's work <span>together</span>",
    s_contact_sub:'Available for freelance, full-time or new opportunities.',
    contact_loc:'Tangier, Morocco',
    footer_copy:'© 2026 — Fullstack Engineer',

    cv_btn: '📄 Resume',
    cv_file: 'resume.pdf',
  }
};

let lang = 'fr';
let isDark = true;

function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top  = mouseY + 'px';
  });
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + 'px';
    ring.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
}

function initProgressBar() {
  const bar = document.getElementById('pageProgress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${window.scrollY / total})`;
  }, { passive: true });
}

function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 55);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.reveal, .stagger-children').forEach(el => io.observe(el));
}

function animateCounter(el, target, duration = 1200) {
  const start = performance.now();
  const isFloat = target !== Math.floor(target);
  el.textContent = '0';
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = target * ease;
    el.textContent = isFloat ? val.toFixed(1) : Math.round(val) + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + (el.dataset.suffix || '');
  }
  requestAnimationFrame(update);
}
function initCounters() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-num').forEach(el => {
          const raw = el.textContent.trim();
          const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
          const suffix = raw.replace(/[0-9.]/g, '');
          el.dataset.suffix = suffix;
          animateCounter(el, num);
        });
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  const stats = document.querySelector('.hero-stats');
  if (stats) io.observe(stats);
}

function spawnParticles() {
  const container = document.querySelector('.wrapper');
  if (!container) return;
  function spawn() {
    const p = document.createElement('div');
    p.className = 'particle';
    const size  = Math.random() * 3 + 1;
    const x     = Math.random() * window.innerWidth;
    const y     = Math.random() * window.innerHeight + window.scrollY;
    const tx    = (Math.random() - 0.5) * 120 + 'px';
    const ty    = -Math.random() * 200 - 80 + 'px';
    const dur   = Math.random() * 6 + 4;
    const delay = Math.random() * 3;
    const color = isDark
      ? (Math.random() > 0.5 ? 'rgba(56,189,248,0.6)' : 'rgba(129,140,248,0.6)')
      : (Math.random() > 0.5 ? 'rgba(14,165,233,0.5)' : 'rgba(99,102,241,0.5)');
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x}px; top:${y}px;
      background:${color};
      --tx:${tx}; --ty:${ty};
      animation-duration:${dur}s;
      animation-delay:${delay}s;
    `;
    container.appendChild(p);
    setTimeout(() => p.remove(), (dur + delay) * 1000);
  }
  setInterval(spawn, 600);
}

function initTyped() {
  const roles_fr = ["Ingénieur Fullstack", "Développeur Spring Boot", "Architecte Microservices", "Développeur React"];
  const roles_en = ["Fullstack Engineer", "Spring Boot Developer", "Microservices Architect", "React Developer"];
  const el = document.getElementById('typedRole');
  if (!el) return;
  let roleIdx = 0, charIdx = 0, deleting = false;
  function tick() {
    const roles = lang === 'fr' ? roles_fr : roles_en;
    const role = roles[roleIdx % roles.length];
    if (!deleting) {
      el.textContent = role.slice(0, ++charIdx);
      if (charIdx === role.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.textContent = role.slice(0, --charIdx);
      if (charIdx === 0) { deleting = false; roleIdx++; setTimeout(tick, 400); return; }
    }
    setTimeout(tick, deleting ? 40 : 80);
  }
  tick();
}

function initNavHighlight() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.style.color = '');
        const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
        if (active) active.style.color = 'var(--accent)';
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });
  sections.forEach(s => io.observe(s));
}

window.toggleLang = function () {
  lang = lang === 'fr' ? 'en' : 'fr';
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'fr' ? '🌐 EN' : '🌐 FR';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[lang][k] !== undefined) el.innerHTML = T[lang][k];
  });

  updateCVButton();
};

window.toggleTheme = function () {
  isDark = !isDark;
  document.body.classList.toggle('light-mode', !isDark);
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
};

function updateCVButton() {
  const btn = document.getElementById('cvDownloadBtn');
  if (!btn) return;
  const t = T[lang];
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
    <span>${t.cv_btn}</span>
  `;
  btn.setAttribute('download', t.cv_file);
  btn.setAttribute('href', t.cv_file);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.style.opacity = window.scrollY > 600 ? '1' : '0';
    btn.style.pointerEvents = window.scrollY > 600 ? 'auto' : 'none';
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initCardTilt() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width  - 0.5;
      const y = (e.clientY - rect.top)  / rect.height - 0.5;
      card.style.transform = `translateY(-4px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
      card.style.transition = 'none';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isDark = false;
    document.body.classList.add('light-mode');
    const btn = document.getElementById('themeToggle');
    if (btn) btn.textContent = '🌙';
  }

  updateCVButton();

  initCursor();
  initProgressBar();
  initReveal();
  initCounters();
  initTyped();
  initNavHighlight();
  initSmoothScroll();
  initBackToTop();
  initCardTilt();
  spawnParticles();
});