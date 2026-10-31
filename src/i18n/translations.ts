export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';

export interface SystemCaseStudy {
  id?: string;
  tag: string;
  title: string;
  text: string;
  stats: string;
  service: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
}

export interface TimelineEntry {
  id: string;
  step: string;
  title: string;
  summary: string;
  achievements: string[];
}

export interface ServiceItem {
  title: string;
  text: string;
  service: string;
  caseId: string;
}

export const content = {
  en: {
    meta: {
      siteTitle: 'Ibrahim Elhofy — Business Solutions & Systems Engineer',
      siteDescription: 'I build custom internal systems and AI automation workflows that eliminate manual bottlenecks and multiply team output.',
      servicesTitle: 'Services & Solutions — Ibrahim Elhofy',
      servicesDescription: 'Practical systems for scaling operations: from workflow diagnosis to custom software, AI automation, and team adoption.',
    },
    nav: {
      logo: 'IE',
      logoTag: 'Solutions',
      switchLangText: 'النسخة العربية',
      consultation: 'Book free consultation',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Ibrahim Elhofy`,
      downloadCv: 'Download CV (PDF)',
      tagline: 'Internal Systems · AI Workflows · Automation',
    },
    hero: {
      badge: 'Business Solutions & Systems Engineer · Cairo',
      title: 'I build systems that turn operational chaos into',
      titleHighlight: 'scalable growth.',
      bio: 'I help companies replace scattered spreadsheets and manual bottlenecks with custom internal systems and AI automation—engineered around how your team actually works.',
      cta: 'Get a custom quote →',
    },
    photos: [
      { src: '/hero-photos/keynote.jpeg', alt: 'Ibrahim Elhofy speaking at an event', position: 'left-0 top-0 z-30 w-[66%] -rotate-3' },
      { src: '/hero-photos/team.jpeg', alt: 'Ibrahim Elhofy with collaborators', position: 'right-0 top-[15%] z-20 w-[62%] rotate-3' },
      { src: '/hero-photos/meeting.jpeg', alt: 'Ibrahim Elhofy at a professional meeting', position: 'bottom-0 left-[14%] z-10 w-[64%] -rotate-1' },
    ],
    systemsSection: {
      title: 'Proven systems.',
      subtitle: 'Custom internal platforms and AI-powered workflows engineered in real production environments to cut costs, save time, and multiply output.',
      cardCta: 'Request a similar system',
      privacyNotice: 'All screenshots use anonymized sample data to protect client confidentiality.',
    },
    systems: [
      {
        id: 'operations',
        tag: 'Operations Transformation',
        title: 'Centralized Production Management System',
        text: 'Replaced fragmented spreadsheets with a unified cloud workspace built and deployed in just 3 days—coordinating workflows, role-based permissions, and cutting management reporting from 3 days to minutes (+92% monthly output).',
        stats: '81,051 rows · 5+ interconnected databases · 40+ employees · $40/mo cost',
        service: 'Internal operations system',
        images: [
          { src: '/services/povo-centralized-production-management.png', alt: 'Povo Studios centralized production-management control panel', caption: 'Centralized control panel for real-time production tracking' },
          { src: '/services/povo-production-record-detail.png', alt: 'Production record detail view & audit trail', caption: 'Granular production record view with full change history & audit trail' },
          { src: '/services/povo-queue-versions.png', alt: 'Queue versioning & stage transitions', caption: 'Automated stage transitions and conflict-free file versioning' },
        ],
      },
      {
        id: 'ai-books',
        tag: 'AI & Workflow Automation',
        title: 'AI-Powered Book Production Pipeline',
        text: 'An end-to-end publishing operation combining multi-stage prompt engineering, centralized team tracking, and automated PDF formatting & cover assembly—scaling long-form book output to ~$3 per book.',
        stats: '50+ books published on Abjjad · 250–320 pages each · ~$3 cost/book',
        service: 'AI production and automation',
        images: [
          { src: '/services/povo-ai-workflow-automation.png', alt: 'Automated textbook generation workflow pipeline in n8n', caption: 'Automated pipeline converting AI output into formatted, cover-ready PDFs' },
          { src: '/services/povo-ai-textbooks-dashboard.png', alt: 'Anova Textbooks production management dashboard', caption: 'Centralized dashboard for tracking team submissions and publishing stages' },
        ],
      },
      {
        id: 'echo',
        tag: 'Custom Platform & QA',
        title: 'Custom PDF Proofing & QA Platform (Echo)',
        text: 'A purpose-built collaborative review platform engineered to overcome off-the-shelf tool failures—delivering full Arabic text support, zero comment loss, and fast performance even on unstable internet and modest hardware.',
        stats: '180,000+ annotations/yr · 0% data loss · AWS + Next.js + Redis + PostgreSQL',
        service: 'PDF proofing system',
        images: [
          { src: '/services/echo-pdf-proofing-workspace.png', alt: 'PDF proofing workspace with outlines and threaded review', caption: 'Full proofing workspace: document outline, Arabic text highlighting, and threaded comments' },
          { src: '/services/echo-pdf-comment-thread.png', alt: 'In-document contextual comment thread with error classification', caption: 'Contextual feedback threads with structured error classification for QA analytics' },
          { src: '/services/echo-pdf-share-dialog.png', alt: 'Document viewer link sharing and role-based access control', caption: 'Granular role-based access control and instant document sharing' },
        ],
      },
    ] as SystemCaseStudy[],
    timelineSection: {
      title: 'Impact & experience.',
      subtitle: 'How I evolved from the company’s sole software engineer into leading company-wide operational transformation, AI production departments, and engineering teams—measured by hard business numbers.',
      company: 'Povo Studios',
      role: 'Full Stack Engineer & Business Solutions Developer · R&D Department',
      period: 'Aug 2023 – Present',
      milestonePrefix: 'Milestone',
    },
    timeline: [
      {
        id: 'operations',
        step: '01',
        title: 'Business Process Transformation & Operational Excellence',
        summary: 'Proactively audited company-wide production operations beyond my initial engineering scope, uncovered critical bottlenecks, and led end-to-end digital transformation from architecture to employee adoption.',
        achievements: [
          'Increased monthly production output by 92% (from 456 to 876 production hours/month).',
          'Boosted QA department productivity by 40% and slashed management reporting time from 3 days to minutes.',
          'Built and deployed a centralized system in 3 days across 5+ databases (81,051 rows) at just $40/mo while leveraging 2.5+ TB of free storage.',
          'Trained and onboarded 40+ non-technical employees with role-based permissions, 24/7 sync, and unlimited version history.',
        ],
      },
      {
        id: 'ai-operations',
        step: '02',
        title: 'Establishing & Scaling an AI-Powered Book Production Department',
        summary: 'Spearheaded a new AI-powered publishing department from scratch—building SOPs, multi-stage prompt engineering systems, training materials, and automated PDF delivery pipelines.',
        achievements: [
          'Produced and delivered 50+ full-length books (250–320 pages each), subsequently published on Abjjad.',
          'Reduced variable production cost to approximately $3 per book.',
          'Architected multi-stage creative writing prompts in Google AI Studio with embedded HTML markup for standardized formatting.',
          'Built an automated pipeline that converts AI conversation links into formatted, cover-integrated PDFs tracked via a central Coda dashboard.',
        ],
      },
      {
        id: 'technical-leadership',
        step: '03',
        title: 'Technical Leadership & Custom QA Platform (Echo)',
        summary: 'Transitioned from sole software engineer to leading a dedicated engineering team to build Echo—engineering a custom platform around real business needs rather than adapting operations to off-the-shelf software limits.',
        achievements: [
          'Eliminated the 5–6% annotation data loss caused by third-party PDF tools, preventing costly rework.',
          'Scaled platform infrastructure (AWS, Next.js, Redis, PostgreSQL) to support ~180,000 QA annotations annually (20–35 comments/hr per employee).',
          'Engineered resilient performance for unstable internet connections, lower-spec devices, and complex Arabic typography.',
          'Established engineering best practices including structured team workflows, PR reviews, Sentry observability, and structured QA analytics.',
        ],
      },
    ] as TimelineEntry[],
    bottomCta: {
      title: 'Has your operation outgrown spreadsheets and manual workarounds?',
      consultation: 'Book a free 1-hour consultation',
      quote: 'Get a custom quote',
    },
    servicesPage: {
      badge: 'Practical solutions for scaling operations',
      title: 'Your workflow should be a competitive advantage—not a daily bottleneck.',
      description: 'I turn scattered spreadsheets and manual workarounds into reliable internal systems—handling everything from operational diagnosis to custom development and team adoption.',
      serviceLabel: 'Service',
      quoteBtn: 'Get a quote',
      relatedCase: 'View case study',
      items: [
        { title: 'Internal Operations Systems', text: 'Replace fragmented spreadsheets with a unified workspace for production tracking, task handoffs, role-based permissions, and instant management reporting.', service: 'Internal operations system', caseId: 'operations' },
        { title: 'AI Production & Workflow Automation', text: 'Turn repetitive work and long-form content creation into structured, human-in-the-loop AI pipelines that cut costs and scale output.', service: 'AI production and automation', caseId: 'ai-books' },
        { title: 'Custom PDF Proofing & QA Platforms', text: 'Collaborative document annotation and proofreading systems with full Arabic support, zero comment loss, and high-volume editorial workflows.', service: 'PDF proofing system', caseId: 'echo' },
        { title: 'Custom Business-Critical Software', text: 'Purpose-built internal web platforms engineered for your exact reliability, scale, connectivity, and language requirements when off-the-shelf tools fall short.', service: 'Custom business platform', caseId: 'echo' },
        { title: 'QA & Review Workflow Redesign', text: 'Eliminate version conflicts and lost feedback with structured error reporting, contextual review flows, and actionable quality analytics.', service: 'QA workflow redesign', caseId: 'echo' },
        { title: 'Process Audit & Reengineering', text: 'Deep-dive operational analysis to uncover hidden bottlenecks, eliminate redundant work, and design a high-ROI digital transformation roadmap.', service: 'Process analysis and redesign', caseId: 'operations' },
        { title: 'Team Training & Change Management', text: 'Hands-on onboarding, clear SOPs, and iterative refinements so non-technical teams adopt new systems smoothly and permanently.', service: 'Training and change enablement', caseId: 'operations' },
      ] as ServiceItem[],
    },
  },
  ar: {
    meta: {
      siteTitle: 'إبراهيم الحوفي — مطور حلول وأنظمة الأعمال',
      siteDescription: 'أبني أنظمة تشغيل داخلية وأتمتة بالذكاء الاصطناعي تضاعف إنتاجية الشركات وتنهي فوضى العمل اليدوي.',
      servicesTitle: 'الخدمات والحلول — إبراهيم الحوفي',
      servicesDescription: 'حلول عملية للشركات المتنامية: من تشخيص اختناقات التشغيل إلى بناء الأنظمة الداخلية وأتمتة الذكاء الاصطناعي وتدريب الفريق.',
    },
    nav: {
      logo: 'IE',
      logoTag: 'حلول الأعمال',
      switchLangText: 'English',
      consultation: 'احجز استشارة مجانية',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} إبراهيم الحوفي`,
      downloadCv: 'تحميل السيرة الذاتية (CV)',
      tagline: 'أنظمة تشغيل · ذكاء اصطناعي · أتمتة',
    },
    hero: {
      badge: 'مطور حلول وأنظمة الأعمال · القاهرة',
      title: 'أبني أنظمة تحوّل فوضى التشغيل إلى',
      titleHighlight: 'نمو أسرع.',
      bio: 'أساعد الشركات على التخلص من العمل اليدوي المشتت ومضاعفة إنتاجيتها، عبر بناء أنظمة إدارة داخلية وأتمتة ذكية مصممة على مقاس احتياجات فريقك الفعلية.',
      cta: 'احصل على عرض سعر ←',
    },
    photos: [
      { src: '/hero-photos/keynote.jpeg', alt: 'إبراهيم الحوفي يتحدث في فعالية', position: 'right-0 top-0 z-30 w-[66%] rotate-3' },
      { src: '/hero-photos/team.jpeg', alt: 'إبراهيم الحوفي مع فريق العمل', position: 'left-0 top-[15%] z-20 w-[62%] -rotate-3' },
      { src: '/hero-photos/meeting.jpeg', alt: 'إبراهيم الحوفي في اجتماع عمل', position: 'bottom-0 right-[14%] z-10 w-[64%] rotate-1' },
    ],
    systemsSection: {
      title: 'حلول على أرض الواقع.',
      subtitle: 'أنظمة تشغيل داخلية ومسارات أتمتة بالذكاء الاصطناعي بُنيت داخل بيئات إنتاج حقيقية لتوفير الوقت، وخفض التكلفة، ومضاعفة الإنجاز.',
      cardCta: 'اطلب نظاماً مشابهاً لشركتك',
      privacyNotice: 'تم استبدال البيانات في لقطات الشاشة ببيانات افتراضية حفاظاً على سرية بيانات عملائنا.',
    },
    systems: [
      {
        id: 'operations',
        tag: 'تطوير العمليات والتشغيل',
        title: 'نظام مركزي لإدارة الإنتاج والتشغيل',
        text: 'استبدال جداول الإكسيل المتفرقة بنظام سحابي موحد تم بناؤه وإطلاقه في 3 أيام فقط؛ يربط فرق العمل، وينظم الصلاحيات، ويُصدر تقارير الإدارة في دقائق بدلاً من أيام—مما ضاعف الإنتاجية بنسبة 92%.',
        stats: '81,051 سجلاً · +5 قواعد بيانات مترابطة · +40 موظفاً · بتكلفة 40$/شهرياً فقط',
        service: 'نظام إدارة تشغيل داخلي',
        images: [
          { src: '/services/povo-centralized-production-management.png', alt: 'لوحة التحكم المركزية لإدارة الإنتاج', caption: 'لوحة تحكم مركزية لمتابعة سير الإنتاج لحظة بلحظة' },
          { src: '/services/povo-production-record-detail.png', alt: 'تفاصيل سجل الإنتاج وسجل التعديلات', caption: 'تفاصيل سجل الإنتاج مع تتبع كامل لتاريخ التعديلات' },
          { src: '/services/povo-queue-versions.png', alt: 'إدارة إصدارات الملفات ومراحل العمل', caption: 'تنظيم مراحل العمل وإصدارات الملفات ومنع تضارب النسخ' },
        ],
      },
      {
        id: 'ai-books',
        tag: 'الذكاء الاصطناعي والأتمتة',
        title: 'خطوط إنتاج المحتوى والكتب بالذكاء الاصطناعي',
        text: 'تأسيس منظومة إنتاج متكاملة تجمع بين هندسة الأوامر المتقدمة (Prompt Engineering)، ولوحة متابعة المهام، والأتمتة الكاملة لتحويل المخرجات إلى ملفات PDF منسقة وجاهزة للنشر بتكلفة لا تتجاوز 3$ للكتاب.',
        stats: '+50 كتاباً منشوراً على "أبجد" · 250–320 صفحة للكتاب · ~3$ تكلفة إنتاج الكتاب',
        service: 'الإنتاج والأتمتة بالذكاء الاصطناعي',
        images: [
          { src: '/services/povo-ai-workflow-automation.png', alt: 'مسار أتمتة وتوليد الكتب في n8n', caption: 'خط أتمتة متكامل لمعالجة المحتوى وتصدير ملفات PDF تلقائياً' },
          { src: '/services/povo-ai-textbooks-dashboard.png', alt: 'لوحة متابعة ومراجعة إنتاج الكتب', caption: 'لوحة تحكم مركزية لمتابعة الإنجاز ومراجعة تسليمات الفريق' },
        ],
      },
      {
        id: 'echo',
        tag: 'منصات مخصصة وضمان الجودة',
        title: 'منصة مخصصة لمراجعة وتدقيق ملفات PDF (Echo)',
        text: 'منصة داخلية صُممت خصيصاً للقضاء على مشاكل الأدوات الجاهزة؛ تدعم اللغة العربية بالكامل، وتمنع ضياع أي ملاحظة (0% فقدان بيانات)، وتعمل بكفاءة وسرعة حتى مع الإنترنت الضعيف والأجهزة المتواضعة.',
        stats: '+180,000 ملاحظة سنوياً · 0% فقدان بيانات · AWS + Next.js + PostgreSQL',
        service: 'منصة مراجعة وتدقيق PDF',
        images: [
          { src: '/services/echo-pdf-proofing-workspace.png', alt: 'بيئة عمل مراجعة وتدقيق ملفات PDF', caption: 'واجهة تدقيق متكاملة: فهرس المستند، وتحديد النصوص، وسلاسل الملاحظات' },
          { src: '/services/echo-pdf-comment-thread.png', alt: 'نظام الملاحظات السياقية وتصنيف الأخطاء', caption: 'ملاحظات مرتبطة بسياق النص مع تصنيف ذكي للأخطاء لتحليل الجودة' },
          { src: '/services/echo-pdf-share-dialog.png', alt: 'إدارة مشاركة المستندات وصلاحيات الفريق', caption: 'تحكم دقيق في صلاحيات العرض والتعديل ومشاركة الروابط حسب دور كل موظف' },
        ],
      },
    ] as SystemCaseStudy[],
    timelineSection: {
      title: 'خبرة تصنع فارقاً في الأرقام.',
      subtitle: 'سجل عملي من المبادرة بتحويل العمليات، وتأسيس خطوط إنتاج بالذكاء الاصطناعي، وقيادة الفرق التقنية لتحقيق نتائج أعمال ملموسة.',
      company: 'بوفو ستوديوز (Povo Studios)',
      role: 'مهندس برمجيات ومطور حلول أعمال (Full Stack) · قسم البحث والتطوير (R&D)',
      period: 'أغسطس 2023 – حتى الآن',
      milestonePrefix: 'المرحلة',
    },
    timeline: [
      {
        id: 'operations',
        step: '01',
        title: 'تطوير منظومة التشغيل ومضاعفة الإنتاجية',
        summary: 'بادرت بتحليل شامل لعمليات الإنتاج واكتشاف نقاط الاختناق وتشتت المهام، ثم قدت مبادرة تحول رقمي شاملة على مستوى الشركة—من بناء النظام في 3 أيام وحتى تدريب الفريق واعتماده بالكامل.',
        achievements: [
          'مضاعفة الإنتاج الشهري بنسبة 92% (من 456 إلى 876 ساعة إنتاج شهرياً).',
          'رفع إنتاجية قسم ضمان الجودة (QA) بنسبة 40%، وتقليص وقت إعداد تقارير الإدارة من 3 أيام إلى دقائق معدودة.',
          'بناء وإطلاق نظام مركزي في 3 أيام يربط +5 قواعد بيانات (+81,000 سجل) بتكلفة 40$ شهرياً مع استغلال +2.5 تيرابايت تخزين مجاني.',
          'قيادة التغيير وتدريب أكثر من 40 موظفاً من خلفيات غير تقنية، مع نظام صلاحيات دقيق وسجل استرجاع غير محدود للتعديلات.',
        ],
      },
      {
        id: 'ai-operations',
        step: '02',
        title: 'تأسيس وتوسيع قسم إنتاج الكتب بالذكاء الاصطناعي',
        summary: 'حولت فرصة عمل ناشئة إلى قسم إنتاج متكامل ومستدام من الصفر؛ شمل وضع إجراءات التشغيل القياسية (SOPs)، وتدريب الموظفين، وهندسة الأوامر، وأتمتة مسار النشر.',
        achievements: [
          'إنتاج وتسليم أكثر من 50 كتاباً كاملاً (250–320 صفحة للكتاب) تم نشرها على منصة "أبجد".',
          'الوصول بتكلفة الإنتاج المتغيرة إلى حوالي 3 دولارات فقط للكتاب الواحد.',
          'تصميم نظام كتابة ذكي متعدد المراحل عبر Google AI Studio مدمج بهيكلة HTML لتوحيد تنسيق المحتوى الطويل.',
          'أتمتة خط الإنتاج لتحويل محادثات الذكاء الاصطناعي تلقائياً إلى ملفات PDF منسقة ومدمجة بالأغلفة مع لوحة متابعة مركزية.',
        ],
      },
      {
        id: 'technical-leadership',
        step: '03',
        title: 'القيادة التقنية وبناء منصة ضمان الجودة المخصصة (Echo)',
        summary: 'تطورت مسؤولياتي من العمل كمهندس البرمجيات الوحيد في الشركة إلى قيادة فريق تقني متخصص لبناء منصة "Echo" الداخلية، وتطويع التكنولوجيا لخدمة احتياجات الإنتاج الفعلية بدلاً من التكيف مع قصور البرامج الجاهزة.',
        achievements: [
          'القضاء نهائياً على مشكلة ضياع 5–6% من ملاحظات الجودة التي كانت تسببها الأدوات الخارجية وتؤدي لإعادة العمل.',
          'قيادة تطوير بنية تحتية عالية الاعتمادية (AWS, Next.js, Redis, PostgreSQL) تستوعب نحو 180,000 ملاحظة سنوياً (20–35 ملاحظة/ساعة للموظف).',
          'تحسين تجربة الاستخدام لتدعم النصوص العربية بالكامل وتعمل بكفاءة عالية مع الإنترنت غير المستقر والأجهزة المتواضعة.',
          'إرساء ممارسات هندسية احترافية تشمل مراجعات الكود (PR Reviews)، والرقابة اللحظية على الأخطاء عبر Sentry، وتأسيس قاعدة لتحليلات الجودة.',
        ],
      },
    ] as TimelineEntry[],
    bottomCta: {
      title: 'هل كبرت أعمالك وأصبحت جداول الإكسيل تعطّل فريقك؟',
      consultation: 'احجز استشارة مجانية لمدة ساعة',
      quote: 'احصل على عرض سعر',
    },
    servicesPage: {
      badge: 'حلول عملية للشركات المتنامية',
      title: 'نظام عملك يجب أن يكون نقطة قوتك، لا عبئاً يومياً على فريقك.',
      description: 'أحوّل العمليات المبعثرة والعمل اليدوي المرهق إلى أنظمة داخلية ذكية وموثوقة—بدايةً من تشخيص المشكلة على أرض الواقع وحتى بناء النظام وتدريب فريقك عليه.',
      serviceLabel: 'خدمة',
      quoteBtn: 'احصل على عرض سعر',
      relatedCase: 'شاهد دراسة الحالة',
      items: [
        { title: 'أنظمة إدارة التشغيل والإنتاج', text: 'بديل متكامل لجداول البيانات يجمع متابعة الإنتاج، وتوزيع المهام، والصلاحيات، ولوحات التحكم، وتقارير الإدارة اللحظية في مكان واحد.', service: 'نظام إدارة تشغيل داخلي', caseId: 'operations' },
        { title: 'أتمتة العمليات والإنتاج بالذكاء الاصطناعي', text: 'تحويل المهام المتكررة وإنتاج المحتوى إلى خطوط عمل ذكية ومؤتمتة بإشراف بشري، لتوفير الوقت وخفض التكاليف مع الحفاظ على الجودة.', service: 'الإنتاج والأتمتة بالذكاء الاصطناعي', caseId: 'ai-books' },
        { title: 'منصات مراجعة وتدقيق المستندات (PDF)', text: 'أنظمة تدقيق ومراجعة تفاعلية تدعم اللغة العربية بالكامل، وتمنع ضياع أي ملاحظة، وتسرّع التواصل بين فرق الإنتاج والجودة.', service: 'منصة مراجعة وتدقيق PDF', caseId: 'echo' },
        { title: 'تطوير منصات وأنظمة داخلية مخصصة', text: 'بناء برمجيات مصممة خصيصاً لطبيعة عملك عندما تعجز الأدوات الجاهزة عن تلبية متطلبات الاعتمادية، أو اللغة، أو حجم العمل.', service: 'منصة أعمال مخصصة', caseId: 'echo' },
        { title: 'تطوير منظومة ضمان الجودة (QA)', text: 'إعادة هيكلة دورة المراجعة واكتشاف الأخطاء، وبناء نظام تتبع وتصنيف دقيق يرفع كفاءة فرق الجودة ويمنع تكرار الأخطاء.', service: 'تطوير منظومة ضمان الجودة', caseId: 'echo' },
        { title: 'تحليل العمليات وإعادة هندستها', text: 'دراسة سير العمل الحالي على أرض الواقع، واكتشاف نقاط الاختناق وهدر الوقت، ووضع خارطة طريق عملية للتحول الرقمي بأفضل عائد على التكلفة.', service: 'تحليل العمليات وإعادة هندستها', caseId: 'operations' },
        { title: 'تدريب الفرق وإدارة التغيير', text: 'ضمان انتقال فريقك (بمن فيهم غير التقنيين) إلى الأنظمة الجديدة بسلاسة تامة، عبر التدريب العملي، والتوثيق الواضح، والتحسين المستمر.', service: 'تدريب الفرق وإدارة التغيير', caseId: 'operations' },
      ] as ServiceItem[],
    },
  },
} as const;

export function getTranslations(locale?: string) {
  const lang: Locale = locale === 'ar' ? 'ar' : 'en';
  return { lang, t: content[lang] };
}

export function getLocalePath(path: string, targetLocale: Locale): string {
  const cleanPath = path.replace(/^\/ar(\/|$)/, '/');
  if (targetLocale === 'ar') {
    return cleanPath === '/' ? '/ar/' : `/ar${cleanPath}`;
  }
  return cleanPath;
}
