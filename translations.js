const translations = {
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    hero_badge: "Available for opportunities",
    hero_description:
      "Software Engineer specializing in Generative AI and Machine Learning systems. I build intelligent, real-world solutions using LLMs, RAG architectures, and modern cloud infrastructure — bridging research and production.",
    hero_cta_projects: "View Projects",
    nav_contact: "Contato",

    hero_badge: "Aberto a oportunidades",
    hero_description:
      "Engenheiro de Software especializado em IA Generativa e sistemas de Machine Learning. Crio soluções inteligentes e reais com LLMs, arquiteturas RAG e infraestrutura cloud moderna — conectando pesquisa e produção.",
    hero_cta_projects: "Ver Projetos",
    hero_cta_contact: "Fale Comigo",
    stat_years: "Anos em Tech",
    stat_projects: "Projetos de IA",
    stat_certs: "Certificações",
    hero_un_badge: "Evento ONU",

    about_tag: "Quem Sou",
    about_title: "Construindo Soluções Inteligentes",
    about_img_caption: "Evento de Inovação — ONU",
    about_lead:
      "Sou Engenheiro de Software de Curitiba, Brasil, com foco profundo em Inteligência Artificial e na aplicação prática de Machine Learning em escala.",
    about_para1:
      "Minha trajetória começou com paixão por algoritmos e evoluiu para uma especialização em IA Generativa — criando sistemas que entendem linguagem, recuperam conhecimento de forma inteligente e respondem com contexto e precisão.",
    about_para2:
      "Atualmente cursando Mestrado Profissional em Computação Aplicada na UTFPR, atuo na interseção entre pesquisa acadêmica e engenharia da indústria. Minha experiência vai desde o desenvolvimento de pipelines LLM e arquiteturas RAG até a implantação de sistemas prontos para produção na AWS — sempre com foco em impacto mensurável.",
    about_para3:
      "Sou multilíngue (francês e crioulo haitiano nativos, português fluente, inglês intermediário) e me identifico com equipes internacionais e multiculturais que resolvem problemas reais com tecnologia.",

    skills_tag: "Stack Técnica",
    skills_title: "Habilidades & Tecnologias",
    skills_subtitle:
      "Uma visão curada das ferramentas e tecnologias que uso para construir sistemas inteligentes.",
    skills_ai: "IA & Machine Learning",
    skills_lang: "Linguagens & Frameworks",
    skills_cloud: "Cloud & DevOps",
    skills_backend: "Backend & Dados",
    skills_practices: "Práticas & Idiomas",

    projects_tag: "O que Construí",
    projects_title: "Projetos em Destaque",
    projects_subtitle:
      "Sistemas reais, impacto real — de protótipos de pesquisa a implantações em nível de produção.",
    badge_featured: "Destaque",
    proj1_title: "Sistema RAG de Conhecimento Institucional",
    proj1_desc:
      "Uma plataforma de Recuperação com Geração Aumentada (RAG) de nível produção construída para a UFFS. O sistema ingere, versiona e audita documentos (PDF, DOCX, TXT), processa-os por um pipeline NLP completo (chunking, normalização, embeddings) e possibilita Q&A contextual com Google Gemini — com citação de fontes e controle de acesso baseado em papéis.",
    proj1_impact:
      "Permitiu que funcionários institucionais consultassem mais de 1.000 documentos com respostas precisas e citadas — reduzindo significativamente o tempo de recuperação de informações.",
    proj2_title: "Bot Inteligente de Atendimento via WhatsApp",
    proj2_desc:
      "Projetei e implementei um sistema de atendimento ao cliente com IA via WhatsApp, com fluxos conversacionais, menus interativos e consultas em tempo real ao banco de dados. O bot aplica NLP para entender a intenção do usuário e entrega respostas contextuais e dinâmicas.",
    proj2_impact:
      "Automatizou fluxos completos de suporte ao cliente, reduzindo tempo de resposta e custo operacional para a instituição.",
    proj3_title: "Plataforma Corporativa de Integração LLM",
    proj3_desc:
      "Na Compass UOL, contribuí para o desenvolvimento de soluções inteligentes de nível enterprise com Large Language Models. O trabalho envolveu arquitetura de pipelines LLM, automações e colaboração em times multidisciplinares em ciclos ágeis.",
    proj3_impact:
      "Entregou soluções de automação IA escaláveis para clientes corporativos, integrando capacidades LLM de ponta em ambientes de produção.",
    proj4_title: "Exploração & Prototipagem de Serviços AWS AI",
    proj4_desc:
      "Exploração prática e integração do ecossistema AWS AI — incluindo SageMaker para treinamento de modelos, Comprehend para NLP, Kendra para busca inteligente, Lex para interfaces conversacionais, Rekognition para visão computacional e Bedrock para acesso a modelos fundacionais.",
    proj4_impact:
      "Construiu uma sólida base aplicada em IA nativa na nuvem, possibilitando prototipagem e implantação rápida de features com ML.",

    exp_tag: "Trajetória",
    exp_title: "Experiência",
    exp_current: "Atual",
    exp_present: "Presente",
    exp1_role: "Engenheiro de Software — Programador I",
    exp1_desc:
      "Atuando em produtos corporativos de IA com foco em IA Generativa e automação baseada em LLMs. Integrado a times ágeis e multifuncionais que entregam soluções inteligentes para clientes enterprise. Responsável por arquitetar e implementar pipelines de IA integrados a sistemas de produção.",
    exp1_h1: "Desenvolve automação inteligente baseada em LLMs para ambientes corporativos",
    exp1_h2: "Arquiteta e entrega features de IA Generativa de ponta a ponta",
    exp1_h3: "Colabora em times ágeis com perfis de engenharia multidisciplinares",
    exp2_role: "Pesquisador & Desenvolvedor em IA",
    exp2_desc:
      "Liderou o desenvolvimento técnico de um sistema de IA Generativa institucional no projeto de extensão \"Desenvolvimento Profissional e Inovação em TI\" (1.280 horas). Construiu uma plataforma RAG completa do zero — cobrindo pipelines de ingestão, busca vetorial, integração LLM e frontend React com autenticação e gestão de papéis.",
    exp2_h1: "Construiu um sistema RAG completo: ingestão → embeddings → busca vetorial → LLM → citações",
    exp2_h2: "Integrou chatbot WhatsApp com consultas diretas a bancos de dados institucionais",
    exp2_h3: "Implementou autenticação, RBAC, gestão de sessões e testes end-to-end",
    exp2_h4: "Planejou migração para modelos open source via Hugging Face / SentenceTransformers",
    exp3_role: "Residente em TIC — Desenvolvedor de Sistemas com IA",
    exp3_desc:
      "Selecionado para o programa de Residência em Computação Avançada (540 horas), onde projetei e construí um Sistema Inteligente de Gestão de Comunicação via WhatsApp. Programa nacional apoiado por UNOESC, Softex e MCTI.",
    exp3_h1: "Desenvolveu fluxos automatizados de atendimento via WhatsApp com IA conversacional",
    exp3_h2: "Implementou consultas em tempo real ao banco de dados para geração dinâmica de respostas",
    exp3_h3: "Entregou o projeto completo com documentação e apresentação final",
    exp4_role: "Estagiário em Tecnologia — AWS & Machine Learning",
    exp4_desc:
      "Estágio imersivo focado em serviços cloud AWS e Machine Learning. Experiência prática no ecossistema AWS AI — incluindo SageMaker, Comprehend, Kendra, Lex, Polly e Rekognition — em ambiente corporativo ágil.",
    exp5_role: "Monitor — Algoritmos e Estrutura de Dados",
    exp5_desc:
      "Apoiei estudantes em monitorias individuais e em grupo de Algoritmos e Estrutura de Dados. Contribuí para a elaboração de materiais didáticos, reforçando conceitos fundamentais de ciência da computação em Python e C.",

    edu_heading: "Formação Acadêmica",
    edu1_degree: "Mestrado Profissional em Computação Aplicada",
    edu2_degree: "Bacharelado em Ciência da Computação",
    edu_ongoing: "Em Andamento",
    edu_completed: "Concluído",

    certs_tag: "Credenciais",
    certs_title: "Certificações & Destaques",
    certs_subtitle:
      "Aprendizado contínuo é central para o meu crescimento — de programas formais a especializações práticas.",
    cert1: "AI-Assisted Certified Professional",
    cert2: "Especialista em Segurança da Informação",
    cert3: "Programa de Residência em TIC",
    cert4: "Machine Learning com AWS & SageMaker",
    cert5: "Redes Neurais Artificiais em Python",
    cert6: "Desenvolvimento AWS com Foco em Serverless",
    cert7: "Python do Zero ao Avançado + Projetos",
    cert8: "Terraform — Do Básico ao Avançado",
    cert9: "Alexa Skill Builder",
    cert10: "LatinOware — Congresso Latino-americano de Software Livre",
    cert11: "IX Semana Acadêmica de Ciência da Computação",
    cert12: "Lógica de Programação & Pensamento Computacional",
    un_title: "Representação nas Nações Unidas",
    un_desc:
      "Tive a oportunidade de participar de um evento de inovação nas Nações Unidas — um marco que reflete meu compromisso em usar tecnologia para impacto global e contribuir para conversas internacionais sobre IA e desenvolvimento sustentável.",

    contact_tag: "Vamos Conectar",
    contact_title: "Entre em Contato",
    contact_subtitle:
      "Estou aberto a novas oportunidades, colaborações em pesquisa e conversas interessantes sobre IA e engenharia de software.",
    contact_email_label: "E-mail",
    contact_location_label: "Localização",
    contact_languages_label: "Idiomas",
    contact_languages_val: "Francês · Crioulo Haitiano · Português · Inglês",
    form_name: "Nome",
    form_name_placeholder: "Seu nome",
    form_email: "E-mail",
    form_email_placeholder: "seu@email.com",
    form_message: "Mensagem",
    form_message_placeholder: "Me conte sobre seu projeto ou oportunidade...",
    form_send: "Enviar Mensagem",
    form_note: "Costumo responder em 24–48 horas.",

    contact_whatsapp_label: "WhatsApp",
    contact_whatsapp_cta: "Me mande mensagem pelo WhatsApp",
    contact_whatsapp_sub: "Clique abaixo para iniciar uma conversa diretamente no WhatsApp Web.",
    contact_whatsapp_btn: "Abrir WhatsApp",

    footer_copy: "Construído com paixão e precisão. Aberto a oportunidades no mundo todo.",
    footer_rights: "Todos os direitos reservados.",
  },

  fr: {
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_projects: "Projets",
    nav_experience: "Expérience",
    nav_certifications: "Certifications",
    nav_contact: "Contact",

    hero_badge: "Disponible pour de nouvelles opportunités",
    hero_description:
      "Ingénieur logiciel spécialisé en IA générative et systèmes de machine learning. Je construis des solutions intelligentes avec des LLMs, des architectures RAG et une infrastructure cloud moderne — en reliant recherche et production.",
    hero_cta_projects: "Voir les projets",
    hero_cta_contact: "Me contacter",
    stat_years: "Ans en tech",
    stat_projects: "Projets IA",
    stat_certs: "Certifications",
    hero_un_badge: "Événement ONU",

    about_tag: "Qui suis-je",
    about_title: "Créer des solutions intelligentes",
    about_img_caption: "Événement Innovation — ONU",
    about_lead:
      "Je suis ingénieur logiciel basé à Curitiba, au Brésil, avec un fort intérêt pour l'intelligence artificielle et l'application pratique du machine learning à grande échelle.",
    about_para1:
      "Mon parcours a commencé par une passion pour les algorithmes et a évolué vers une spécialisation en IA générative — en construisant des systèmes qui comprennent le langage, récupèrent la connaissance intelligemment et répondent avec contexte et précision.",
    about_para2:
      "Actuellement en Master Professionnel en Informatique Appliquée à l'UTFPR, je travaille à l'intersection de la recherche académique et de l'ingénierie industrielle. Mon expérience va du développement de pipelines LLM et d'architectures RAG au déploiement de systèmes en production sur AWS.",
    about_para3:
      "Je suis multilingue (français et créole haïtien natifs, portugais courant, anglais intermédiaire) et je suis attiré par des équipes internationales et interculturelles qui résolvent des problèmes réels grâce à la technologie.",

    skills_tag: "Stack technique",
    skills_title: "Compétences & technologies",
    skills_subtitle:
      "Un aperçu des outils et technologies que j'utilise pour construire des systèmes intelligents.",
    skills_ai: "IA & Machine Learning",
    skills_lang: "Langages & Frameworks",
    skills_cloud: "Cloud & DevOps",
    skills_backend: "Backend & Données",
    skills_practices: "Pratiques & Langues",

    projects_tag: "Ce que j'ai construit",
    projects_title: "Projets phares",
    projects_subtitle:
      "Des systèmes réels, un impact réel — des prototypes de recherche aux déploiements en production.",
    badge_featured: "En vedette",
    proj1_title: "Système RAG de connaissance institutionnelle",
    proj1_desc:
      "Une plateforme RAG (Retrieval-Augmented Generation) de niveau production construite pour l'UFFS. Le système ingère, versionne et audite des documents (PDF, DOCX, TXT), les traite via un pipeline NLP complet (chunking, normalisation, embeddings) et permet des Q&R contextuelles alimentées par Google Gemini — avec citations et contrôle d'accès basé sur les rôles.",
    proj1_impact:
      "Permis au personnel institutionnel d'interroger plus de 1 000 documents avec des réponses précises et citées — réduisant considérablement le temps de récupération de l'information.",
    proj2_title: "Bot intelligent de service client WhatsApp",
    proj2_desc:
      "Conçu et implémenté un système de service client alimenté par IA via WhatsApp, avec des flux conversationnels, des menus interactifs et des requêtes en temps réel dans les bases de données. Le bot applique le NLP pour comprendre l'intention de l'utilisateur.",
    proj2_impact:
      "Automatisation complète des flux de support client, réduisant le temps de réponse et la charge opérationnelle.",
    proj3_title: "Plateforme d'intégration LLM en entreprise",
    proj3_desc:
      "Chez Compass UOL, j'ai contribué au développement de solutions intelligentes de niveau entreprise alimentées par des Large Language Models — en architecturant des pipelines LLM, des workflows d'automatisation et en collaborant avec des équipes pluridisciplinaires.",
    proj3_impact:
      "Livraison de solutions d'automatisation IA évolutives à des clients d'entreprise, intégrant des capacités LLM de pointe en environnement de production.",
    proj4_title: "Exploration & prototypage des services AWS AI",
    proj4_desc:
      "Exploration pratique de l'écosystème AWS AI — incluant SageMaker pour l'entraînement de modèles, Comprehend pour le NLP, Kendra pour la recherche intelligente, Lex pour les interfaces conversationnelles, Rekognition pour la vision par ordinateur et Bedrock pour l'accès aux modèles fondationnels.",
    proj4_impact:
      "Solide base pratique en IA cloud native, permettant le prototypage rapide et le déploiement de fonctionnalités ML.",

    exp_tag: "Parcours",
    exp_title: "Expérience",
    exp_current: "Actuel",
    exp_present: "Présent",
    exp1_role: "Ingénieur logiciel — Programmeur I",
    exp1_desc:
      "Travail sur des produits IA d'entreprise axés sur l'IA générative et l'automatisation LLM. Intégré dans des équipes agiles et interfonctionnelles livrant des solutions intelligentes à des clients enterprise.",
    exp1_h1: "Développe des automatisations intelligentes basées sur LLMs pour les environnements d'entreprise",
    exp1_h2: "Conçoit et livre des fonctionnalités d'IA générative de bout en bout",
    exp1_h3: "Collabore en équipes agiles avec des profils d'ingénierie multidisciplinaires",
    exp2_role: "Chercheur & développeur en IA",
    exp2_desc:
      "A dirigé le développement technique d'un système d'IA générative institutionnel dans le cadre du programme d'extension \"Développement professionnel et innovation en TI\" (1 280 heures). Construction d'une plateforme RAG complète de zéro.",
    exp2_h1: "Construction d'un système RAG complet: ingestion → embeddings → recherche vectorielle → LLM → citations",
    exp2_h2: "Intégration du chatbot WhatsApp avec des requêtes directes aux bases de données institutionnelles",
    exp2_h3: "Implémentation de l'authentification, RBAC, gestion des sessions et tests end-to-end",
    exp2_h4: "Planification de la migration vers des modèles open source via Hugging Face / SentenceTransformers",
    exp3_role: "Programme de résidence TIC — Développeur de systèmes IA",
    exp3_desc:
      "Sélectionné pour la résidence en informatique avancée (540 heures), où j'ai conçu et construit un système intelligent de gestion de la communication via WhatsApp. Programme national soutenu par UNOESC, Softex et le MCTI brésilien.",
    exp3_h1: "Développement de flux de service WhatsApp automatisés avec IA conversationnelle",
    exp3_h2: "Requêtes en temps réel en base de données pour la génération de réponses dynamiques",
    exp3_h3: "Livraison complète du projet avec documentation et présentation finale",
    exp4_role: "Stagiaire en technologie — AWS & Machine Learning",
    exp4_desc:
      "Stage immersif axé sur les services cloud AWS et le machine learning. Expérience pratique dans l'écosystème AWS AI — SageMaker, Comprehend, Kendra, Lex, Polly et Rekognition — en environnement d'entreprise agile.",
    exp5_role: "Assistant pédagogique — Algorithmes & structures de données",
    exp5_desc:
      "Soutien aux étudiants via des séances de tutorat individuelles et en groupe sur les algorithmes et structures de données. Contribution à l'élaboration de matériaux didactiques en Python et C.",

    edu_heading: "Formation",
    edu1_degree: "Master Professionnel en Informatique Appliquée",
    edu2_degree: "Licence en Informatique",
    edu_ongoing: "En cours",
    edu_completed: "Terminé",

    certs_tag: "Certifications",
    certs_title: "Certifications & distinctions",
    certs_subtitle:
      "L'apprentissage continu est au cœur de ma progression — des programmes formels aux spécialisations pratiques.",
    cert1: "Professionnel certifié assisté par IA",
    cert2: "Spécialiste en sécurité informatique",
    cert3: "Programme de résidence TIC",
    cert4: "Machine Learning avec AWS & SageMaker",
    cert5: "Réseaux de neurones artificiels en Python",
    cert6: "Développement AWS orienté Serverless",
    cert7: "Python du débutant à l'avancé + projets",
    cert8: "Terraform — Du basique à l'avancé",
    cert9: "Alexa Skill Builder",
    cert10: "LatinOware — Congrès latino-américain du logiciel libre",
    cert11: "IXe Semaine académique en informatique",
    cert12: "Logique de programmation & pensée computationnelle",
    un_title: "Représenté aux Nations Unies",
    un_desc:
      "J'ai eu l'opportunité de participer à un événement d'innovation aux Nations Unies — un jalon qui reflète mon engagement à utiliser la technologie pour un impact mondial et à contribuer aux conversations internationales sur l'IA et le développement durable.",

    contact_tag: "Connectons-nous",
    contact_title: "Me contacter",
    contact_subtitle:
      "Je suis ouvert aux nouvelles opportunités, aux collaborations de recherche et aux conversations intéressantes sur l'IA et le génie logiciel.",
    contact_email_label: "E-mail",
    contact_location_label: "Localisation",
    contact_languages_label: "Langues",
    contact_languages_val: "Français · Créole haïtien · Portugais · Anglais",
    form_name: "Nom",
    form_name_placeholder: "Votre nom",
    form_email: "E-mail",
    form_email_placeholder: "votre@email.com",
    form_message: "Message",
    form_message_placeholder: "Parlez-moi de votre projet ou opportunité...",
    form_send: "Envoyer le message",
    form_note: "Je réponds généralement dans les 24 à 48 heures.",

    contact_whatsapp_label: "WhatsApp",
    contact_whatsapp_cta: "Envoyez-moi un message sur WhatsApp",
    contact_whatsapp_sub: "Cliquez ci-dessous pour démarrer une conversation directement sur WhatsApp Web.",
    contact_whatsapp_btn: "Ouvrir WhatsApp",

    footer_copy: "Construit avec passion et précision. Ouvert aux opportunités dans le monde entier.",
    footer_rights: "Tous droits réservés.",
  },

  es: {
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_experience: "Experiencia",
    nav_certifications: "Certificaciones",
    nav_contact: "Contacto",

    hero_badge: "Disponible para oportunidades",
    hero_description:
      "Ingeniero de software especializado en IA generativa y sistemas de machine learning. Construyo soluciones inteligentes con LLMs, arquitecturas RAG e infraestructura cloud moderna — conectando investigación y producción.",
    hero_cta_projects: "Ver proyectos",
    hero_cta_contact: "Contáctame",
    stat_years: "Años en tecnología",
    stat_projects: "Proyectos de IA",
    stat_certs: "Certificaciones",
    hero_un_badge: "Evento ONU",

    about_tag: "Quién soy",
    about_title: "Creando soluciones inteligentes",
    about_img_caption: "Evento de Innovación — ONU",
    about_lead:
      "Soy Ingeniero de Software de Curitiba, Brasil, con un enfoque profundo en Inteligencia Artificial y la aplicación práctica del Machine Learning a escala.",
    about_para1:
      "Mi trayectoria comenzó con una pasión por los algoritmos y creció hasta convertirse en una especialización en IA generativa — construyendo sistemas que comprenden el lenguaje, recuperan conocimiento de forma inteligente y responden con contexto y precisión.",
    about_para2:
      "Actualmente cursando una Maestría Profesional en Computación Aplicada en la UTFPR, trabajo en la intersección de la investigación académica y la ingeniería industrial. Mi experiencia abarca desde el desarrollo de pipelines LLM y arquitecturas RAG hasta el despliegue de sistemas listos para producción en AWS.",
    about_para3:
      "Soy multilingüe (francés y creole haitiano nativos, portugués fluido, inglés intermedio) y me atrae trabajar en equipos internacionales y multiculturales que resuelven problemas reales mediante la tecnología.",

    skills_tag: "Stack tecnológico",
    skills_title: "Habilidades & tecnologías",
    skills_subtitle:
      "Una visión curada de las herramientas y tecnologías que uso para construir sistemas inteligentes.",
    skills_ai: "IA & Machine Learning",
    skills_lang: "Lenguajes & Frameworks",
    skills_cloud: "Cloud & DevOps",
    skills_backend: "Backend & Datos",
    skills_practices: "Prácticas & Idiomas",

    projects_tag: "Lo que he construido",
    projects_title: "Proyectos destacados",
    projects_subtitle:
      "Sistemas reales, impacto real — desde prototipos de investigación hasta despliegues en producción.",
    badge_featured: "Destacado",
    proj1_title: "Sistema RAG de conocimiento institucional",
    proj1_desc:
      "Una plataforma RAG de nivel producción construida para la UFFS. El sistema ingiere, versiona y audita documentos (PDF, DOCX, TXT), los procesa mediante un pipeline NLP completo (chunking, normalización, embeddings) y habilita Q&A contextual con Google Gemini — con citas de fuentes y control de acceso basado en roles.",
    proj1_impact:
      "Permitió al personal institucional consultar más de 1.000 documentos con respuestas precisas y citadas — reduciendo significativamente el tiempo de recuperación de información.",
    proj2_title: "Bot inteligente de atención al cliente vía WhatsApp",
    proj2_desc:
      "Diseñé e implementé un sistema de atención al cliente con IA vía WhatsApp, con flujos conversacionales, menús interactivos y consultas en tiempo real a bases de datos. El bot aplica NLP para comprender la intención del usuario.",
    proj2_impact:
      "Automatizó flujos completos de soporte al cliente, reduciendo el tiempo de respuesta y la carga operativa.",
    proj3_title: "Plataforma corporativa de integración LLM",
    proj3_desc:
      "En Compass UOL, contribuí al desarrollo de soluciones inteligentes de nivel empresarial con Large Language Models — arquitectando pipelines LLM, flujos de automatización y colaborando con equipos multidisciplinarios.",
    proj3_impact:
      "Entregó soluciones de automatización IA escalables a clientes corporativos, integrando capacidades LLM de vanguardia en entornos de producción.",
    proj4_title: "Exploración & prototipado de servicios AWS AI",
    proj4_desc:
      "Exploración e integración práctica del ecosistema AWS AI — incluyendo SageMaker para entrenamiento de modelos, Comprehend para NLP, Kendra para búsqueda inteligente, Lex para interfaces conversacionales, Rekognition para visión artificial y Bedrock para acceso a modelos fundacionales.",
    proj4_impact:
      "Base práctica sólida en IA nativa en la nube, permitiendo prototipado rápido y despliegue de características con ML.",

    exp_tag: "Trayectoria",
    exp_title: "Experiencia",
    exp_current: "Actual",
    exp_present: "Presente",
    exp1_role: "Ingeniero de Software — Programador I",
    exp1_desc:
      "Trabajando en productos corporativos de IA con enfoque en IA Generativa y automatización LLM. Integrado en equipos ágiles y multifuncionales que entregan soluciones inteligentes a clientes empresariales.",
    exp1_h1: "Desarrolla automatización inteligente basada en LLMs para entornos corporativos",
    exp1_h2: "Diseña y entrega funcionalidades de IA generativa de extremo a extremo",
    exp1_h3: "Colabora en equipos ágiles con perfiles de ingeniería multidisciplinarios",
    exp2_role: "Investigador & Desarrollador en IA",
    exp2_desc:
      "Lideró el desarrollo técnico de un sistema de IA generativa institucional como parte del programa de extensión (1.280 horas). Construyó una plataforma RAG completa desde cero.",
    exp2_h1: "Construyó un sistema RAG completo: ingestión → embeddings → búsqueda vectorial → LLM → citas",
    exp2_h2: "Integró chatbot de WhatsApp con consultas directas a bases de datos institucionales",
    exp2_h3: "Implementó autenticación, RBAC, gestión de sesiones y pruebas end-to-end",
    exp2_h4: "Planificó migración a modelos open source vía Hugging Face / SentenceTransformers",
    exp3_role: "Programa de Residencia TIC — Desarrollador de sistemas IA",
    exp3_desc:
      "Seleccionado para la Residencia en Computación Avanzada (540 horas), donde diseñé y construí un Sistema Inteligente de Gestión de Comunicación vía WhatsApp. Programa nacional respaldado por UNOESC, Softex y el MCTI brasileño.",
    exp3_h1: "Desarrolló flujos automatizados de atención WhatsApp con IA conversacional",
    exp3_h2: "Implementó consultas en tiempo real a bases de datos para respuestas dinámicas",
    exp3_h3: "Entregó el proyecto completo con documentación y presentación final",
    exp4_role: "Practicante en tecnología — AWS & Machine Learning",
    exp4_desc:
      "Prácticas inmersivas en servicios cloud AWS y Machine Learning. Experiencia práctica en el ecosistema AWS AI — SageMaker, Comprehend, Kendra, Lex, Polly y Rekognition — en entorno corporativo ágil.",
    exp5_role: "Asistente docente — Algoritmos y estructuras de datos",
    exp5_desc:
      "Apoyo a estudiantes mediante tutorías individuales y grupales en Algoritmos y Estructuras de Datos. Contribución a materiales didácticos en Python y C.",

    edu_heading: "Formación académica",
    edu1_degree: "Maestría Profesional en Computación Aplicada",
    edu2_degree: "Licenciatura en Ciencias de la Computación",
    edu_ongoing: "En curso",
    edu_completed: "Completado",

    certs_tag: "Credenciales",
    certs_title: "Certificaciones & logros",
    certs_subtitle:
      "El aprendizaje continuo es fundamental para mi crecimiento — desde programas formales hasta especializaciones prácticas.",
    cert1: "Profesional certificado asistido por IA",
    cert2: "Especialista en seguridad informática",
    cert3: "Programa de Residencia TIC",
    cert4: "Machine Learning con AWS & SageMaker",
    cert5: "Redes neuronales artificiales en Python",
    cert6: "Desarrollo AWS orientado a Serverless",
    cert7: "Python de cero a avanzado + proyectos",
    cert8: "Terraform — Básico a avanzado",
    cert9: "Alexa Skill Builder",
    cert10: "LatinOware — Congreso latinoamericano de software libre",
    cert11: "IX Semana académica de Ciencias de la Computación",
    cert12: "Lógica de programación y pensamiento computacional",
    un_title: "Representado en las Naciones Unidas",
    un_desc:
      "Tuve la oportunidad de participar en un evento de innovación en las Naciones Unidas — un hito que refleja mi compromiso de utilizar la tecnología para el impacto global y contribuir a las conversaciones internacionales sobre IA y desarrollo sostenible.",

    contact_tag: "Conectemos",
    contact_title: "Contáctame",
    contact_subtitle:
      "Estoy abierto a nuevas oportunidades, colaboraciones de investigación y conversaciones interesantes sobre IA e ingeniería de software.",
    contact_email_label: "Correo electrónico",
    contact_location_label: "Ubicación",
    contact_languages_label: "Idiomas",
    contact_languages_val: "Francés · Criollo haitiano · Portugués · Inglés",
    form_name: "Nombre",
    form_name_placeholder: "Tu nombre",
    form_email: "Correo electrónico",
    form_email_placeholder: "tu@email.com",
    form_message: "Mensaje",
    form_message_placeholder: "Cuéntame sobre tu proyecto u oportunidad...",
    form_send: "Enviar mensaje",
    form_note: "Generalmente respondo en 24–48 horas.",

    contact_whatsapp_label: "WhatsApp",
    contact_whatsapp_cta: "Envíame un mensaje por WhatsApp",
    contact_whatsapp_sub: "Haz clic abajo para iniciar una conversación directamente en WhatsApp Web.",
    contact_whatsapp_btn: "Abrir WhatsApp",

    footer_copy: "Construido con pasión y precisión. Abierto a oportunidades en todo el mundo.",
    footer_rights: "Todos los derechos reservados.",
  },

  ht: {
    nav_about: "Sou mwen",
    nav_skills: "Kapasite",
    nav_projects: "Pwojè",
    nav_experience: "Eksperyans",
    nav_certifications: "Sètifikasyon",
    nav_contact: "Kontakte",

    hero_badge: "Disponib pou opòtinite",
    hero_description:
      "Enjenyè lojisyèl ki espesyalize nan IA Generatif ak sistèm Machine Learning. Mwen bati solisyon entèlijan ak LLMs, achitekti RAG ak enfrastriktirè cloud modèn — konnekte rechèch ak pwoduksyon.",
    hero_cta_projects: "Wè Pwojè",
    hero_cta_contact: "Kontakte mwen",
    stat_years: "Ane nan Tech",
    stat_projects: "Pwojè IA",
    stat_certs: "Sètifikasyon",
    hero_un_badge: "Evènman ONU",

    about_tag: "Ki moun mwen ye",
    about_title: "Kreye Solisyon Entèlijan",
    about_img_caption: "Evènman Inovasyon — ONU",
    about_lead:
      "Mwen se yon Enjenyè Lojisyèl ki soti Curitiba, Brezil, ak yon gwo enterè nan Entèlijans Atifisyèl ak aplikasyon pratik Machine Learning nan echèl.",
    about_para1:
      "Vwayaj mwen te kòmanse ak yon pasyon pou algoritm epi vin yon espesyalizasyon nan IA Generatif — bati sistèm ki konprann lang, rekipere konesans yon fason entèlijan epi reponn ak kontèks ak presizyon.",
    about_para2:
      "Kounye a ap fè Mèt Pwofesyonèl nan Enfòmatik Aplike nan UTFPR, mwen travay nan entèseksyon rechèch akademik ak enjenyeri endistriyèl. Eksperyans mwen kouvri devlopman pipelines LLM ak achitekti RAG jiska deplwaman sistèm sou AWS.",
    about_para3:
      "Mwen pale plizyè lang (fransè ak kreyòl ayisyen se lang natif natal mwen, pòtigè koule, angle entèmedyè) epi mwen atire pa ekip entènasyonal ki rezoud pwoblèm reyèl ak teknoloji.",

    skills_tag: "Stack Teknik",
    skills_title: "Kapasite & Teknoloji",
    skills_subtitle:
      "Yon apèsi sou zouti ak teknoloji mwen itilize pou bati sistèm entèlijan.",
    skills_ai: "IA & Machine Learning",
    skills_lang: "Lang & Frameworks",
    skills_cloud: "Cloud & DevOps",
    skills_backend: "Backend & Done",
    skills_practices: "Pratik & Lang pale",

    projects_tag: "Sa mwen bati",
    projects_title: "Pwojè Prensipal",
    projects_subtitle:
      "Sistèm reyèl, enpak reyèl — soti nan pwototip rechèch jouk deplwaman nivo pwoduksyon.",
    badge_featured: "Vedèt",
    proj1_title: "Sistèm RAG Konesans Enstitisyonèl",
    proj1_desc:
      "Yon platfòm RAG nivo pwoduksyon bati pou UFFS. Sistèm nan injere, vèsyone epi verifye dokiman (PDF, DOCX, TXT), trete yo atravè yon pipeline NLP konplè (chunking, nòmalizasyon, embeddings) epi pèmèt Q&R kontèkstyèl ak Google Gemini — ak sitasyon sous ak kontwòl aksè bazé sou wòl.",
    proj1_impact:
      "Pèmèt pèsonèl enstitisyonèl yo entèwoje plis pase 1.000 dokiman ak repons presiz ak site — redwi konsiderableman tan rekiperasyon enfòmasyon.",
    proj2_title: "Bot Entèlijan Sèvis Kliyan WhatsApp",
    proj2_desc:
      "Konsepe ak enplemante yon sistèm sèvis kliyan alimenté pa IA via WhatsApp, ak flou konvèsasyonèl, meni entèraktif ak rechèch baz done an tan reyèl. Bot la aplike NLP pou konprann entansyon itilizatè.",
    proj2_impact:
      "Otomatize flou sipò kliyan konplè, redwi tan repons ak chaj operasyonèl.",
    proj3_title: "Platfòm Korporatif Entegrasyon LLM",
    proj3_desc:
      "Nan Compass UOL, mwen kontribiye nan devlopman solisyon entèlijan nivo antrepriz alimenté pa Large Language Models — achitekti pipelines LLM, workflow otomatizasyon ak kolaborasyon ak ekip miltidisiplinè.",
    proj3_impact:
      "Livré solisyon otomatizasyon IA ekalad pou kliyan korporatif, entegre kapasite LLM pwent nan anviwonman pwoduksyon.",
    proj4_title: "Eksplorasyon & Prototipaj Sèvis AWS AI",
    proj4_desc:
      "Eksplorasyon pratik ak entegrasyon ekosistèm AWS AI — enkli SageMaker pou antrenman modèl, Comprehend pou NLP, Kendra pou rechèch entèlijan, Lex pou entèfas konvèsasyonèl, Rekognition pou vizyon òdinatè ak Bedrock pou aksè modèl fondasyonèl.",
    proj4_impact:
      "Bati yon baz solid pratik nan IA natif natal nan cloud, pèmèt prototipaj rapid ak deplwaman karakteristik ML.",

    exp_tag: "Parcours",
    exp_title: "Eksperyans",
    exp_current: "Kounye a",
    exp_present: "Jodi a",
    exp1_role: "Enjenyè Lojisyèl — Pwogramè I",
    exp1_desc:
      "Travay sou pwodwi IA korporatif ak aksan sou IA Generatif ak otomatizasyon LLM. Entegre nan ekip ajil ak miltidisiplinè ki livré solisyon entèlijan pou kliyan antrepriz.",
    exp1_h1: "Devlope otomatizasyon entèlijan bazé sou LLMs pou anviwonman korporatif",
    exp1_h2: "Achitekte ak livré fonksyonalite IA Generatif de pwen an pwen",
    exp1_h3: "Kolabore nan ekip ajil ak pwofil enjenyeri miltidisiplinè",
    exp2_role: "Cherchè & Devlopè an IA",
    exp2_desc:
      "Te dirije devlopman teknik yon sistèm IA Generatif enstitisyonèl (1.280 è). Bati yon platfòm RAG konplè soti nan zewo.",
    exp2_h1: "Bati yon sistèm RAG konplè: injeksyon → embeddings → rechèch vektoryèl → LLM → sitasyon",
    exp2_h2: "Entegre chatbot WhatsApp ak rechèch dirèk nan baz done enstitisyonèl",
    exp2_h3: "Enplemante otantifikasyon, RBAC, jesyon sesyon ak tès end-to-end",
    exp2_h4: "Planifye migrasyon pou modèl open source via Hugging Face / SentenceTransformers",
    exp3_role: "Pwogram Rezidans TIC — Devlopè Sistèm IA",
    exp3_desc:
      "Yo te chwazi mwen pou Rezidans Enfòmatik Avanse (540 è), kote mwen te konsepe ak bati yon Sistèm Entèlijan Jesyon Kominikasyon via WhatsApp. Pwogram nasyonal sipòte pa UNOESC, Softex ak MCTI Brezilyen.",
    exp3_h1: "Devlope flou sèvis WhatsApp otomatize ak IA konvèsasyonèl",
    exp3_h2: "Enplemante rechèch baz done an tan reyèl pou repons dinamik",
    exp3_h3: "Livré pwojè konplè ak dokimantasyon ak prezantasyon final",
    exp4_role: "Estajyè Teknoloji — AWS & Machine Learning",
    exp4_desc:
      "Estaj imèsif nan sèvis cloud AWS ak Machine Learning. Eksperyans pratik nan ekosistèm AWS AI — SageMaker, Comprehend, Kendra, Lex, Polly ak Rekognition — nan anviwonman korporatif ajil.",
    exp5_role: "Asistan Pedagojik — Algoritm & Estrikti Done",
    exp5_desc:
      "Te sipòte etidyan atravè sesyon titorya endividyèl ak gwoup nan Algoritm ak Estrikti Done. Kontribiye nan materyèl didaktik an Python ak C.",

    edu_heading: "Fòmasyon Akademik",
    edu1_degree: "Mèt Pwofesyonèl nan Enfòmatik Aplike",
    edu2_degree: "Lisans nan Syans Enfòmatik",
    edu_ongoing: "An Kou",
    edu_completed: "Fin",

    certs_tag: "Kalifikasyon",
    certs_title: "Sètifikasyon & Reyalizasyon",
    certs_subtitle:
      "Aprann kontinyèl se fondamantal pou kwasans mwen — soti nan pwogram fòmèl jiska espesyalizasyon pratik.",
    cert1: "Pwofesyonèl Sètifye Asiste pa IA",
    cert2: "Espesyalis Sekirite Enfòmatik",
    cert3: "Pwogram Rezidans TIC",
    cert4: "Machine Learning ak AWS & SageMaker",
    cert5: "Rezo Neral Atifisyèl an Python",
    cert6: "Devlopman AWS Serverless",
    cert7: "Python Zewo a Avanse + Pwojè",
    cert8: "Terraform — Debaz a Avanse",
    cert9: "Alexa Skill Builder",
    cert10: "LatinOware — Kongrè Amerik Latin Lojisyèl Lib",
    cert11: "IX Semèn Akademik Syans Enfòmatik",
    cert12: "Lojik Pwogramasyon & Pensé Konpitatif",
    un_title: "Reprezante nan Nasyon Zini",
    un_desc:
      "Mwen te gen opòtinite pou patisipe nan yon evènman inovasyon nan Nasyon Zini — yon etap enpòtan ki reflete angajman mwen nan itilize teknoloji pou enpak mondyal ak kontribye nan konvèsasyon entènasyonal sou IA ak devlopman dirab.",

    contact_tag: "Ann Konekte",
    contact_title: "Kontakte Mwen",
    contact_subtitle:
      "Mwen ouvè pou nouvo opòtinite, kolaborasyon rechèch ak konvèsasyon enteresan sou IA ak enjenyeri lojisyèl.",
    contact_email_label: "Imèl",
    contact_location_label: "Kote",
    contact_languages_label: "Lang",
    contact_languages_val: "Fransè · Kreyòl Ayisyen · Pòtigè · Anglè",
    form_name: "Non",
    form_name_placeholder: "Non ou",
    form_email: "Imèl",
    form_email_placeholder: "ou@imèl.com",
    form_message: "Mesaj",
    form_message_placeholder: "Di mwen sou pwojè ou oswa opòtinite ou...",
    form_send: "Voye Mesaj",
    form_note: "Mwen reponn anjeneral nan 24–48 è.",

    contact_whatsapp_label: "WhatsApp",
    contact_whatsapp_cta: "Voye mwen yon mesaj sou WhatsApp",
    contact_whatsapp_sub: "Klike anba a pou kòmanse yon konvèsasyon dirèkteman sou WhatsApp Web.",
    contact_whatsapp_btn: "Ouvri WhatsApp",

    footer_copy: "Bati ak pasyon ak presizyon. Ouvè pou opòtinite nan tout mond lan.",
    footer_rights: "Tout dwa rezève.",
  },
};
