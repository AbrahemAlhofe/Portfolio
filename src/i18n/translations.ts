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
      siteTitle: 'Ibrahim Elhofy — Business Solutions Developer',
      siteDescription: 'Self-driven engineer leading business growth through AI, automation, and internal systems.',
      servicesTitle: 'Services — Ibrahim Elhofy',
      servicesDescription: 'Operational systems and AI-enabled workflows shaped by real production environments.',
    },
    nav: {
      logo: 'IE',
      logoTag: 'Solutions',
      switchLangText: 'النسخة العربية',
      consultation: 'Free consultation',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Ibrahim Elhofy`,
      downloadCv: 'Download CV',
      tagline: 'Business systems · AI · Automation',
    },
    hero: {
      badge: 'Business Solutions Developer · Cairo',
      title: 'I build systems that make businesses',
      titleHighlight: 'move.',
      bio: 'Self-driven engineer leading business growth through AI, automation, and internal systems—connecting operational reality with the right technology.',
      cta: 'Get a quote →',
    },
    photos: [
      { src: '/hero-photos/keynote.jpeg', alt: 'Ibrahim Elhofy speaking at an event', position: 'left-0 top-0 z-30 w-[66%] -rotate-3' },
      { src: '/hero-photos/team.jpeg', alt: 'Ibrahim Elhofy with collaborators', position: 'right-0 top-[15%] z-20 w-[62%] rotate-3' },
      { src: '/hero-photos/meeting.jpeg', alt: 'Ibrahim Elhofy at a professional meeting', position: 'bottom-0 left-[14%] z-10 w-[64%] -rotate-1' },
    ],
    systemsSection: {
      title: 'Services.',
      subtitle: 'Operational systems and AI-enabled workflows shaped by real production environments.',
      cardCta: 'Get a quote for a similar system',
      privacyNotice: 'Data in screenshots has been replaced with dummy data in respect of our clients\' privacy.',
    },
    systems: [
      {
        id: 'operations',
        tag: 'Operations transformation',
        title: 'Centralized production management',
        text: 'Replaced fragmented spreadsheets with a unified environment for production tracking, workflow coordination, permissions, and reporting.',
        stats: '81,051 rows · 5+ databases · 40+ employees',
        service: 'Internal operations system',
        images: [
          { src: '/services/povo-centralized-production-management.png', alt: 'Povo Studios centralized production-management control panel', caption: 'Centralized production-management control panel' },
          { src: '/services/povo-production-record-detail.png', alt: 'Production record detail view & audit trail', caption: 'Production record detail view & audit trail' },
          { src: '/services/povo-queue-versions.png', alt: 'Queue versioning & stage transitions', caption: 'Queue versioning & stage transitions' },
        ],
      },
      {
        id: 'ai-books',
        tag: 'AI & automation',
        title: 'AI-powered book production',
        text: 'A repeatable operation combining structured AI writing, production tracking, automated PDF creation, and employee workflows.',
        stats: '50+ books · 250–320 pages · ~$3 per book',
        service: 'AI production and automation',
        images: [
          { src: '/services/povo-ai-workflow-automation.png', alt: 'Automated textbook generation workflow pipeline in n8n', caption: 'Automated generation & export pipeline' },
          { src: '/services/povo-ai-textbooks-dashboard.png', alt: 'Anova Textbooks production management dashboard', caption: 'Textbooks tracking & review dashboard' },
        ],
      },
      {
        id: 'echo',
        tag: 'Platform & QA',
        title: 'Custom PDF proofing & QA systems',
        text: 'Purpose-built collaborative document review and annotation platforms designed to eliminate comment loss, handle complex Arabic typography, and streamline high-volume editorial QA.',
        stats: '180,000+ annotations/yr · 0% data loss · AWS + Next.js + PostgreSQL',
        service: 'PDF proofing system',
        images: [
          { src: '/services/echo-pdf-proofing-workspace.png', alt: 'PDF proofing workspace with outlines and threaded review', caption: 'Document outlines, PDF text highlight, and threaded annotation panel' },
          { src: '/services/echo-pdf-comment-thread.png', alt: 'In-document contextual comment thread with error classification', caption: 'In-document feedback threads with color-coded classification tags' },
          { src: '/services/echo-pdf-share-dialog.png', alt: 'Document viewer link sharing and role-based access control', caption: 'Role-based viewer link sharing and document access control' },
        ],
      },
    ] as SystemCaseStudy[],
    timelineSection: {
      title: 'Professional experience.',
      subtitle: 'A chronological record of self-initiated operational transformation, AI operations, and technical leadership—measured by business outcomes.',
      company: 'Povo Studios',
      role: 'Business Solutions Developer · R&D Department',
      period: 'Aug 2023 – Present',
      milestonePrefix: 'Milestone',
    },
    timeline: [
      {
        id: 'operations',
        step: '01',
        title: 'Business process transformation & operational excellence',
        summary: 'Independently analyzed production operations, identified bottlenecks and fragmented workflows, and led process reengineering, digital adoption, and continuous optimization.',
        achievements: [
          'Increased monthly production output 92%, from 456 to 876 production hours.',
          'Improved QA productivity 40% and reduced reporting turnaround from 3 days to minutes.',
          'Led rollout, employee training, and iterative improvement for 40+ employees.',
          'Delivered scalable, cost-efficient digital operations with role-based access and version history.',
        ],
      },
      {
        id: 'ai-operations',
        step: '02',
        title: 'AI strategy, workflow automation & operations development',
        summary: 'Established a new AI-enabled production function from the ground up, defining operating procedures, training, performance tracking, and automated delivery workflows.',
        achievements: [
          'Produced and delivered 50+ AI-generated books published on Abjjad.',
          'Created structured AI instructions for 250-320 page long-form content.',
          'Integrated workflow automation and standardized PDF production.',
          'Reached approximately $3 variable production cost per book.',
        ],
      },
      {
        id: 'technical-leadership',
        step: '03',
        title: 'Technical leadership, product development & observability',
        summary: 'Led a technical team in translating operational feedback into reliable, scalable, and accessible product priorities for a high-volume production environment.',
        achievements: [
          'Established structured team workflows and pull-request reviews.',
          'Integrated AWS, Redis, PostgreSQL, and Sentry-based observability.',
          'Improved support for Arabic workflows, unstable connectivity, and modest hardware.',
          'Supported a QA environment handling approximately 180,000 annotations annually.',
        ],
      },
    ] as TimelineEntry[],
    bottomCta: {
      title: 'Have an operation that has outgrown spreadsheets?',
      consultation: 'Book a free 1-hour consultation',
      quote: 'Get a quote',
    },
    servicesPage: {
      badge: 'Services for growing operations',
      title: 'Your workflow should be an advantage—not a daily workaround.',
      description: 'I turn fragmented processes into reliable internal systems, from operational diagnosis through implementation and team adoption.',
      serviceLabel: 'Service',
      quoteBtn: 'Get a quote',
      relatedCase: 'Related case',
      items: [
        { title: 'Internal operations systems', text: 'Centralized production tracking, workflow coordination, permissions, dashboards, and reporting.', service: 'Internal operations system', caseId: 'operations' },
        { title: 'AI production & automation', text: 'Structured AI workflows, repeatable content pipelines, and human-in-the-loop operations.', service: 'AI production and automation', caseId: 'ai-books' },
        { title: 'PDF proofing & QA systems', text: 'Purpose-built document annotation, proofreading workflows, Arabic text handling, and zero-data-loss quality platforms.', service: 'PDF proofing system', caseId: 'echo' },
        { title: 'Business-critical platforms', text: 'Purpose-built internal software for real reliability, language, scale, and workflow needs.', service: 'Custom business platform', caseId: 'echo' },
        { title: 'QA workflow redesign', text: 'Error reporting, review flows, traceability, and a quality analytics foundation.', service: 'QA workflow redesign', caseId: 'echo' },
        { title: 'Process analysis & redesign', text: 'Operational mapping, bottleneck discovery, requirements definition, and transformation roadmaps.', service: 'Process analysis and redesign', caseId: 'operations' },
        { title: 'Training & change enablement', text: 'Practical rollout, training, documentation, and continuous optimization.', service: 'Training and change enablement', caseId: 'operations' },
      ] as ServiceItem[],
    },
  },
  ar: {
    meta: {
      siteTitle: 'إبراهيم الحوفي — مطور حلول الأعمال',
      siteDescription: 'مهندس مبادر يقود نمو الأعمال من خلال الذكاء الاصطناعي والأتمتة والأنظمة الداخلية.',
      servicesTitle: 'الخدمات — إبراهيم الحوفي',
      servicesDescription: 'خدمات متخصصة للعمليات المتنامية من تشخيص سير العمل حتى التنفيذ والتبني الكامل.',
    },
    nav: {
      logo: 'IE',
      logoTag: 'حلول',
      switchLangText: 'English',
      consultation: 'استشارة مجانية',
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} إبراهيم الحوفي`,
      downloadCv: 'تحميل السيرة الذاتية',
      tagline: 'أنظمة أعمال وذكاء اصطناعي وأتمتة',
    },
    hero: {
      badge: 'مطور حلول الأعمال · القاهرة',
      title: 'أبني أنظمة تجعل الأعمال',
      titleHighlight: 'تتحرك.',
      bio: 'مهندس مبادر أقود نمو الأعمال من خلال الذكاء الاصطناعي والأتمتة والأنظمة الداخلية—ربط الواقع التشغيلي بالتقنية المناسبة.',
      cta: 'اطلب عرض سعر ←',
    },
    photos: [
      { src: '/hero-photos/keynote.jpeg', alt: 'إبراهيم الحوفي يتحدث في فعالية', position: 'right-0 top-0 z-30 w-[66%] rotate-3' },
      { src: '/hero-photos/team.jpeg', alt: 'إبراهيم الحوفي مع متعاونين', position: 'left-0 top-[15%] z-20 w-[62%] -rotate-3' },
      { src: '/hero-photos/meeting.jpeg', alt: 'إبراهيم الحوفي في اجتماع مهني', position: 'bottom-0 right-[14%] z-10 w-[64%] rotate-1' },
    ],
    systemsSection: {
      title: 'العمل بالتفصيل.',
      subtitle: 'من تشخيص التعطّل التشغيلي حتى إطلاق أنظمة يعتمد عليها الفريق يومياً.',
      cardCta: 'اطلب عرضاً لنظام مشابه',
      privacyNotice: 'تم استبدال البيانات في لقطات الشاشة ببيانات وهمية احتراماً لخصوصية عملائنا.',
    },
    systems: [
      {
        id: 'operations',
        tag: 'دراسة حالة',
        title: 'إدارة الإنتاج المركزية',
        text: 'بيئة إنتاج موحدة تربط سير العمل والصلاحيات والتقارير وإدارة البيانات لفرق الإنتاج.',
        stats: '81,051 سجلاً · 5+ قواعد بيانات · 40+ موظفاً',
        service: 'نظام تشغيل داخلي',
        images: [
          { src: '/services/povo-centralized-production-management.png', alt: 'واجهة نظام إدارة الإنتاج', caption: 'لوحة التحكم المركزية لإدارة الإنتاج' },
          { src: '/services/povo-production-record-detail.png', alt: 'تفاصيل سجل الإنتاج وسجل التدقيق', caption: 'تفاصيل سجل الإنتاج وسجل التدقيق' },
          { src: '/services/povo-queue-versions.png', alt: 'إدارة إصدارات ومراحل الطابور', caption: 'إدارة إصدارات ومراحل الطابور' },
        ],
      },
      {
        id: 'ai-books',
        tag: 'دراسة حالة',
        title: 'إنتاج الكتب بالذكاء الاصطناعي',
        text: 'عملية متكررة تجمع الكتابة المنظمة بالذكاء الاصطناعي وإدارة الإنتاج والأتمتة.',
        stats: '50+ كتاباً · 250–320 صفحة · ~$3 للكتاب الواحد',
        service: 'الإنتاج والأتمتة بالذكاء الاصطناعي',
        images: [
          { src: '/services/povo-ai-textbooks-dashboard.png', alt: 'لوحة متابعة ومراجعة الإنتاج', caption: 'لوحة متابعة ومراجعة الإنتاج' },
          { src: '/services/povo-ai-workflow-automation.png', alt: 'مسار أتمتة وتوليد الكتب', caption: 'مسار أتمتة وتوليد الكتب في n8n' },
        ],
      },
      {
        id: 'echo',
        tag: 'دراسة حالة',
        title: 'أنظمة تدقيق ومراجعة PDF',
        text: 'منصات تدقيق وضمان جودة مخصصة لملفات PDF والنصوص العربية، تضمن عدم فقدان الملاحظات وتتحمل ما يزيد عن 180,000 تعليق تدقيق سنوياً.',
        stats: '180,000+ تعليق سنوي · 0% فقدان بيانات · AWS + Next.js + PostgreSQL',
        service: 'نظام مراجعة وتدقيق PDF',
        images: [
          { src: '/services/echo-pdf-proofing-workspace.png', alt: 'واجهة نظام تدقيق ومراجعة ملفات PDF', caption: 'فهرس المستند، تحديد النصوص، ولوحة الملاحظات المترابطة' },
          { src: '/services/echo-pdf-comment-thread.png', alt: 'نافذة إضافة الملاحظات وتصنيفها', caption: 'محادثات الملاحظات وتصنيف الأخطاء (لغوية، فنية)' },
          { src: '/services/echo-pdf-share-dialog.png', alt: 'مشاركة المستندات مع فرق العمل', caption: 'إدارة مشاركة المستندات وصلاحيات العرض عبر الأجهزة' },
        ],
      },
    ] as SystemCaseStudy[],
    timelineSection: {
      title: 'الخبرة المهنية.',
      subtitle: 'سجل زمني للتحول التشغيلي والمبادرات التقنية الذاتية والأتمتة، مقاساً بنتائج الأعمال الواقعية.',
      company: 'بوفو ستوديوز (Povo Studios)',
      role: 'مطور حلول الأعمال · قسم الأبحاث والتطوير (R&D)',
      period: 'أغسطس 2023 – حتى الآن',
      milestonePrefix: 'محطة',
    },
    timeline: [
      {
        id: 'operations',
        step: '01',
        title: 'تحول العمليات التشغيلية والتميز التشغيلي',
        summary: 'تحليل مستقل لعمليات الإنتاج وتحديد نقاط الاختناق وسير العمل المجزأ، وقيادة إعادة هندسة العمليات والتحول الرقمي والتحسين المستمر.',
        achievements: [
          'زيادة إنتاجية ساعات العمل الشهرية بنسبة 92% (من 456 إلى 876 ساعة إنتاجية).',
          'تحسين إنتاجية مراجعة الجودة بنسبة 40% وتقليص وقت إعداد التقارير من 3 أيام إلى دقائق معدودة.',
          'قيادة الإطلاق وتدريب ودعم أكثر من 40 موظفاً على النظام الجديد.',
          'بناء عمليات رقمية منخفضة التكلفة وقابلة للتوسع مع سجل تدقيق وإدارة صلاحيات محكمة.',
        ],
      },
      {
        id: 'ai-operations',
        step: '02',
        title: 'استراتيجية الذكاء الاصطناعي وأتمتة مسارات العمل وتطوير الإنتاج',
        summary: 'تأسيس مسار إنتاج جديد مدعوم بالذكاء الاصطناعي من البداية، مع وضع إجراءات التشغيل والتدريب ومتابعة الأداء ومسارات التسليم الآلية.',
        achievements: [
          'إنتاج وتسليم أكثر من 50 كتاباً منشوراً رسمياً على منصة أبجد.',
          'تصميم توجيهات ذكاء اصطناعي منظمة ومخصصة لمحتوى طويل (250–320 صفحة).',
          'ربط مسارات العمل الآلية مع إنتاج وتصدير ملفات PDF قياسية ومعتمدة.',
          'الوصول إلى تكلفة إنتاج متغيرة تقارب 3 دولارات لكل كتاب.',
        ],
      },
      {
        id: 'technical-leadership',
        step: '03',
        title: 'القيادة الفنية وتطوير المنتجات وقابلية المراقبة',
        summary: 'قيادة الفريق التقني لترجمة متطلبات التشغيل والملاحظات اليومية إلى أولويات تطوير برمجية متينة وقابلة للتوسع في بيئة إنتاج كثيفة العمل.',
        achievements: [
          'بناء نظام عمل منظم للفريق ومراجعات الكود البرمجي (PR Reviews).',
          'دمج بنية تحتية سحابية متقدمة (AWS, Redis, PostgreSQL) ومراقبة مستمرة للأخطاء عبر Sentry.',
          'تحسين دعم النصوص العربية المعقدة والاتصال غير المستقر والأجهزة ذات الإمكانيات المتواضعة.',
          'دعم منصة جودة تستوعب ما يزيد عن 180,000 تعليق تدقيق وملاحظة سنوياً.',
        ],
      },
    ] as TimelineEntry[],
    bottomCta: {
      title: 'هل تجاوزت عملياتك قدرة جداول البيانات؟',
      consultation: 'احجز استشارة مجانية',
      quote: 'اطلب عرض سعر',
    },
    servicesPage: {
      badge: 'خدمات للعمليات المتنامية',
      title: 'سير العمل يجب أن يكون ميزة، لا حلاً مؤقتاً.',
      description: 'أحوّل العمليات المجزأة إلى أنظمة داخلية موثوقة، من التشخيص التشغيلي حتى التنفيذ وتبني الفريق.',
      serviceLabel: 'خدمة',
      quoteBtn: 'اطلب عرض سعر',
      relatedCase: 'دراسة حالة مرتبطة',
      items: [
        { title: 'أنظمة التشغيل الداخلية', text: 'تتبع مركزي للإنتاج، تنسيق سير العمل، الصلاحيات، لوحات التحكم، والتقارير.', service: 'نظام تشغيل داخلي', caseId: 'operations' },
        { title: 'الإنتاج والأتمتة بالذكاء الاصطناعي', text: 'مسارات عمل ذكاء اصطناعي منظمة، تدفق محتوى قابل للتكرار، وعمليات بإشراف بشري.', service: 'الإنتاج والأتمتة بالذكاء الاصطناعي', caseId: 'ai-books' },
        { title: 'أنظمة تدقيق ومراجعة PDF', text: 'ملاحظات المستندات، مسارات التدقيق اللغوي، دعم النصوص العربية، ومنصات جودة صفرية الفقدان.', service: 'نظام مراجعة وتدقيق PDF', caseId: 'echo' },
        { title: 'منصات الأعمال الحرجة', text: 'برمجيات داخلية مخصصة للاعتمادية الحقيقية واحتياجات التوسع واللغة وسير العمل.', service: 'منصة أعمال مخصصة', caseId: 'echo' },
        { title: 'إعادة تصميم ضمان الجودة', text: 'تقارير الأخطاء، تدفقات المراجعة، التتبع، وقواعد تحليلات الجودة الشاملة.', service: 'إعادة تصميم ضمان الجودة', caseId: 'echo' },
        { title: 'تحليل العمليات وإعادة تصميمها', text: 'رسم خرائط العمليات، اكتشاف الاختناقات، تحديد المتطلبات، وخطط التحول.', service: 'تحليل العمليات وإعادة تصميمها', caseId: 'operations' },
        { title: 'التدريب وإدارة التغيير', text: 'إطلاق عملي، تدريب الفرق، التوثيق الشامل، والتحسين المستمر.', service: 'التدريب وإدارة التغيير', caseId: 'operations' },
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
